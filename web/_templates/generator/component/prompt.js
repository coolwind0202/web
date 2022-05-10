const fs = require('fs');

module.exports = {
  prompt: ({ prompter, args }) => {
    async function promptDir({ path }) {
      const result = await prompter.prompt({
        type: 'select',
        name: 'path',
        message: `ディレクトリを選択してください。（current: ${path}）`,
        choices: [
          'このディレクトリにする',
          ...fs.readdirSync(path, { withFileTypes: true }).filter((file) => file.isDirectory()),
        ],
      });
      if (result.path === 'このディレクトリにする') return { path, confirmed: true };
      return { path: `${path}/${result.path}`, confirmed: false };
    }

    async function main() {
      let { path, confirmed } = await promptDir({ path: './src/components' });

      while (!confirmed) {
        const result = await promptDir({ path });
        path = result.path;
        confirmed = result.confirmed;
      }

      let result = { path: path.slice(2) };
      result = Object.assign(
        result,
        await prompter.prompt({
          type: 'input',
          name: 'component_name',
          message: 'コンポーネント名を入力してください。',
        }),
      );
      result = Object.assign(
        result,
        await prompter.prompt({
          type: 'confirm',
          name: 'require_storybook',
          message: 'Storybookファイルを生成しますか。',
        }),
      );

      return result;
    }
    return main();
  },
};

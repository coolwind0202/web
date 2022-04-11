module.exports = [
  {
    type: 'select',
    name: 'directory',
    message: 'ディレクトリ名を選択してください。',
    choices: ['ui', 'model', 'page'],
  },
  {
    type: 'input',
    name: 'subdirectory',
    message: 'サブディレクトリ名を入力してください。',
    validate: (input) => input !== '',
  },
  {
    type: 'input',
    name: 'component_name',
    message: 'コンポーネント名を入力してください。',
    validate: (input) => input !== '',
  },
  {
    type: 'confirm',
    name: 'require_storybook',
    message: 'Storybookファイルを生成しますか？',
  },
];

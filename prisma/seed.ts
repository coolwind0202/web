import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

async function main() {
  const hoko = await prisma.tag.upsert({
    where: { id: 1 },
    update: {},
    create: {
      name: "ガチホコ",
      color: "#9b942d",
      src:
        "https://img.game8.jp/2591547/94a3c78268a7d3611c58b290b870c8d9.png/show",
    },
  });
  const area = await prisma.tag.upsert({
    where: { id: 2 },
    update: {},
    create: {
      name: "ガチエリア",
      color: "#09b43a",
      src:
        "https://img.game8.jp/2591546/6402a64cd8cd5598b3470e74fad1ce6d.png/show",
    },
  });

  const user = await prisma.discordUser.upsert({
    where: { id: 1 },
    update: {},
    create: {
      discord_id: "1",
      discriminator: "1000",
      username: "お",
      avatar_url:
        "https://pbs.twimg.com/media/D4gRqxVUcAAH9R8?format=jpg&name=medium",
    },
  });
  const profile = await prisma.profile.upsert({
    where: { id: 1 },
    update: {},
    create: {
      friend_code: "1234-1234-1234",
      about: "ユーザー1人目",
      discord_user: {
        connect: {
          discord_id: user.discord_id,
        },
      },
    },
  });
  const user2 = await prisma.discordUser.upsert({
    where: { id: 3 },
    update: {},
    create: {
      discord_id: "2",
      discriminator: "2000",
      username: "さいたま",
      avatar_url: "https://pbs.twimg.com/media/Dpw-95kUwAAswNa.jpg",
    },
  });
  const profile2 = await prisma.profile.upsert({
    where: { id: 2 },
    update: {},
    create: {
      friend_code: "",
      about: "こんにちは！\n果たして改行できるのかー!\n期待してますよ!",
      discord_user: {
        connect: {
          discord_id: user2.discord_id,
        },
      },
    },
  });

  await prisma.profileTag.upsert({
    where: { id: 1 },
    update: {},
    create: {
      profile: {
        connect: {
          id: profile.id,
        },
      },
      tag: {
        connect: {
          id: hoko.id,
        },
      },
    },
  });

  await prisma.profileTag.upsert({
    where: { id: 2 },
    update: {},
    create: {
      profile: {
        connect: {
          id: profile.id,
        },
      },
      tag: {
        connect: {
          id: area.id,
        },
      },
    },
  });

  await prisma.profileTag.upsert({
    where: { id: 3 },
    update: {},
    create: {
      profile: {
        connect: {
          id: profile2.id,
        },
      },
      tag: {
        connect: {
          id: area.id,
        },
      },
    },
  });
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });

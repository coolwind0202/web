import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

async function main() {
  const tag = await prisma.tag.upsert({
    where: { id: 1 },
    update: {},
    create: {
      name: "ガチホコ",
      color: "#9b942d",
      src:
        "https://img.game8.jp/2591547/94a3c78268a7d3611c58b290b870c8d9.png/show",
    },
  });
  const user = await prisma.discordUser.upsert({
    where: { id: 1 },
    update: {},
    create: {
      discord_id: "1",
      discriminator: "1000",
      username: "yarimasu",
      avatar_url:
        "https://pbs.twimg.com/media/D4gRqxVUcAAH9R8?format=jpg&name=medium",
    },
  });
  const profile = await prisma.profile.upsert({
    where: { id: 1 },
    update: {},
    create: {
      friend_code: "1234-1234-1234",
      about: "yoro^^",
      discord_user: {
        connect: {
          discord_id: user.discord_id,
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
          id: tag.id,
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

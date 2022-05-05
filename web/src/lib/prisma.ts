import { excludeNull } from "@/utils/filter";
import { Prisma, PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

/**
 * `getUser`、`getUsers`で使うクエリに対する型情報
 */
const discordUserWithProfile = Prisma.validator<Prisma.DiscordUserArgs>()({
  include: {
    Profile: {
      include: {
        ProfileTag: {
          include: {
            tag: true,
          },
        },
      },
    },
  },
});

export type DiscordUserWithProfile = Prisma.DiscordUserGetPayload<
  typeof discordUserWithProfile
>;

/**
 * データベースから`User`オブジェクトを取得します。
 * @param discord_id 取得するユーザーのDiscord ID
 * @returns `User`または`null`のPromise
 */
const getUser = async (
  discord_id: string,
): Promise<DiscordUserWithProfile | null> => {
  const result = await prisma.discordUser.findUnique({
    where: { discord_id },
    include: {
      Profile: { include: { ProfileTag: { include: { tag: true } } } },
    },
  });

  return result;
};

/**
 * データベースから`User`オブジェクトのリストを取得します。
 * @returns `User`のリストのPromise
 */
const getUsers = async (): Promise<DiscordUserWithProfile[]> => {
  const result = await prisma.discordUser.findMany({
    include: {
      Profile: {
        include: {
          ProfileTag: {
            include: {
              tag: true,
            },
          },
        },
      },
    },
  });
  return excludeNull(result);
};

export { getUser, getUsers };

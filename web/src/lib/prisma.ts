import { User } from "@/types/user";
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

type discordUserType = Prisma.DiscordUserGetPayload<
  typeof discordUserWithProfile
>;

/**
 * データベースから`User`オブジェクトを取得します。
 * @param discord_id 取得するユーザーのDiscord ID
 * @returns `User`または`null`のPromise
 */
const getUser = async (discord_id: string): Promise<User | null> => {
  const result = await prisma.discordUser.findUnique({
    where: { discord_id },
    include: {
      Profile: { include: { ProfileTag: { include: { tag: true } } } },
    },
  });

  return result !== null ? convertUser(result) : null;
};

/**
 * データベースから`User`オブジェクトのリストを取得します。
 * @returns `User`のリストのPromise
 */
const getUsers = async (): Promise<User[]> => {
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
  return excludeNull(result.map((user) => convertUser(user)));
};

/**
 * データベースで取得した`DiscordUser`オブジェクトを`User`オブジェクトに整形します。
 * @param user 整形したい`DiscordUser`オブジェクト
 * @returns `user`が`null`の場合は`null`、それ以外は`User`
 */
const convertUser = (
  user: discordUserType,
): User | null => {
  if (user === null) return null;
  const profile = user.Profile[0];

  // `User`オブジェクトに作り変える
  return {
    discord: {
      username: user.username,
      discriminator: user.discriminator,
      avatar_url: user.avatar_url ?? undefined,
    },
    profile: {
      about: profile.about ?? "",
      friend_code: profile.friend_code,
      tags: profile.ProfileTag.map((tag) => ({
        id: tag.tag.id.toString(),
        name: tag.tag.name,
        color: tag.tag.color,
        src: tag.tag.src ?? undefined,
      })),
    },
  };
};

export { getUser, getUsers };

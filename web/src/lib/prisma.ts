import { excludeNull } from "@/utils/filter";
import { Prisma, PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const _accountQueryValidator = Prisma.validator<
  Prisma.MemberAccountArgs
>()({
  include: {
    profile: {
      include: {
        clusters: true,
      },
    },
    discord_user: true,
  },
});

export type MemberAccountWithPayload = Prisma.MemberAccountGetPayload<
  typeof _accountQueryValidator
>;

/**
 * データベースから`MemberAccount`オブジェクトを取得します。
 * @param id 取得するメンバーの内部ID
 */
export const getMemberAccount = async (
  id: number,
): Promise<MemberAccountWithPayload | null> => {
  const result = await prisma.memberAccount.findUnique({
    where: { id },
    ..._accountQueryValidator,
  });

  return result;
};

/**
 * データベースから`MemberAccount`オブジェクトのリストを取得します。
 */
export const getMemberAccounts = async (): Promise<
  MemberAccountWithPayload[]
> => {
  const result = await prisma.memberAccount.findMany(_accountQueryValidator);
  return excludeNull(result);
};

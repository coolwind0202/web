import { useRouter } from "next/router";
import { DiscordUserWithProfile } from "../prisma";

/**
 * `next/router`から、現在の`user`パラメータの値に該当するユーザーを返却するhooksです。
 * @param users 検索対象のユーザーのリスト
 * @returns IDが合致したユーザー
 */
export const useUserParameter = (users: DiscordUserWithProfile[]) => {
  const router = useRouter();
  if (!router.isReady) return null;
  const userId = router.query.user;
  if (typeof userId !== "string") return null;
  const user = users.find((user) => user.discord_id === userId);
  return user ?? null;
};

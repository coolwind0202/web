import { useRouter } from "next/router";
import { MemberAccountWithPayload } from "@/lib/prisma";

/**
 * `next/router`から、現在の`member`パラメータの値に該当するメンバーを返却するhooksです。
 * @param members 検索対象のメンバーの配列
 * @returns IDが合致したメンバー
 */
export const useMemberIdParameter = (members: MemberAccountWithPayload[]) => {
  const router = useRouter();
  if (!router.isReady) return null;
  const memberId = router.query.member;
  if (typeof memberId !== "string") return null;
  const member = members.find((member) => member.id.toString() === memberId);
  return member ?? null;
};

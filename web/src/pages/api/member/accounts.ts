// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { getMemberAccounts, MemberAccountWithPayload } from "@/lib/prisma";
import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<MemberAccountWithPayload>,
) {
  const members = await getMemberAccounts();
  return members;
}

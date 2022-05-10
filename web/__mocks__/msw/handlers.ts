import { rest } from "msw";
import { MemberAccountWithPayload } from "@/lib/prisma";
import { accounts } from "@/utils/mock_data";

export const handlers = [
  rest.get("http://localhost:3000/api/member/accounts", (_, res, ctx) => {
    console.log("?");
    return res(ctx.json(Object.values(accounts) as MemberAccountWithPayload[]));
  }),
];

import { MemberAccountWithPayload } from "@/lib/prisma";
import { MemberCluster } from "@prisma/client";

const clusterKeys = ["A", "B", "C"] as const;
type clusterKeys = typeof clusterKeys[number];

export const clusters: { [key in clusterKeys]: MemberCluster } = {
  "A": {
    id: 1,
    name: "Cluster 1",
    icon_url:
      "https://img.game8.jp/2591547/94a3c78268a7d3611c58b290b870c8d9.png/show",
    color: "#9b942d",
  },
  "B": {
    id: 2,
    name: "Cluster 2",
    icon_url:
      "https://img.game8.jp/2591547/94a3c78268a7d3611c58b290b870c8d9.png/show",
    color: "#9b942d",
  },
  "C": {
    id: 3,
    name: "Cluster 3",
    icon_url:
      "https://img.game8.jp/2591547/94a3c78268a7d3611c58b290b870c8d9.png/show",
    color: "#9b942d",
  },
};

const DISCORD_ID_LENGTH = 24;

const keys = ["A", "B", "C"] as const;
type keys = typeof keys[number];

export const users: {
  [key in keys]: MemberAccountWithPayload["discord_user"];
} = {
  "A": {
    id: 1,
    discord_id: "1".repeat(DISCORD_ID_LENGTH),
    username: "User 1",
    discriminator: "1111",
    avatar_url: "",
  },
  "B": {
    id: 2,
    discord_id: "2".repeat(DISCORD_ID_LENGTH),
    username: "User 2",
    discriminator: "2222",
    avatar_url: "",
  },
  "C": {
    id: 3,
    discord_id: "3".repeat(DISCORD_ID_LENGTH),
    username: "User 3",
    discriminator: "3333",
    avatar_url: "",
  },
};

export const profiles: { [key in keys]: MemberAccountWithPayload["profile"] } =
  {
    "A": { id: 1, bio: "", friend_code: "", clusters: [clusters.A] },
    "B": { id: 2, bio: "Bio text\n".repeat(3), friend_code: "", clusters: [] },
    "C": { id: 3, bio: "", friend_code: "1234-1234-1234", clusters: [] },
  };

export const accounts: { [key in keys]: MemberAccountWithPayload } = {
  "A": {
    id: 1,
    discord_user: users.A,
    profile: profiles.A,
    memberDiscordUserId: 1,
    memberProfileId: 1,
  },
  "B": {
    id: 2,
    discord_user: users.B,
    profile: profiles.B,
    memberDiscordUserId: 2,
    memberProfileId: 2,
  },
  "C": {
    id: 3,
    discord_user: users.C,
    profile: profiles.C,
    memberDiscordUserId: 3,
    memberProfileId: 3,
  },
};

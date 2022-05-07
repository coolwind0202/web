import { Tag } from "@prisma/client";
import { useState } from "react";
import { DiscordUserWithProfile } from "../prisma";

/**
 * タグと、そのタグを付けているユーザーを、タグを付けているユーザーが多い順に返却します。
 * @param users
 */
export const useTagListTab = (
  users: DiscordUserWithProfile[],
): {
  tags: Tag[];
  currentTab: { tag: Tag; users: DiscordUserWithProfile[] };
  onTabChange: (index: number) => void;
} => {
  /*
    タグとそのユーザーのリストを紐づけるMap
    このMapのキーはタグの内部IDを想定しています
  */
  const tagUsers = getTagUsersSortedList(users);
  const [currentTabIndex, setCurrentTabIndex] = useState<number>(0);
  const isValidTabIndex = (index: number) =>
    Number.isInteger(index) && (0 <= index && index < tagUsers.length);

  const handleTabChange = (index: number) => {
    if (isValidTabIndex(index)) setCurrentTabIndex(index);
  };

  return {
    tags: tagUsers.map((tagUser) => tagUser.tag),
    currentTab: tagUsers[currentTabIndex],
    onTabChange: handleTabChange,
  };
};

const getTagUsersSortedList = (users: DiscordUserWithProfile[]) =>
  Array.from(getTagUsers(users).values()).sort((a, b) =>
    b.users.length - a.users.length
  ); // usersの降順にソートする

const getTagUsers = (users: DiscordUserWithProfile[]) =>
  users.reduce(
    // ユーザーに対するループ
    // 下のループでタグにユーザーが追加されたobjectを、このループが受ける
    (
      userPreviousValue: Map<
        number,
        { tag: Tag; users: DiscordUserWithProfile[] }
      >,
      user: DiscordUserWithProfile,
    ) => {
      if (user.Profile === null) return userPreviousValue;
      const profileTags = user.Profile.ProfileTag;
      return profileTags.reduce(
        (
          prev: typeof userPreviousValue,
          profileTag: typeof profileTags[number],
        ) => {
          const tagId = profileTag.tagId;
          const default_ = prev.get(tagId);
          return default_ !== undefined
            ? prev.set(tagId, { ...default_, users: [...default_.users, user] })
            : prev.set(tagId, { tag: profileTag.tag, users: [user] });
        },
        userPreviousValue,
      );
    },
    new Map(),
  );

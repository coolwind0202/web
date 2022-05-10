import { MemberCluster } from "@prisma/client";
import { useState } from "react";
import { MemberAccountWithPayload } from "@/lib/prisma";

/**
 * トップページでクラスタのタブを切り替える際のロジックです。
 * @param members 処理対象のメンバーの配列
 */
export const useClusterTab = (
  members: MemberAccountWithPayload[],
): {
  clusters: MemberCluster[];
  currentTab: { cluster: MemberCluster; members: MemberAccountWithPayload[] };
  onTabChange: (index: number) => void;
} => {
  /*
    タグとそのユーザーのリストを紐づけるMap
    このMapのキーはタグの内部IDを想定しています
  */
  const clusterParticipations = getClusterMembersSortedList(members);
  const [currentTabIndex, setCurrentTabIndex] = useState<number>(0);
  const isValidTabIndex = (index: number) =>
    Number.isInteger(index) &&
    (0 <= index && index < clusterParticipations.length);

  const handleTabChange = (index: number) => {
    if (isValidTabIndex(index)) setCurrentTabIndex(index);
  };

  return {
    clusters: clusterParticipations.map((clusterMember) =>
      clusterMember.cluster
    ),
    currentTab: clusterParticipations[currentTabIndex],
    onTabChange: handleTabChange,
  };
};

/**
 * `getClusterMembersMap`を呼び出した値を、クラスタの参加者が多い順にソートします
 * @param members 処理対象のメンバーの配列
 */
const getClusterMembersSortedList = (members: MemberAccountWithPayload[]) =>
  Array.from(getClusterMembersMap(members).values()).sort((a, b) =>
    b.members.length - a.members.length
  ); // usersの降順にソートする

/**
 * クラスタと、そのクラスタの参加者を対応させる`Map`を作ります
 * @param members 処理対象のメンバーの配列
 * @returns キーにクラスタのID、値に`MemberCluster`と`MemberAccountWithPayload`の配列を持った`Map`を返却します
 */
const getClusterMembersMap = (members: MemberAccountWithPayload[]) =>
  members.reduce(
    (
      memberPreviousValue: Map<
        number,
        { cluster: MemberCluster; members: MemberAccountWithPayload[] }
      >,
      member: MemberAccountWithPayload,
    ) => {
      if (member.profile === null) return memberPreviousValue;
      const clusters = member.profile.clusters;
      return clusters.reduce(
        (
          prev: typeof memberPreviousValue,
          cluster: MemberCluster,
        ) => {
          const default_ = prev.get(cluster.id);
          return default_ !== undefined
            ? prev.set(cluster.id, {
              ...default_,
              members: [...default_.members, member],
            })
            : prev.set(cluster.id, { cluster, members: [member] });
        },
        memberPreviousValue,
      );
    },
    new Map(),
  );

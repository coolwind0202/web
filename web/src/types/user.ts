export type User = {
  /** Discordのユーザー情報 */
  discord: {
    username: string;
    /** Discordのユーザー識別情報（#0000形式） */
    discriminator: string;
    avatar_url?: string;
  };
  /** データベース上のプロフィール情報 */
  profile: {
    /** ユーザーの自己紹介 */
    about: string;
    /** ユーザータグ */
    tags: UserTag[];
    friend_code: string;
  };
};

export type UserTag = {
  name: string;
  /** タグのID */
  id: string;
  /** タグの画像URL */
  src?: string;
  color: string;
};

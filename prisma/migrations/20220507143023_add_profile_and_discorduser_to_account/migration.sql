-- AlterTable
ALTER TABLE `MemberAccount` ADD COLUMN `memberDiscordUserId` INTEGER NULL,
    ADD COLUMN `memberProfileId` INTEGER NULL;

-- AddForeignKey
ALTER TABLE `MemberAccount` ADD CONSTRAINT `MemberAccount_memberProfileId_fkey` FOREIGN KEY (`memberProfileId`) REFERENCES `MemberProfile`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `MemberAccount` ADD CONSTRAINT `MemberAccount_memberDiscordUserId_fkey` FOREIGN KEY (`memberDiscordUserId`) REFERENCES `MemberDiscordUser`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

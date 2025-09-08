import { t } from "@lingui/macro";
import "./Footer.css";
import twitterIcon from "img/ic_twitter.svg";
import discordIcon from "img/ic_discord.svg";
import telegramIcon from "img/ic_telegram.svg";
import githubIcon from "img/ic_github.svg";

type Link = {
  label: string;
  link: string;
  external?: boolean;
  isAppLink?: boolean;
};

type SocialLink = {
  link: string;
  name: string;
  icon: string;
};

export const SOCIAL_LINKS: SocialLink[] = [
  { link: "#", name: "Discord", icon: discordIcon },
  { link: "#", name: "Github", icon: githubIcon },
  { link: "#", name: "Telegram", icon: telegramIcon },
  { link: "#", name: "Twitter", icon: twitterIcon },
];

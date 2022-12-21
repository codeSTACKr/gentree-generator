import {
  IconBrandBitbucket,
  IconBrandBlogger,
  IconBrandCashapp,
  IconBrandCodepen,
  IconBrandCodesandbox,
  IconBrandCoinbase,
  IconBrandDiscord,
  IconBrandDribbble,
  IconBrandFacebook,
  IconBrandGithub,
  IconBrandGumroad,
  IconBrandInstagram,
  IconBrandIntercom,
  IconBrandLinkedin,
  IconBrandMastodon,
  IconBrandMedium,
  IconBrandMessenger,
  IconBrandNotion,
  IconBrandOnedrive,
  IconBrandOnlyfans,
  IconBrandPatreon,
  IconBrandPaypal,
  IconBrandPinterest,
  IconBrandReddit,
  IconBrandSkype,
  IconBrandSlack,
  IconBrandSnapchat,
  IconBrandSpotify,
  IconBrandSteam,
  IconBrandTelegram,
  IconBrandTiktok,
  IconBrandTinder,
  IconBrandTwitch,
  IconBrandTwitter,
  IconBrandUpwork,
  IconBrandWhatsapp,
  IconBrandYoutube,
  IconCalendar,
  IconMail,
} from "@tabler/icons";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

function SmallLink({ link, colors, rounding }) {
  const {
    buttonLightColor,
    buttonLightColorHover,
    buttonDarkColor,
    buttonDarkColorHover,
    buttonRingFocus,
  } = colors;
  return (
    <a
      href={link.url}
      className={classNames(
        buttonLightColor,
        buttonDarkColor,
        rounding,
        "inline-flex items-center border border-transparent p-2 shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-2",
        buttonLightColorHover,
        buttonDarkColorHover,
        buttonRingFocus
      )}
      target="_blank"
      rel="noopener noreferrer"
    >
      {link.icon}
      {/* {link.name.toLowerCase() === "github" ? (
        <IconBrandGithub size={24} aria-hidden="true" />
      ) : link[0] === "twitter" ? (
        <IconBrandTwitter size={24} aria-hidden="true" />
      ) : link[0] === "bitbucket" ? (
        <IconBrandBitbucket size={24} aria-hidden="true" />
      ) : link[0] === "blogger" ? (
        <IconBrandBlogger size={24} aria-hidden="true" />
      ) : link[0] === "cashapp" ? (
        <IconBrandCashapp size={24} aria-hidden="true" />
      ) : link[0] === "codepen" ? (
        <IconBrandCodepen size={24} aria-hidden="true" />
      ) : link[0] === "codesandbox" ? (
        <IconBrandCodesandbox size={24} aria-hidden="true" />
      ) : link[0] === "coinbase" ? (
        <IconBrandCoinbase size={24} aria-hidden="true" />
      ) : link[0] === "discord" ? (
        <IconBrandDiscord size={24} aria-hidden="true" />
      ) : link[0] === "dribbble" ? (
        <IconBrandDribbble size={24} aria-hidden="true" />
      ) : link[0] === "facebook" ? (
        <IconBrandFacebook size={24} aria-hidden="true" />
      ) : link[0] === "gumroad" ? (
        <IconBrandGumroad size={24} aria-hidden="true" />
      ) : link[0] === "instagram" ? (
        <IconBrandInstagram size={24} aria-hidden="true" />
      ) : link[0] === "intercom" ? (
        <IconBrandIntercom size={24} aria-hidden="true" />
      ) : link[0] === "linkedin" ? (
        <IconBrandLinkedin size={24} aria-hidden="true" />
      ) : link[0] === "mastodon" ? (
        <IconBrandMastodon size={24} aria-hidden="true" />
      ) : link[0] === "medium" ? (
        <IconBrandMedium size={24} aria-hidden="true" />
      ) : link[0] === "messenger" ? (
        <IconBrandMessenger size={24} aria-hidden="true" />
      ) : link[0] === "notion" ? (
        <IconBrandNotion size={24} aria-hidden="true" />
      ) : link[0] === "onedrive" ? (
        <IconBrandOnedrive size={24} aria-hidden="true" />
      ) : link[0] === "onlyfans" ? (
        <IconBrandOnlyfans size={24} aria-hidden="true" />
      ) : link[0] === "patreon" ? (
        <IconBrandPatreon size={24} aria-hidden="true" />
      ) : link[0] === "paypal" ? (
        <IconBrandPaypal size={24} aria-hidden="true" />
      ) : link[0] === "pinterest" ? (
        <IconBrandPinterest size={24} aria-hidden="true" />
      ) : link[0] === "reddit" ? (
        <IconBrandReddit size={24} aria-hidden="true" />
      ) : link[0] === "skype" ? (
        <IconBrandSkype size={24} aria-hidden="true" />
      ) : link[0] === "slack" ? (
        <IconBrandSlack size={24} aria-hidden="true" />
      ) : link[0] === "snapchat" ? (
        <IconBrandSnapchat size={24} aria-hidden="true" />
      ) : link[0] === "spotify" ? (
        <IconBrandSpotify size={24} aria-hidden="true" />
      ) : link[0] === "steam" ? (
        <IconBrandSteam size={24} aria-hidden="true" />
      ) : link[0] === "telegram" ? (
        <IconBrandTelegram size={24} aria-hidden="true" />
      ) : link[0] === "tiktok" ? (
        <IconBrandTiktok size={24} aria-hidden="true" />
      ) : link[0] === "tinder" ? (
        <IconBrandTinder size={24} aria-hidden="true" />
      ) : link[0] === "twitch" ? (
        <IconBrandTwitch size={24} aria-hidden="true" />
      ) : link[0] === "upwork" ? (
        <IconBrandUpwork size={24} aria-hidden="true" />
      ) : link[0] === "whatsapp" ? (
        <IconBrandWhatsapp size={24} aria-hidden="true" />
      ) : link[0] === "youtube" ? (
        <IconBrandYoutube size={24} aria-hidden="true" />
      ) : link[0] === "calendar" ? (
        <IconCalendar size={24} aria-hidden="true" />
      ) : link[0] === "mail" ? (
        <IconMail size={24} aria-hidden="true" />
      ) : (
        ""
      )} */}
    </a>
  );
}

export default SmallLink;

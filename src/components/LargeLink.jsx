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

function LargeLink({ link, colors, rounding }) {
  const {
    buttonLightColor,
    buttonLightColorHover,
    buttonLightShadow,
    buttonLightShadowHover,
    buttonDarkColor,
    buttonDarkColorHover,
    buttonDarkShadow,
    buttonDarkShadowHover,
    buttonRingFocus,
  } = colors;

  return (
    <li className="py-4">
      <a
        href={link.url}
        className={classNames(
          buttonLightColor,
          buttonDarkColor,
          rounding,
          "inline-flex w-full items-center justify-center border border-transparent px-6 py-3 text-center text-base font-medium shadow-c1 transition-all hover:shadow-c2 focus:outline-none focus:ring-2 focus:ring-offset-2",
          buttonLightShadow,
          buttonLightShadowHover,
          buttonLightColorHover,
          buttonDarkShadow,
          buttonDarkShadowHover,
          buttonDarkColorHover,
          buttonRingFocus
        )}
        target="_blank"
        rel="noopener noreferrer"
      >
        {link.icon}
        {/* {link[0] === "github" ? (
          <IconBrandGithub size={32} stroke={2} aria-hidden="true" />
        ) : link[0] === "twitter" ? (
          <IconBrandTwitter size={32} stroke={2} aria-hidden="true" />
        ) : link[0] === "bitbucket" ? (
          <IconBrandBitbucket size={32} stroke={2} aria-hidden="true" />
        ) : link[0] === "blogger" ? (
          <IconBrandBlogger size={32} stroke={2} aria-hidden="true" />
        ) : link[0] === "cashapp" ? (
          <IconBrandCashapp size={32} stroke={2} aria-hidden="true" />
        ) : link[0] === "codepen" ? (
          <IconBrandCodepen size={32} stroke={2} aria-hidden="true" />
        ) : link[0] === "codesandbox" ? (
          <IconBrandCodesandbox size={32} stroke={2} aria-hidden="true" />
        ) : link[0] === "coinbase" ? (
          <IconBrandCoinbase size={32} stroke={2} aria-hidden="true" />
        ) : link[0] === "discord" ? (
          <IconBrandDiscord size={32} stroke={2} aria-hidden="true" />
        ) : link[0] === "dribbble" ? (
          <IconBrandDribbble size={32} stroke={2} aria-hidden="true" />
        ) : link[0] === "facebook" ? (
          <IconBrandFacebook size={32} stroke={2} aria-hidden="true" />
        ) : link[0] === "gumroad" ? (
          <IconBrandGumroad size={32} stroke={2} aria-hidden="true" />
        ) : link[0] === "instagram" ? (
          <IconBrandInstagram size={32} stroke={2} aria-hidden="true" />
        ) : link[0] === "intercom" ? (
          <IconBrandIntercom size={32} stroke={2} aria-hidden="true" />
        ) : link[0] === "linkedin" ? (
          <IconBrandLinkedin size={32} stroke={2} aria-hidden="true" />
        ) : link[0] === "mastodon" ? (
          <IconBrandMastodon size={32} stroke={2} aria-hidden="true" />
        ) : link[0] === "medium" ? (
          <IconBrandMedium size={32} stroke={2} aria-hidden="true" />
        ) : link[0] === "messenger" ? (
          <IconBrandMessenger size={32} stroke={2} aria-hidden="true" />
        ) : link[0] === "notion" ? (
          <IconBrandNotion size={32} stroke={2} aria-hidden="true" />
        ) : link[0] === "onedrive" ? (
          <IconBrandOnedrive size={32} stroke={2} aria-hidden="true" />
        ) : link[0] === "onlyfans" ? (
          <IconBrandOnlyfans size={32} stroke={2} aria-hidden="true" />
        ) : link[0] === "patreon" ? (
          <IconBrandPatreon size={32} stroke={2} aria-hidden="true" />
        ) : link[0] === "paypal" ? (
          <IconBrandPaypal size={32} stroke={2} aria-hidden="true" />
        ) : link[0] === "pinterest" ? (
          <IconBrandPinterest size={32} stroke={2} aria-hidden="true" />
        ) : link[0] === "reddit" ? (
          <IconBrandReddit size={32} stroke={2} aria-hidden="true" />
        ) : link[0] === "skype" ? (
          <IconBrandSkype size={32} stroke={2} aria-hidden="true" />
        ) : link[0] === "slack" ? (
          <IconBrandSlack size={32} stroke={2} aria-hidden="true" />
        ) : link[0] === "snapchat" ? (
          <IconBrandSnapchat size={32} stroke={2} aria-hidden="true" />
        ) : link[0] === "spotify" ? (
          <IconBrandSpotify size={32} stroke={2} aria-hidden="true" />
        ) : link[0] === "steam" ? (
          <IconBrandSteam size={32} stroke={2} aria-hidden="true" />
        ) : link[0] === "telegram" ? (
          <IconBrandTelegram size={32} stroke={2} aria-hidden="true" />
        ) : link[0] === "tiktok" ? (
          <IconBrandTiktok size={32} stroke={2} aria-hidden="true" />
        ) : link[0] === "tinder" ? (
          <IconBrandTinder size={32} stroke={2} aria-hidden="true" />
        ) : link[0] === "twitch" ? (
          <IconBrandTwitch size={32} stroke={2} aria-hidden="true" />
        ) : link[0] === "upwork" ? (
          <IconBrandUpwork size={32} stroke={2} aria-hidden="true" />
        ) : link[0] === "whatsapp" ? (
          <IconBrandWhatsapp size={32} stroke={2} aria-hidden="true" />
        ) : link[0] === "youtube" ? (
          <IconBrandYoutube size={32} stroke={2} aria-hidden="true" />
        ) : link[0] === "calendar" ? (
          <IconCalendar size={32} stroke={2} aria-hidden="true" />
        ) : link[0] === "mail" ? (
          <IconMail size={32} stroke={2} aria-hidden="true" />
        ) : (
          ""
        )} */}
        <span className="w-full text-2xl">
          {link.name?.charAt(0)?.toUpperCase() + link.name?.slice(1)}
        </span>
      </a>
    </li>
  );
}

export default LargeLink;

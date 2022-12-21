import { useEffect, useState } from "react";
// import { getVariables } from "./helpers/helpers";
import Avatar from "./components/Avatar";
// import Toggle from "./components/Toggle";
import LargeLink from "./components/LargeLink";
import SmallLink from "./components/SmallLink";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

function Render({
  colorSelected: colorScheme,
  userName: name,
  userAvatar: profilePic,
  userHandle: handle,
  userTitle: title,
  userBorderStyle: roundStyle,
  linkList,
}) {
  // const [isLight, setIsLight] = useState(false);
  // useEffect(() => {
  //   if (localStorage.getItem("theme")) {
  //     if (localStorage.getItem("theme") === "light") {
  //       setIsLight(true);
  //     }
  //   }
  // }, []);

  // const {
  //   colorScheme,
  //   name,
  //   profilePic,
  //   handle,
  //   title,
  //   roundStyle,
  //   smallLinks,
  //   largeLinks,
  // } = getVariables();
  // document.title = `Links by ${name}`;

  const smallLinks = linkList.filter(
    (link) => link.linkSize.toLowerCase() === "small"
  );
  const largeLinks = linkList.filter(
    (link) => link.linkSize.toLowerCase() === "large"
  );

  let rounding = "rounded-full";

  let lightBG = "bg-slate-100";
  let lightFG = "text-slate-900";
  let darkBG = "dark:bg-slate-900";
  let darkFG = "dark:text-slate-100";
  let gradientLightFrom = "from-slate-900";
  let gradientLightTo = "to-slate-500";
  let gradientDarkFrom = "dark:from-slate-100";
  let gradientDarkTo = "dark:to-slate-400";
  let toggleLight = "bg-slate-200";
  let toggleDark = "bg-slate-900";
  let toggleLightFont = "text-slate-900";
  let toggleDarkFont = "text-slate-200";
  let toggleBackgroundLight = "bg-slate-300";
  let toggleBackgroundDark = "bg-slate-600";
  let toggleAccent = "focus:ring-slate-500";
  let buttonRingFocus = "focus:ring-slate-500";
  let buttonLightColor = "bg-slate-200";
  let buttonLightColorHover = "hover:bg-slate-300";
  let buttonDarkColor = "dark:bg-slate-600";
  let buttonDarkColorHover = "dark:hover:bg-slate-700";
  let buttonLightShadow = "shadow-slate-400";
  let buttonLightShadowHover = "hover:shadow-slate-400";
  let buttonDarkShadow = "dark:shadow-slate-400";
  let buttonDarkShadowHover = "dark:hover:shadow-slate-400";

  switch (roundStyle.toLowerCase()) {
    case "rounded":
      rounding = "rounded-full";
      break;
    case "square-rounded":
      rounding = "rounded-md";
      break;
    case "square":
      rounding = "rounded-none";
      break;
    default:
      break;
  }

  switch (colorScheme.name.toLowerCase()) {
    case "gray":
      lightBG = "bg-gray-100";
      lightFG = "text-gray-900";
      darkBG = "dark:bg-gray-900";
      darkFG = "dark:text-gray-100";
      gradientLightFrom = "from-gray-900";
      gradientLightTo = "to-gray-400";
      gradientDarkFrom = "dark:from-violet-100";
      gradientDarkTo = "dark:to-gray-400";
      toggleLight = "bg-gray-200";
      toggleDark = "bg-gray-900";
      toggleLightFont = "text-gray-900";
      toggleDarkFont = "text-gray-200";
      toggleBackgroundLight = "bg-gray-300";
      toggleBackgroundDark = "bg-gray-600";
      toggleAccent = "focus:ring-gray-500";
      buttonRingFocus = "focus:ring-gray-500";
      buttonLightColor = "bg-gray-200";
      buttonLightColorHover = "hover:bg-gray-300";
      buttonDarkColor = "dark:bg-gray-600";
      buttonDarkColorHover = "dark:hover:bg-gray-700";
      buttonLightShadow = "shadow-gray-400";
      buttonLightShadowHover = "hover:shadow-gray-400";
      buttonDarkShadow = "dark:shadow-gray-400";
      buttonDarkShadowHover = "dark:hover:shadow-gray-400";
      break;
    case "zinc":
      lightBG = "bg-zinc-100";
      lightFG = "text-zinc-900";
      darkBG = "dark:bg-zinc-900";
      darkFG = "dark:text-zinc-100";
      gradientLightFrom = "from-zinc-900";
      gradientLightTo = "to-zinc-400";
      gradientDarkFrom = "dark:from-violet-100";
      gradientDarkTo = "dark:to-zinc-400";
      toggleLight = "bg-zinc-200";
      toggleDark = "bg-zinc-900";
      toggleLightFont = "text-zinc-900";
      toggleDarkFont = "text-zinc-200";
      toggleBackgroundLight = "bg-zinc-300";
      toggleBackgroundDark = "bg-zinc-600";
      toggleAccent = "focus:ring-zinc-500";
      buttonRingFocus = "focus:ring-zinc-500";
      buttonLightColor = "bg-zinc-200";
      buttonLightColorHover = "hover:bg-zinc-300";
      buttonDarkColor = "dark:bg-zinc-600";
      buttonDarkColorHover = "dark:hover:bg-zinc-700";
      buttonLightShadow = "shadow-zinc-400";
      buttonLightShadowHover = "hover:shadow-zinc-400";
      buttonDarkShadow = "dark:shadow-zinc-400";
      buttonDarkShadowHover = "dark:hover:shadow-zinc-400";
      break;
    case "neutral":
      lightBG = "bg-neutral-100";
      lightFG = "text-neutral-900";
      darkBG = "dark:bg-neutral-900";
      darkFG = "dark:text-neutral-100";
      gradientLightFrom = "from-neutral-900";
      gradientLightTo = "to-neutral-400";
      gradientDarkFrom = "dark:from-violet-100";
      gradientDarkTo = "dark:to-neutral-400";
      toggleLight = "bg-neutral-200";
      toggleDark = "bg-neutral-900";
      toggleLightFont = "text-neutral-900";
      toggleDarkFont = "text-neutral-200";
      toggleBackgroundLight = "bg-neutral-300";
      toggleBackgroundDark = "bg-neutral-600";
      toggleAccent = "focus:ring-neutral-500";
      buttonRingFocus = "focus:ring-neutral-500";
      buttonLightColor = "bg-neutral-200";
      buttonLightColorHover = "hover:bg-neutral-300";
      buttonDarkColor = "dark:bg-neutral-600";
      buttonDarkColorHover = "dark:hover:bg-neutral-700";
      buttonLightShadow = "shadow-neutral-400";
      buttonLightShadowHover = "hover:shadow-neutral-400";
      buttonDarkShadow = "dark:shadow-neutral-400";
      buttonDarkShadowHover = "dark:hover:shadow-neutral-400";
      break;
    case "stone":
      lightBG = "bg-stone-100";
      lightFG = "text-stone-900";
      darkBG = "dark:bg-stone-900";
      darkFG = "dark:text-stone-100";
      gradientLightFrom = "from-stone-900";
      gradientLightTo = "to-stone-400";
      gradientDarkFrom = "dark:from-violet-100";
      gradientDarkTo = "dark:to-stone-400";
      toggleLight = "bg-stone-200";
      toggleDark = "bg-stone-900";
      toggleLightFont = "text-stone-900";
      toggleDarkFont = "text-stone-200";
      toggleBackgroundLight = "bg-stone-300";
      toggleBackgroundDark = "bg-stone-600";
      toggleAccent = "focus:ring-stone-500";
      buttonRingFocus = "focus:ring-stone-500";
      buttonLightColor = "bg-stone-200";
      buttonLightColorHover = "hover:bg-stone-300";
      buttonDarkColor = "dark:bg-stone-600";
      buttonDarkColorHover = "dark:hover:bg-stone-700";
      buttonLightShadow = "shadow-stone-400";
      buttonLightShadowHover = "hover:shadow-stone-400";
      buttonDarkShadow = "dark:shadow-stone-400";
      buttonDarkShadowHover = "dark:hover:shadow-stone-400";
      break;
    case "red":
      lightBG = "bg-red-100";
      lightFG = "text-red-900";
      darkBG = "dark:bg-red-900";
      darkFG = "dark:text-red-100";
      gradientLightFrom = "from-red-900";
      gradientLightTo = "to-red-400";
      gradientDarkFrom = "dark:from-violet-100";
      gradientDarkTo = "dark:to-red-400";
      toggleLight = "bg-red-200";
      toggleDark = "bg-red-900";
      toggleLightFont = "text-red-900";
      toggleDarkFont = "text-red-200";
      toggleBackgroundLight = "bg-red-300";
      toggleBackgroundDark = "bg-red-600";
      toggleAccent = "focus:ring-red-500";
      buttonRingFocus = "focus:ring-red-500";
      buttonLightColor = "bg-red-200";
      buttonLightColorHover = "hover:bg-red-300";
      buttonDarkColor = "dark:bg-red-600";
      buttonDarkColorHover = "dark:hover:bg-red-700";
      buttonLightShadow = "shadow-red-400";
      buttonLightShadowHover = "hover:shadow-red-400";
      buttonDarkShadow = "dark:shadow-red-400";
      buttonDarkShadowHover = "dark:hover:shadow-red-400";
      break;
    case "orange":
      lightBG = "bg-orange-100";
      lightFG = "text-orange-900";
      darkBG = "dark:bg-orange-900";
      darkFG = "dark:text-orange-100";
      gradientLightFrom = "from-orange-900";
      gradientLightTo = "to-orange-400";
      gradientDarkFrom = "dark:from-violet-100";
      gradientDarkTo = "dark:to-orange-400";
      toggleLight = "bg-orange-200";
      toggleDark = "bg-orange-900";
      toggleLightFont = "text-orange-900";
      toggleDarkFont = "text-orange-200";
      toggleBackgroundLight = "bg-orange-300";
      toggleBackgroundDark = "bg-orange-600";
      toggleAccent = "focus:ring-orange-500";
      buttonRingFocus = "focus:ring-orange-500";
      buttonLightColor = "bg-orange-200";
      buttonLightColorHover = "hover:bg-orange-300";
      buttonDarkColor = "dark:bg-orange-600";
      buttonDarkColorHover = "dark:hover:bg-orange-700";
      buttonLightShadow = "shadow-orange-400";
      buttonLightShadowHover = "hover:shadow-orange-400";
      buttonDarkShadow = "dark:shadow-orange-400";
      buttonDarkShadowHover = "dark:hover:shadow-orange-400";
      break;
    case "amber":
      lightBG = "bg-amber-100";
      lightFG = "text-amber-900";
      darkBG = "dark:bg-amber-900";
      darkFG = "dark:text-amber-100";
      gradientLightFrom = "from-amber-900";
      gradientLightTo = "to-amber-400";
      gradientDarkFrom = "dark:from-violet-100";
      gradientDarkTo = "dark:to-amber-400";
      toggleLight = "bg-amber-200";
      toggleDark = "bg-amber-900";
      toggleLightFont = "text-amber-900";
      toggleDarkFont = "text-amber-200";
      toggleBackgroundLight = "bg-amber-300";
      toggleBackgroundDark = "bg-amber-600";
      toggleAccent = "focus:ring-amber-500";
      buttonRingFocus = "focus:ring-amber-500";
      buttonLightColor = "bg-amber-200";
      buttonLightColorHover = "hover:bg-amber-300";
      buttonDarkColor = "dark:bg-amber-600";
      buttonDarkColorHover = "dark:hover:bg-amber-700";
      buttonLightShadow = "shadow-amber-400";
      buttonLightShadowHover = "hover:shadow-amber-400";
      buttonDarkShadow = "dark:shadow-amber-400";
      buttonDarkShadowHover = "dark:hover:shadow-amber-400";
      break;
    case "yellow":
      lightBG = "bg-yellow-100";
      lightFG = "text-yellow-900";
      darkBG = "dark:bg-yellow-900";
      darkFG = "dark:text-yellow-100";
      gradientLightFrom = "from-yellow-900";
      gradientLightTo = "to-yellow-400";
      gradientDarkFrom = "dark:from-violet-100";
      gradientDarkTo = "dark:to-yellow-400";
      toggleLight = "bg-yellow-200";
      toggleDark = "bg-yellow-900";
      toggleLightFont = "text-yellow-900";
      toggleDarkFont = "text-yellow-200";
      toggleBackgroundLight = "bg-yellow-300";
      toggleBackgroundDark = "bg-yellow-600";
      toggleAccent = "focus:ring-yellow-500";
      buttonRingFocus = "focus:ring-yellow-500";
      buttonLightColor = "bg-yellow-200";
      buttonLightColorHover = "hover:bg-yellow-300";
      buttonDarkColor = "dark:bg-yellow-600";
      buttonDarkColorHover = "dark:hover:bg-yellow-700";
      buttonLightShadow = "shadow-yellow-400";
      buttonLightShadowHover = "hover:shadow-yellow-400";
      buttonDarkShadow = "dark:shadow-yellow-400";
      buttonDarkShadowHover = "dark:hover:shadow-yellow-400";
      break;
    case "lime":
      lightBG = "bg-lime-100";
      lightFG = "text-lime-900";
      darkBG = "dark:bg-lime-900";
      darkFG = "dark:text-lime-100";
      gradientLightFrom = "from-lime-900";
      gradientLightTo = "to-lime-400";
      gradientDarkFrom = "dark:from-violet-100";
      gradientDarkTo = "dark:to-lime-400";
      toggleLight = "bg-lime-200";
      toggleDark = "bg-lime-900";
      toggleLightFont = "text-lime-900";
      toggleDarkFont = "text-lime-200";
      toggleBackgroundLight = "bg-lime-300";
      toggleBackgroundDark = "bg-lime-600";
      toggleAccent = "focus:ring-lime-500";
      buttonRingFocus = "focus:ring-lime-500";
      buttonLightColor = "bg-lime-200";
      buttonLightColorHover = "hover:bg-lime-300";
      buttonDarkColor = "dark:bg-lime-600";
      buttonDarkColorHover = "dark:hover:bg-lime-700";
      buttonLightShadow = "shadow-lime-400";
      buttonLightShadowHover = "hover:shadow-lime-400";
      buttonDarkShadow = "dark:shadow-lime-400";
      buttonDarkShadowHover = "dark:hover:shadow-lime-400";
      break;
    case "green":
      lightBG = "bg-green-100";
      lightFG = "text-green-900";
      darkBG = "dark:bg-green-900";
      darkFG = "dark:text-green-100";
      gradientLightFrom = "from-green-900";
      gradientLightTo = "to-green-400";
      gradientDarkFrom = "dark:from-violet-100";
      gradientDarkTo = "dark:to-green-400";
      toggleLight = "bg-green-200";
      toggleDark = "bg-green-900";
      toggleLightFont = "text-green-900";
      toggleDarkFont = "text-green-200";
      toggleBackgroundLight = "bg-green-300";
      toggleBackgroundDark = "bg-green-600";
      toggleAccent = "focus:ring-green-500";
      buttonRingFocus = "focus:ring-green-500";
      buttonLightColor = "bg-green-200";
      buttonLightColorHover = "hover:bg-green-300";
      buttonDarkColor = "dark:bg-green-600";
      buttonDarkColorHover = "dark:hover:bg-green-700";
      buttonLightShadow = "shadow-green-400";
      buttonLightShadowHover = "hover:shadow-green-400";
      buttonDarkShadow = "dark:shadow-green-400";
      buttonDarkShadowHover = "dark:hover:shadow-green-400";
      break;
    case "emerald":
      lightBG = "bg-emerald-100";
      lightFG = "text-emerald-900";
      darkBG = "dark:bg-emerald-900";
      darkFG = "dark:text-emerald-100";
      gradientLightFrom = "from-emerald-900";
      gradientLightTo = "to-emerald-400";
      gradientDarkFrom = "dark:from-violet-100";
      gradientDarkTo = "dark:to-emerald-400";
      toggleLight = "bg-emerald-200";
      toggleDark = "bg-emerald-900";
      toggleLightFont = "text-emerald-900";
      toggleDarkFont = "text-emerald-200";
      toggleBackgroundLight = "bg-emerald-300";
      toggleBackgroundDark = "bg-emerald-600";
      toggleAccent = "focus:ring-emerald-500";
      buttonRingFocus = "focus:ring-emerald-500";
      buttonLightColor = "bg-emerald-200";
      buttonLightColorHover = "hover:bg-emerald-300";
      buttonDarkColor = "dark:bg-emerald-600";
      buttonDarkColorHover = "dark:hover:bg-emerald-700";
      buttonLightShadow = "shadow-emerald-400";
      buttonLightShadowHover = "hover:shadow-emerald-400";
      buttonDarkShadow = "dark:shadow-emerald-400";
      buttonDarkShadowHover = "dark:hover:shadow-emerald-400";
      break;
    case "teal":
      lightBG = "bg-teal-100";
      lightFG = "text-teal-900";
      darkBG = "dark:bg-teal-900";
      darkFG = "dark:text-teal-100";
      gradientLightFrom = "from-teal-900";
      gradientLightTo = "to-teal-400";
      gradientDarkFrom = "dark:from-violet-100";
      gradientDarkTo = "dark:to-teal-400";
      toggleLight = "bg-teal-200";
      toggleDark = "bg-teal-900";
      toggleLightFont = "text-teal-900";
      toggleDarkFont = "text-teal-200";
      toggleBackgroundLight = "bg-teal-300";
      toggleBackgroundDark = "bg-teal-600";
      toggleAccent = "focus:ring-teal-500";
      buttonRingFocus = "focus:ring-teal-500";
      buttonLightColor = "bg-teal-200";
      buttonLightColorHover = "hover:bg-teal-300";
      buttonDarkColor = "dark:bg-teal-600";
      buttonDarkColorHover = "dark:hover:bg-teal-700";
      buttonLightShadow = "shadow-teal-400";
      buttonLightShadowHover = "hover:shadow-teal-400";
      buttonDarkShadow = "dark:shadow-teal-400";
      buttonDarkShadowHover = "dark:hover:shadow-teal-400";
      break;
    case "cyan":
      lightBG = "bg-cyan-100";
      lightFG = "text-cyan-900";
      darkBG = "dark:bg-cyan-900";
      darkFG = "dark:text-cyan-100";
      gradientLightFrom = "from-cyan-900";
      gradientLightTo = "to-cyan-400";
      gradientDarkFrom = "dark:from-violet-100";
      gradientDarkTo = "dark:to-cyan-400";
      toggleLight = "bg-cyan-200";
      toggleDark = "bg-cyan-900";
      toggleLightFont = "text-cyan-900";
      toggleDarkFont = "text-cyan-200";
      toggleBackgroundLight = "bg-cyan-300";
      toggleBackgroundDark = "bg-cyan-600";
      toggleAccent = "focus:ring-cyan-500";
      buttonRingFocus = "focus:ring-cyan-500";
      buttonLightColor = "bg-cyan-200";
      buttonLightColorHover = "hover:bg-cyan-300";
      buttonDarkColor = "dark:bg-cyan-600";
      buttonDarkColorHover = "dark:hover:bg-cyan-700";
      buttonLightShadow = "shadow-cyan-400";
      buttonLightShadowHover = "hover:shadow-cyan-400";
      buttonDarkShadow = "dark:shadow-cyan-400";
      buttonDarkShadowHover = "dark:hover:shadow-cyan-400";
      break;
    case "sky":
      lightBG = "bg-sky-100";
      lightFG = "text-sky-900";
      darkBG = "dark:bg-sky-900";
      darkFG = "dark:text-sky-100";
      gradientLightFrom = "from-sky-900";
      gradientLightTo = "to-sky-400";
      gradientDarkFrom = "dark:from-violet-100";
      gradientDarkTo = "dark:to-sky-400";
      toggleLight = "bg-sky-200";
      toggleDark = "bg-sky-900";
      toggleLightFont = "text-sky-900";
      toggleDarkFont = "text-sky-200";
      toggleBackgroundLight = "bg-sky-300";
      toggleBackgroundDark = "bg-sky-600";
      toggleAccent = "focus:ring-sky-500";
      buttonRingFocus = "focus:ring-sky-500";
      buttonLightColor = "bg-sky-200";
      buttonLightColorHover = "hover:bg-sky-300";
      buttonDarkColor = "dark:bg-sky-600";
      buttonDarkColorHover = "dark:hover:bg-sky-700";
      buttonLightShadow = "shadow-sky-400";
      buttonLightShadowHover = "hover:shadow-sky-400";
      buttonDarkShadow = "dark:shadow-sky-400";
      buttonDarkShadowHover = "dark:hover:shadow-sky-400";
      break;
    case "blue":
      lightBG = "bg-blue-100";
      lightFG = "text-blue-900";
      darkBG = "dark:bg-blue-900";
      darkFG = "dark:text-blue-100";
      gradientLightFrom = "from-blue-900";
      gradientLightTo = "to-blue-400";
      gradientDarkFrom = "dark:from-violet-100";
      gradientDarkTo = "dark:to-blue-400";
      toggleLight = "bg-blue-200";
      toggleDark = "bg-blue-900";
      toggleLightFont = "text-blue-900";
      toggleDarkFont = "text-blue-200";
      toggleBackgroundLight = "bg-blue-300";
      toggleBackgroundDark = "bg-blue-600";
      toggleAccent = "focus:ring-blue-500";
      buttonRingFocus = "focus:ring-blue-500";
      buttonLightColor = "bg-blue-200";
      buttonLightColorHover = "hover:bg-blue-300";
      buttonDarkColor = "dark:bg-blue-600";
      buttonDarkColorHover = "dark:hover:bg-blue-700";
      buttonLightShadow = "shadow-blue-400";
      buttonLightShadowHover = "hover:shadow-blue-400";
      buttonDarkShadow = "dark:shadow-blue-400";
      buttonDarkShadowHover = "dark:hover:shadow-blue-400";
      break;
    case "indigo":
      lightBG = "bg-indigo-100";
      lightFG = "text-indigo-900";
      darkBG = "dark:bg-indigo-900";
      darkFG = "dark:text-indigo-100";
      gradientLightFrom = "from-indigo-900";
      gradientLightTo = "to-indigo-400";
      gradientDarkFrom = "dark:from-violet-100";
      gradientDarkTo = "dark:to-indigo-400";
      toggleLight = "bg-indigo-200";
      toggleDark = "bg-indigo-900";
      toggleLightFont = "text-indigo-900";
      toggleDarkFont = "text-indigo-200";
      toggleBackgroundLight = "bg-indigo-300";
      toggleBackgroundDark = "bg-indigo-600";
      toggleAccent = "focus:ring-indigo-500";
      buttonRingFocus = "focus:ring-indigo-500";
      buttonLightColor = "bg-indigo-200";
      buttonLightColorHover = "hover:bg-indigo-300";
      buttonDarkColor = "dark:bg-indigo-600";
      buttonDarkColorHover = "dark:hover:bg-indigo-700";
      buttonLightShadow = "shadow-indigo-400";
      buttonLightShadowHover = "hover:shadow-indigo-400";
      buttonDarkShadow = "dark:shadow-indigo-400";
      buttonDarkShadowHover = "dark:hover:shadow-indigo-400";
      break;
    case "violet":
      lightBG = "bg-violet-100";
      lightFG = "text-violet-900";
      darkBG = "dark:bg-violet-900";
      darkFG = "dark:text-violet-100";
      gradientLightFrom = "from-violet-900";
      gradientLightTo = "to-violet-400";
      gradientDarkFrom = "dark:from-violet-100";
      gradientDarkTo = "dark:to-violet-400";
      toggleLight = "bg-violet-200";
      toggleDark = "bg-violet-900";
      toggleLightFont = "text-violet-900";
      toggleDarkFont = "text-violet-200";
      toggleBackgroundLight = "bg-violet-300";
      toggleBackgroundDark = "bg-violet-600";
      toggleAccent = "focus:ring-violet-500";
      buttonRingFocus = "focus:ring-violet-500";
      buttonLightColor = "bg-violet-200";
      buttonLightColorHover = "hover:bg-violet-300";
      buttonDarkColor = "dark:bg-violet-600";
      buttonDarkColorHover = "dark:hover:bg-violet-700";
      buttonLightShadow = "shadow-violet-400";
      buttonLightShadowHover = "hover:shadow-violet-400";
      buttonDarkShadow = "dark:shadow-violet-400";
      buttonDarkShadowHover = "dark:hover:shadow-violet-400";
      break;
    case "purple":
      lightBG = "bg-purple-100";
      lightFG = "text-purple-900";
      darkBG = "dark:bg-purple-900";
      darkFG = "dark:text-purple-100";
      gradientLightFrom = "from-purple-900";
      gradientLightTo = "to-purple-400";
      gradientDarkFrom = "dark:from-violet-100";
      gradientDarkTo = "dark:to-purple-400";
      toggleLight = "bg-purple-200";
      toggleDark = "bg-purple-900";
      toggleLightFont = "text-purple-900";
      toggleDarkFont = "text-purple-200";
      toggleBackgroundLight = "bg-purple-300";
      toggleBackgroundDark = "bg-purple-600";
      toggleAccent = "focus:ring-purple-500";
      buttonRingFocus = "focus:ring-purple-500";
      buttonLightColor = "bg-purple-200";
      buttonLightColorHover = "hover:bg-purple-300";
      buttonDarkColor = "dark:bg-purple-600";
      buttonDarkColorHover = "dark:hover:bg-purple-700";
      buttonLightShadow = "shadow-purple-400";
      buttonLightShadowHover = "hover:shadow-purple-400";
      buttonDarkShadow = "dark:shadow-purple-400";
      buttonDarkShadowHover = "dark:hover:shadow-purple-400";
      break;
    case "fuchsia":
      lightBG = "bg-fuchsia-100";
      lightFG = "text-fuchsia-900";
      darkBG = "dark:bg-fuchsia-900";
      darkFG = "dark:text-fuchsia-100";
      gradientLightFrom = "from-fuchsia-900";
      gradientLightTo = "to-fuchsia-400";
      gradientDarkFrom = "dark:from-violet-100";
      gradientDarkTo = "dark:to-fuchsia-400";
      toggleLight = "bg-fuchsia-200";
      toggleDark = "bg-fuchsia-900";
      toggleLightFont = "text-fuchsia-900";
      toggleDarkFont = "text-fuchsia-200";
      toggleBackgroundLight = "bg-fuchsia-300";
      toggleBackgroundDark = "bg-fuchsia-600";
      toggleAccent = "focus:ring-fuchsia-500";
      buttonRingFocus = "focus:ring-fuchsia-500";
      buttonLightColor = "bg-fuchsia-200";
      buttonLightColorHover = "hover:bg-fuchsia-300";
      buttonDarkColor = "dark:bg-fuchsia-600";
      buttonDarkColorHover = "dark:hover:bg-fuchsia-700";
      buttonLightShadow = "shadow-fuchsia-400";
      buttonLightShadowHover = "hover:shadow-fuchsia-400";
      buttonDarkShadow = "dark:shadow-fuchsia-400";
      buttonDarkShadowHover = "dark:hover:shadow-fuchsia-400";
      break;
    case "pink":
      lightBG = "bg-pink-100";
      lightFG = "text-pink-900";
      darkBG = "dark:bg-pink-900";
      darkFG = "dark:text-pink-100";
      gradientLightFrom = "from-pink-900";
      gradientLightTo = "to-pink-400";
      gradientDarkFrom = "dark:from-violet-100";
      gradientDarkTo = "dark:to-pink-400";
      toggleLight = "bg-pink-200";
      toggleDark = "bg-pink-900";
      toggleLightFont = "text-pink-900";
      toggleDarkFont = "text-pink-200";
      toggleBackgroundLight = "bg-pink-300";
      toggleBackgroundDark = "bg-pink-600";
      toggleAccent = "focus:ring-pink-500";
      buttonRingFocus = "focus:ring-pink-500";
      buttonLightColor = "bg-pink-200";
      buttonLightColorHover = "hover:bg-pink-300";
      buttonDarkColor = "dark:bg-pink-600";
      buttonDarkColorHover = "dark:hover:bg-pink-700";
      buttonLightShadow = "shadow-pink-400";
      buttonLightShadowHover = "hover:shadow-pink-400";
      buttonDarkShadow = "dark:shadow-pink-400";
      buttonDarkShadowHover = "dark:hover:shadow-pink-400";
      break;
    case "rose":
      lightBG = "bg-rose-100";
      lightFG = "text-rose-900";
      darkBG = "dark:bg-rose-900";
      darkFG = "dark:text-rose-100";
      gradientLightFrom = "from-rose-900";
      gradientLightTo = "to-rose-400";
      gradientDarkFrom = "dark:from-violet-100";
      gradientDarkTo = "dark:to-rose-400";
      toggleLight = "bg-rose-200";
      toggleDark = "bg-rose-900";
      toggleLightFont = "text-rose-900";
      toggleDarkFont = "text-rose-200";
      toggleBackgroundLight = "bg-rose-300";
      toggleBackgroundDark = "bg-rose-600";
      toggleAccent = "focus:ring-rose-500";
      buttonRingFocus = "focus:ring-rose-500";
      buttonLightColor = "bg-rose-200";
      buttonLightColorHover = "hover:bg-rose-300";
      buttonDarkColor = "dark:bg-rose-600";
      buttonDarkColorHover = "dark:hover:bg-rose-700";
      buttonLightShadow = "shadow-rose-400";
      buttonLightShadowHover = "hover:shadow-rose-400";
      buttonDarkShadow = "dark:shadow-rose-400";
      buttonDarkShadowHover = "dark:hover:shadow-rose-400";
      break;
    default:
      break;
  }

  return (
    <div
      className={classNames(
        "min-w-screen relative h-full min-h-screen",
        lightBG,
        lightFG,
        darkBG,
        darkFG
      )}
    >
      <h3 className="border-b border-slate-500 pt-5 pb-2 text-center text-lg font-bold tracking-widest opacity-50">
        PREVIEW
      </h3>
      {/* <div className="absolute top-6 right-6">
        <Toggle
          colors={{
            toggleLight,
            toggleDark,
            toggleLightFont,
            toggleDarkFont,
            toggleBackgroundLight,
            toggleBackgroundDark,
            toggleAccent,
          }}
          isLight={isLight}
          setIsLight={setIsLight}
          rounding={rounding}
        />
      </div> */}
      <div className="relative mx-auto flex max-w-7xl flex-col items-center p-4 sm:px-6 lg:px-8">
        <header className="flex flex-col items-center py-4">
          <Avatar
            profilePic={`https://${profilePic}`}
            name={name}
            rounding={rounding}
          />
          <p
            className={classNames(
              "bg-gradient-to-r bg-clip-text py-4 text-center text-6xl font-black text-transparent",
              gradientLightFrom,
              gradientLightTo,
              gradientDarkFrom,
              gradientDarkTo
            )}
          >
            {name}
          </p>
          <p className="my-2 text-xl font-bold">@{handle}</p>
          <p className="my-2 text-center text-xl">{title}</p>
          <div className="mt-2 flex flex-wrap justify-center gap-3">
            {smallLinks.map((link) => {
              return (
                <SmallLink
                  key={link.id}
                  link={link}
                  colors={{
                    buttonDarkColor,
                    buttonDarkColorHover,
                    buttonRingFocus,
                    buttonLightColor,
                    buttonLightColorHover,
                  }}
                  rounding={rounding}
                />
              );
            })}
          </div>
        </header>

        <ul role="list" className="w-full">
          {largeLinks.map((link) => {
            return (
              <LargeLink
                key={link.id}
                link={link}
                colors={{
                  buttonLightColor,
                  buttonLightColorHover,
                  buttonLightShadow,
                  buttonLightShadowHover,
                  buttonDarkColor,
                  buttonDarkColorHover,
                  buttonDarkShadow,
                  buttonDarkShadowHover,
                  buttonRingFocus,
                }}
                rounding={rounding}
              />
            );
          })}
        </ul>
        {linkList.length === 0 ? (
          <div className="absolute -bottom-96 flex h-full w-full items-center justify-center text-center text-2xl">
            👈 Let's add some links!!
          </div>
        ) : (
          <></>
        )}
      </div>
    </div>
  );
}

export default Render;

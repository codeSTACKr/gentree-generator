import { Switch } from "@headlessui/react";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Toggle({ colors, isLight, setIsLight, rounding }) {
  const {
    toggleLight,
    toggleDark,
    toggleLightFont,
    toggleDarkFont,
    toggleBackgroundLight,
    toggleBackgroundDark,
    toggleAccent,
  } = colors;

  function toggleColorMode() {
    if (localStorage.getItem("theme")) {
      if (localStorage.getItem("theme") === "light") {
        document.documentElement.classList.add("dark");
        localStorage.setItem("theme", "dark");
      } else {
        document.documentElement.classList.remove("dark");
        localStorage.setItem("theme", "light");
      }
    } else {
      if (document.documentElement.classList.contains("dark")) {
        document.documentElement.classList.remove("dark");
        localStorage.setItem("theme", "light");
      } else {
        document.documentElement.classList.add("dark");
        localStorage.setItem("theme", "dark");
      }
    }
    setIsLight(!isLight);
  }

  return (
    <Switch
      checked={isLight}
      onChange={toggleColorMode}
      className={classNames(
        isLight ? toggleBackgroundLight : toggleBackgroundDark,
        rounding,
        "relative inline-flex h-8 w-14 flex-shrink-0 cursor-pointer border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-offset-2",
        toggleAccent
      )}
    >
      <span className="sr-only">Use setting</span>
      <span
        className={classNames(
          isLight ? "translate-x-6" : "translate-x-0",
          isLight ? toggleLight : toggleDark,
          rounding,
          "pointer-events-none relative inline-block h-7 w-7 transform shadow ring-0 transition duration-200 ease-in-out"
        )}
      >
        <span
          className={classNames(
            isLight
              ? "opacity-0 duration-100 ease-out"
              : "opacity-100 duration-200 ease-in",
            "absolute inset-0 flex h-full w-full items-center justify-center transition-opacity"
          )}
          aria-hidden="true"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className={classNames("h-4 w-4", toggleDarkFont)}
            viewBox="0 0 24 24"
            strokeWidth="2"
            stroke="currentColor"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
            <path d="M12 3c.132 0 .263 0 .393 0a7.5 7.5 0 0 0 7.92 12.446a9 9 0 1 1 -8.313 -12.454z"></path>
          </svg>
        </span>
        <span
          className={classNames(
            isLight
              ? "opacity-100 duration-200 ease-in"
              : "opacity-0 duration-100 ease-out",
            "absolute inset-0 flex h-full w-full items-center justify-center transition-opacity"
          )}
          aria-hidden="true"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className={classNames("h-4 w-4", toggleLightFont)}
            viewBox="0 0 24 24"
            strokeWidth="2"
            stroke="currentColor"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
            <circle cx="12" cy="12" r="4"></circle>
            <path d="M3 12h1m8 -9v1m8 8h1m-9 8v1m-6.4 -15.4l.7 .7m12.1 -.7l-.7 .7m0 11.4l.7 .7m-12.1 -.7l-.7 .7"></path>
          </svg>
        </span>
      </span>
    </Switch>
  );
}

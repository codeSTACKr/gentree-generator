import { useEffect, useState, Fragment } from "react";
import { Dialog, Transition } from "@headlessui/react";
import Toggle from "./components/Toggle";
import Header from "./components/Header";
import Form from "./components/Form";
import Render from "./Render";
import { IconChevronLeft, IconChevronRight } from "@tabler/icons";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

function App() {
  const [isLight, setIsLight] = useState(false);
  const [open, setOpen] = useState(false);

  const [userName, setUserName] = useState("First Last");
  const [userHandle, setUserHandle] = useState("myHandle");
  const [userTitle, setUserTitle] = useState("I'm a really great person!");
  const [userAvatar, setUserAvatar] = useState("github.com/codestackr.png");
  const [userBorderStyle, setUserBorderStyle] = useState("Square-Rounded");

  const [colorSelected, setColorSelected] = useState({
    name: "slate",
    class: "bg-slate-500",
  });
  const [linkList, setLinkList] = useState([]);

  useEffect(() => {
    if (localStorage.getItem("theme")) {
      if (localStorage.getItem("theme") === "light") {
        setIsLight(true);
      }
    }
  }, []);

  let rounding = "rounded-full";

  let lightBG = "bg-slate-100";
  let lightFG = "text-slate-900";
  let darkBG = "dark:bg-slate-900";
  let darkFG = "dark:text-slate-100";
  let toggleLight = "bg-slate-200";
  let toggleDark = "bg-slate-900";
  let toggleLightFont = "text-slate-900";
  let toggleDarkFont = "text-slate-200";
  let toggleBackgroundLight = "bg-slate-300";
  let toggleBackgroundDark = "bg-slate-600";
  let toggleAccent = "focus:ring-slate-500";

  return (
    <div
      className={classNames(
        "min-w-screen relative flex min-h-screen flex-1 overflow-hidden",
        lightBG,
        lightFG,
        darkBG,
        darkFG
      )}
    >
      <main className="relative flex-1 overflow-y-auto">
        <section
          aria-labelledby="primary-section"
          className="flex h-full w-full min-w-0 flex-1 flex-col lg:order-last"
        >
          <div className="absolute top-6 right-6">
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
          </div>
          <div className="mx-auto flex w-full max-w-4xl flex-col items-center p-4 sm:px-6 lg:px-8">
            <Header />
            <Form
              {...{
                userName,
                setUserName,
                userHandle,
                setUserHandle,
                userTitle,
                setUserTitle,
                userAvatar,
                setUserAvatar,
                userBorderStyle,
                setUserBorderStyle,
                colorSelected,
                setColorSelected,
                linkList,
                setLinkList,
              }}
            />
          </div>
        </section>
      </main>
      <aside className="hidden w-1/3 min-w-[24rem] overflow-y-auto border-l border-slate-200 bg-white lg:block">
        <Render
          {...{
            userName,
            setUserName,
            userHandle,
            setUserHandle,
            userTitle,
            setUserTitle,
            userAvatar,
            setUserAvatar,
            userBorderStyle,
            setUserBorderStyle,
            colorSelected,
            setColorSelected,
            linkList,
            setLinkList,
          }}
        />
      </aside>
      <div className="place-content absolute top-[50%] right-0 -ml-8 grid rounded-l-md border-t border-l border-b border-slate-500 bg-slate-200 py-4 px-2 dark:bg-slate-900 sm:-ml-10 lg:hidden">
        <button
          type="button"
          className="rounded-l-md text-slate-500 hover:text-slate-600 focus:outline-none focus:ring-2 focus:ring-slate-400 dark:focus:ring-slate-600"
          onClick={() => setOpen(true)}
        >
          <span className="sr-only">Close panel</span>

          <IconChevronLeft className="h-6 w-6" aria-hidden="true" />
        </button>
      </div>
      <Transition.Root show={open} as={Fragment}>
        <Dialog as="div" className="relative" onClose={setOpen}>
          <div className="fixed inset-0" />

          <div className="fixed inset-0 overflow-hidden">
            <div className="absolute inset-0 overflow-hidden">
              <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10">
                <Transition.Child
                  as={Fragment}
                  enter="transform transition ease-in-out duration-500 sm:duration-700"
                  enterFrom="translate-x-full"
                  enterTo="translate-x-0"
                  leave="transform transition ease-in-out duration-500 sm:duration-700"
                  leaveFrom="translate-x-0"
                  leaveTo="translate-x-full"
                >
                  <Dialog.Panel className="pointer-events-auto relative block w-screen max-w-xl border-l border-slate-200 lg:hidden">
                    <div className="place-content absolute top-[50%] left-0 -ml-8 flex grid rounded-l-md border border-slate-500 bg-slate-200 py-4 px-2 dark:bg-slate-900 sm:-ml-10">
                      <button
                        type="button"
                        className="rounded-l-md text-slate-500 hover:text-slate-600 focus:outline-none focus:ring-2 focus:ring-slate-400 dark:focus:ring-slate-600"
                        onClick={() => setOpen(false)}
                      >
                        <span className="sr-only">Close panel</span>

                        <IconChevronRight
                          className="h-6 w-6"
                          aria-hidden="true"
                        />
                      </button>
                    </div>
                    <Render
                      {...{
                        userName,
                        setUserName,
                        userHandle,
                        setUserHandle,
                        userTitle,
                        setUserTitle,
                        userAvatar,
                        setUserAvatar,
                        userBorderStyle,
                        setUserBorderStyle,
                        colorSelected,
                        setColorSelected,
                        linkList,
                        setLinkList,
                      }}
                    />
                  </Dialog.Panel>
                </Transition.Child>
              </div>
            </div>
          </div>
        </Dialog>
      </Transition.Root>
    </div>
  );
}

export default App;

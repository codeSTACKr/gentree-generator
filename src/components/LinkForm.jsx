import { useState, Fragment } from "react";
import { Listbox, Transition } from "@headlessui/react";
import {
  IconCheck,
  IconChevronDown,
  IconPlus,
  IconBrandTwitter,
  IconClick,
} from "@tabler/icons";
import { socials } from "../helpers/socials";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const defaultLinkType = {
  name: "Select a Link Type",
  icon: <IconClick size={24} />,
};

const LinkForm = ({ linkList, setLinkList }) => {
  const [linkType, setLinkType] = useState({
    name: "Twitter",
    icon: <IconBrandTwitter size={24} />,
  });
  const [url, setUrl] = useState("");
  const [linkSize, setLinkSize] = useState("Small");
  function handleUpdateLinkList() {
    if (
      url === "" ||
      Object.keys(linkType).length === 0 ||
      linkType === defaultLinkType
    )
      return;
    let existsAlready = linkList.find(
      (o) => o.id === `${linkType.name}-${linkSize}`
    );
    if (linkSize.toLowerCase() === "both") {
      existsAlready = linkList.find((o) => o.id === `${linkType.name}-Small`);
      if (!existsAlready) {
        existsAlready = linkList.find((o) => o.id === `${linkType.name}-Large`);
      }
    }
    if (!existsAlready) {
      if (linkSize.toLowerCase() === "both") {
        setLinkList(() => [
          ...linkList,
          {
            id: `${linkType.name}-Small`,
            ...linkType,
            url,
            linkSize: "Small",
          },
          {
            id: `${linkType.name}-Large`,
            ...linkType,
            url,
            linkSize: "Large",
          },
        ]);
      } else {
        setLinkList(() => [
          ...linkList,
          {
            id: `${linkType.name}-${linkSize}`,
            ...linkType,
            url,
            linkSize,
          },
        ]);
      }

      setLinkType(defaultLinkType);
      setUrl("");
    }
    // TODO: add error handling
  }
  return (
    <Listbox value={linkType} onChange={setLinkType}>
      {({ open }) => (
        <div className="text-slate-500 sm:grid sm:grid-cols-4 sm:items-start sm:gap-4 sm:border-y sm:border-slate-200 sm:py-5 dark:sm:border-slate-800">
          <Listbox.Label className="block text-sm font-medium text-slate-700 dark:text-slate-200 sm:mt-px sm:pt-2">
            Add a Link
          </Listbox.Label>
          <div className="relative mt-1 flex w-full max-w-lg flex-col gap-2 sm:col-span-3 sm:mt-0">
            <div className="mt-1 w-full max-w-lg sm:col-span-3 sm:mt-0">
              <select
                id="linkSize"
                name="linkSize"
                autoComplete="linkSize"
                value={linkSize}
                onChange={(e) => setLinkSize(e.target.value)}
                className="block max-w-lg rounded-md border-slate-300 shadow-sm focus:border-slate-500 focus:ring-slate-500 sm:max-w-xs sm:text-sm"
              >
                <option>Small</option>
                <option>Large</option>
                <option>Both</option>
              </select>
            </div>
            <Listbox.Button className="relative max-w-lg cursor-default rounded-md border border-slate-300 bg-white py-2 pl-3 pr-10 text-left shadow-sm focus:border-slate-500 focus:outline-none focus:ring-1 focus:ring-slate-500 sm:text-sm">
              <span className="flex items-center">
                {linkType.icon}
                <span className="ml-3 block truncate">{linkType.name}</span>
              </span>
              <span className="pointer-events-none absolute inset-y-0 right-0 ml-3 flex items-center pr-2">
                <IconChevronDown
                  className="h-5 w-5 text-slate-400"
                  aria-hidden="true"
                />
              </span>
            </Listbox.Button>

            <div className="flex w-full max-w-lg rounded-md shadow-sm">
              <span className="inline-flex items-center rounded-l-md border border-r-0 border-slate-300 bg-slate-50 px-3 text-slate-500 sm:text-sm">
                https://
              </span>
              <input
                type="text"
                name="username"
                id="username"
                onChange={(e) => setUrl(e.target.value)}
                value={url}
                autoComplete="username"
                className="block w-full min-w-0 flex-1 rounded-none rounded-r-md border-slate-300 focus:border-slate-500 focus:ring-slate-500 sm:text-sm"
              />
            </div>

            <button
              type="button"
              className="inline-flex items-center rounded-md border border-transparent bg-slate-600 p-1 text-white shadow-sm hover:bg-slate-700 focus:outline-none focus:ring-2 focus:ring-slate-500 focus:ring-offset-2"
              onClick={handleUpdateLinkList}
            >
              <IconPlus className="mr-3 h-5 w-5" aria-hidden="true" />
              Add
            </button>

            <Transition
              show={open}
              as={Fragment}
              leave="transition ease-in duration-100"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Listbox.Options className="absolute z-10 mt-1 max-h-56 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                {socials.map((social) => (
                  <Listbox.Option
                    key={social.name}
                    className={({ active }) =>
                      classNames(
                        active ? "bg-slate-600 text-white" : "text-slate-900",
                        "relative cursor-default select-none py-2 pl-3 pr-9"
                      )
                    }
                    value={social}
                  >
                    {({ linkType, active }) => (
                      <>
                        <div className="flex items-center">
                          {social.icon}
                          <span
                            className={classNames(
                              linkType ? "font-semibold" : "font-normal",
                              "ml-3 block truncate"
                            )}
                          >
                            {social.name}
                          </span>
                        </div>

                        {linkType ? (
                          <span
                            className={classNames(
                              active ? "text-white" : "text-slate-600",
                              "absolute inset-y-0 right-0 flex items-center pr-4"
                            )}
                          >
                            <IconCheck className="h-5 w-5" aria-hidden="true" />
                          </span>
                        ) : null}
                      </>
                    )}
                  </Listbox.Option>
                ))}
              </Listbox.Options>
            </Transition>
          </div>
        </div>
      )}
    </Listbox>
  );
};

export default LinkForm;

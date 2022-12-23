import { useState, Fragment } from "react";
import { Listbox, Transition } from "@headlessui/react";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import {
  IconCheck,
  IconChevronDown,
  IconGripHorizontal,
  IconX,
} from "@tabler/icons";
import { colors } from "../helpers/colors";
import LinkForm from "./LinkForm";
import Avatar from "./Avatar";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

function convertLink(type, size) {
  return `VITE_${type.toUpperCase()}_LINK_${size.toUpperCase()}`;
}

function convertListOfLinks(list) {
  let linkString = "";
  list.forEach((l) => {
    linkString += `&${convertLink(l.name, l.linkSize)}=https://${l.url}`;
  });
  return linkString;
}

const Form = ({
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
}) => {
  function handleOnDragEnd(result) {
    if (!result.destination) return;

    const items = Array.from(linkList);
    const [reorderedItem] = items.splice(result.source.index, 1);
    items.splice(result.destination.index, 0, reorderedItem);

    setLinkList(items);
  }

  function handleRemoveLink(id) {
    setLinkList((list) => {
      return list.filter((item) => item.id !== id);
    });
  }

  function handleDeploy() {
    if (!userName) return;
    // TODO: Add more form validation
    const baseurl =
      "https://app.netlify.com/start/deploy?repository=https://github.com/codeSTACKr/gentree-template#";

    const url =
      baseurl +
      `VITE_NAME=${encodeURIComponent(userName.replace(/ /g, "_"))}` +
      `&VITE_HANDLE=@${encodeURIComponent(userHandle.replace(/ /g, "_"))}` +
      `&VITE_TITLE=${encodeURIComponent(userTitle.replace(/ /g, "_"))}` +
      `&VITE_PROFILE_PIC=https://${userAvatar}` +
      `&VITE_COLOR=${colorSelected.name}` +
      `&VITE_ROUNDSTYLE=${userBorderStyle.toLowerCase()}` +
      `&VITE_SMALL_LINKS_ORDER=${linkList
        .filter((link) => link.linkSize.toLowerCase() === "small")
        .map((link) => link.name.toLowerCase())}` +
      `&VITE_LARGE_LINKS_ORDER=${linkList
        .filter((link) => link.linkSize.toLowerCase() === "large")
        .map((link) => link.name.toLowerCase())}` +
      `${convertListOfLinks(linkList)}`;
    window.open(url, "_blank");
  }

  return (
    <form className="w-full space-y-8 divide-y divide-slate-200 dark:divide-slate-800">
      <div className="space-y-8 divide-y divide-slate-200 dark:divide-slate-800 sm:space-y-5">
        <div className="space-y-6 sm:space-y-5">
          <div>
            <h3 className="text-lg font-medium leading-6 text-slate-900 dark:text-slate-200">
              Profile Information
            </h3>
          </div>

          <div className="space-y-6 sm:space-y-5">
            <div className="w-full sm:grid sm:grid-cols-4 sm:items-start sm:gap-4 sm:border-t sm:border-slate-200 sm:pt-5 dark:sm:border-slate-800 dark:sm:border-slate-800">
              <label
                htmlFor="full-name"
                className="block text-sm font-medium text-slate-700 dark:text-slate-200 sm:mt-px sm:pt-2"
              >
                Name
              </label>
              <div className="mt-1 sm:col-span-3 sm:mt-0">
                <input
                  type="text"
                  name="full-name"
                  id="full-name"
                  autoComplete="given-name"
                  onChange={(e) => setUserName(e.target.value)}
                  value={userName}
                  className="block w-full max-w-lg rounded-md border-slate-300 text-slate-600 shadow-sm focus:border-slate-500 focus:ring-slate-500 dark:border-slate-800 sm:max-w-xs sm:text-sm"
                />
              </div>
            </div>

            <div className="sm:grid sm:grid-cols-4 sm:items-start sm:gap-4 sm:border-t sm:border-slate-200 sm:pt-5 dark:sm:border-slate-800">
              <label
                htmlFor="handle"
                className="block text-sm font-medium  text-slate-700 dark:text-slate-200 sm:mt-px sm:pt-2"
              >
                Handle
              </label>
              <div className="mt-1 sm:col-span-3 sm:mt-0">
                <div className="flex max-w-lg rounded-md shadow-sm">
                  <span className="inline-flex items-center rounded-l-md border border-r-0 border-slate-300 bg-slate-50 px-3 text-slate-500 dark:border-slate-800 sm:text-sm">
                    @
                  </span>
                  <input
                    type="text"
                    name="handle"
                    id="handle"
                    autoComplete="handle"
                    onChange={(e) => setUserHandle(e.target.value)}
                    value={userHandle}
                    className="block w-full min-w-0 flex-1 rounded-none rounded-r-md border-slate-300 text-slate-600 focus:border-slate-500 focus:ring-slate-500 dark:border-slate-800 sm:text-sm"
                  />
                </div>
              </div>
            </div>

            <div className="sm:grid sm:grid-cols-4 sm:items-start sm:gap-4 sm:border-t sm:border-slate-200 sm:pt-5 dark:sm:border-slate-800">
              <label
                htmlFor="title"
                className="block text-sm font-medium  text-slate-700 dark:text-slate-200 sm:mt-px sm:pt-2"
              >
                Title / About
              </label>
              <div className="mt-1 sm:col-span-3 sm:mt-0">
                <textarea
                  id="title"
                  name="title"
                  rows={3}
                  onChange={(e) => setUserTitle(e.target.value)}
                  value={userTitle}
                  className="sm:text-smf block w-full max-w-lg rounded-md border-slate-300 text-slate-600 shadow-sm focus:border-slate-500 focus:ring-slate-500 dark:border-slate-800"
                />
                <p className="mt-2 text-sm text-slate-500 dark:text-slate-200">
                  Write a few sentences about yourself.
                </p>
              </div>
            </div>

            <div className="sm:grid sm:grid-cols-4 sm:items-center sm:gap-4 sm:border-t sm:border-slate-200 sm:pt-5 dark:sm:border-slate-800">
              <label
                htmlFor="avatar"
                className="block text-sm font-medium  text-slate-700 dark:text-slate-200"
              >
                Avatar
              </label>
              <div className="mt-1 sm:col-span-3 sm:mt-0">
                <div className="flex items-center gap-3">
                  {/* <span className="h-12 w-12 overflow-hidden rounded-full bg-slate-100">
                    <svg
                      className="h-full w-full text-slate-300"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M24 20.993V24H0v-2.996A14.977 14.977 0 0112.004 15c4.904 0 9.26 2.354 11.996 5.993zM16.002 8.999a4 4 0 11-8 0 4 4 0 018 0z" />
                    </svg>
                  </span> */}
                  <Avatar
                    profilePic={`https://${userAvatar}`}
                    name={"placeholder"}
                    height="h-12"
                    width="w-12"
                  />
                  <div className="flex w-full max-w-md rounded-md shadow-sm">
                    <span className="inline-flex items-center rounded-l-md border border-r-0 border-slate-300 bg-slate-50 px-3 text-slate-500 dark:border-slate-800 sm:text-sm">
                      https://
                    </span>
                    <input
                      type="text"
                      name="avatar"
                      id="avatar"
                      autoComplete="avatar"
                      onChange={(e) => setUserAvatar(e.target.value)}
                      value={userAvatar}
                      className="block w-full min-w-0 flex-1 rounded-none rounded-r-md border-slate-300 text-slate-500 focus:border-slate-500 focus:ring-slate-500 dark:border-slate-800 sm:text-sm"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="space-y-6 pt-8 sm:space-y-5 sm:pt-10">
          <div>
            <h3 className="text-lg font-medium leading-6 text-slate-900 dark:text-slate-200">
              Page Style
            </h3>
          </div>
          <div className="space-y-6 sm:space-y-5">
            <div className="sm:grid sm:grid-cols-4 sm:items-start sm:gap-4 sm:border-t sm:border-slate-200 sm:pt-5 dark:sm:border-slate-800">
              <label
                htmlFor="border"
                className="block text-sm font-medium  text-slate-700 dark:text-slate-200 sm:mt-px sm:pt-2"
              >
                Border Style
              </label>
              <div className="mt-1 sm:col-span-3 sm:mt-0">
                <select
                  id="border"
                  name="border"
                  autoComplete="border"
                  onChange={(e) => setUserBorderStyle(e.target.value)}
                  value={userBorderStyle}
                  className="block max-w-lg rounded-md border-slate-300 text-slate-500 shadow-sm focus:border-slate-500 focus:ring-slate-500 dark:border-slate-800 sm:max-w-xs sm:text-sm"
                >
                  <option>Rounded</option>
                  <option>Square-Rounded</option>
                  <option>Square</option>
                </select>
              </div>
            </div>

            <Listbox value={colorSelected} onChange={setColorSelected}>
              {({ open }) => (
                <div className="sm:grid sm:grid-cols-4 sm:items-start sm:gap-4 sm:border-t sm:border-slate-200 sm:pt-5 dark:sm:border-slate-800">
                  <Listbox.Label className="block text-sm font-medium  text-slate-700 dark:text-slate-200 sm:mt-px sm:pt-2">
                    Color Style
                  </Listbox.Label>
                  <div className="relative mt-1 sm:col-span-3 sm:mt-0">
                    <Listbox.Button className="relative cursor-default rounded-md border border-slate-300 bg-white py-2 pl-3 pr-10 text-left shadow-sm focus:border-slate-500 focus:outline-none focus:ring-1 focus:ring-slate-500 dark:border-slate-800 sm:text-sm">
                      <span className="flex items-center">
                        <span
                          className={classNames(
                            "h-6 w-6 flex-shrink-0 rounded-md",
                            colorSelected.class
                          )}
                        />
                        <span className="ml-3 block truncate text-slate-500">
                          {colorSelected.name}
                        </span>
                      </span>
                      <span className="pointer-events-none absolute inset-y-0 right-0 ml-3 flex items-center pr-2">
                        <IconChevronDown
                          className="h-5 w-5 text-slate-400"
                          aria-hidden="true"
                        />
                      </span>
                    </Listbox.Button>

                    <Transition
                      show={open}
                      as={Fragment}
                      leave="transition ease-in duration-100"
                      leaveFrom="opacity-100"
                      leaveTo="opacity-0"
                    >
                      <Listbox.Options className="absolute z-10 mt-1 max-h-56 max-w-xl overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                        {colors.map((color) => (
                          <Listbox.Option
                            key={color.name}
                            className={({ active }) =>
                              classNames(
                                active
                                  ? "bg-slate-600 text-white"
                                  : "text-slate-900",
                                "relative cursor-default select-none py-2 pl-3 pr-9"
                              )
                            }
                            value={color}
                          >
                            {({ colorSelected, active }) => (
                              <>
                                <div className="flex items-center">
                                  <span
                                    className={classNames(
                                      "h-6 w-6 flex-shrink-0 rounded-md",
                                      color.class
                                    )}
                                  />
                                  <span
                                    className={classNames(
                                      colorSelected
                                        ? "font-semibold"
                                        : "font-normal",
                                      "ml-3 block truncate"
                                    )}
                                  >
                                    {color.name}
                                  </span>
                                </div>

                                {colorSelected ? (
                                  <span
                                    className={classNames(
                                      active ? "text-white" : "text-slate-600",
                                      "absolute inset-y-0 right-0 flex items-center pr-4"
                                    )}
                                  >
                                    <IconCheck
                                      className="h-5 w-5"
                                      aria-hidden="true"
                                    />
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
          </div>
        </div>

        <div className="space-y-6 divide-y divide-slate-200 pt-8 dark:divide-slate-800 sm:space-y-5 sm:pt-10">
          <div>
            <h3 className="text-lg font-medium leading-6 text-slate-900 dark:text-slate-200">
              Links
            </h3>
          </div>
          <div className="space-y-6 sm:space-y-5">
            <LinkForm linkList={linkList} setLinkList={setLinkList} />
            <DragDropContext onDragEnd={handleOnDragEnd}>
              <Droppable droppableId="linkList">
                {(provided) => (
                  <ul
                    role="list"
                    className="divide-y divide-slate-200 dark:divide-slate-800"
                    {...provided.droppableProps}
                    ref={provided.innerRef}
                  >
                    {linkList.map(
                      ({ id, name, icon, url, linkSize }, index) => {
                        return (
                          <Draggable key={id} draggableId={id} index={index}>
                            {(provided) => (
                              <li
                                className="flex w-full justify-between gap-4 py-4"
                                ref={provided.innerRef}
                                {...provided.draggableProps}
                                {...provided.dragHandleProps}
                              >
                                <div className="flex flex-shrink items-center justify-center">
                                  <IconGripHorizontal size="24" />
                                </div>
                                <div className="flex w-48">
                                  <div
                                    className={classNames(
                                      "flex flex-shrink items-center justify-center"
                                    )}
                                  >
                                    {icon}
                                  </div>
                                  <p className="px-2">{`${name}-${linkSize}`}</p>
                                </div>
                                <p className="flex-auto">https://{url}</p>
                                <button
                                  type="button"
                                  className="inline-flex items-center rounded-md border border-transparent bg-slate-600 p-1 text-white shadow-sm hover:bg-slate-700 focus:outline-none focus:ring-2 focus:ring-slate-500 focus:ring-offset-2"
                                  onClick={() => handleRemoveLink(id)}
                                >
                                  <IconX
                                    className="h-5 w-5"
                                    aria-hidden="true"
                                  />
                                </button>
                              </li>
                            )}
                          </Draggable>
                        );
                      }
                    )}
                    {provided.placeholder}
                  </ul>
                )}
              </Droppable>
            </DragDropContext>
          </div>
        </div>
      </div>

      <div className="border-none pb-12 pt-5">
        <div className="flex flex-col justify-end gap-3 sm:flex-row">
          <a
            href="https://github.com/signup"
            target="_blank"
            rel="noopener noreferrer"
            className="grid"
          >
            <button
              type="button"
              className="inline-flex justify-center rounded-md border border-transparent bg-slate-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-slate-700 focus:outline-none focus:ring-2 focus:ring-slate-500 focus:ring-offset-2"
            >
              1. Sign up for GitHub
            </button>
          </a>
          <a
            href="https://app.netlify.com/signup"
            target="_blank"
            rel="noopener noreferrer"
            className="grid"
          >
            <button
              type="button"
              className="inline-flex justify-center rounded-md border border-transparent bg-slate-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-slate-700 focus:outline-none focus:ring-2 focus:ring-slate-500 focus:ring-offset-2"
            >
              2. Sign up for Netlify
            </button>
          </a>
          <button
            type="button"
            className="inline-flex justify-center rounded-md border border-transparent bg-slate-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-slate-700 focus:outline-none focus:ring-2 focus:ring-slate-500 focus:ring-offset-2"
            onClick={handleDeploy}
          >
            3. Deploy to Netlify
          </button>
        </div>
      </div>
    </form>
  );
};

export default Form;

import { useEffect, useState } from "react";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

function checkIfImageExists(url, callback) {
  const img = new Image();
  img.src = url;

  if (img.complete) {
    callback(true);
  } else {
    img.onload = () => {
      callback(true);
    };

    img.onerror = () => {
      callback(false);
    };
  }
}

const Avatar = ({
  profilePic,
  name,
  rounding = "rounded-full",
  height = "h-28",
  width = "w-28",
}) => {
  const [isImage, setIsImage] = useState(false);
  useEffect(async () => {
    checkIfImageExists(profilePic, (exists) => {
      if (exists) {
        setIsImage(true);
      } else {
        setIsImage(false);
      }
    });
  }, [profilePic]);

  return (
    <>
      {isImage ? (
        <img
          className={classNames(
            "inline-block min-w-fit",
            height,
            width,
            rounding
          )}
          src={`${profilePic}`}
          alt={`Profile picture of ${name}`}
        />
      ) : (
        <span
          className={classNames(
            height,
            width,
            "inline-block min-w-fit overflow-hidden bg-gray-100",
            rounding
          )}
        >
          <svg
            className="h-full w-full text-gray-300"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M24 20.993V24H0v-2.996A14.977 14.977 0 0112.004 15c4.904 0 9.26 2.354 11.996 5.993zM16.002 8.999a4 4 0 11-8 0 4 4 0 018 0z" />
          </svg>
        </span>
      )}
    </>
  );
};

export default Avatar;

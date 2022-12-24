function getVariables() {
  let envVars = Object.entries(import.meta.env).filter((key) =>
    key[0].startsWith("VITE_")
  );

  const colorScheme = envVars.find((val) => val[0] === "VITE_COLOR")[1];
  const colorSchemeIndex = envVars.findIndex((val) => val[0] === "VITE_COLOR");

  if (colorSchemeIndex !== -1) {
    envVars.splice(colorSchemeIndex, 1);
  }

  const profilePic = envVars.find((val) => val[0] === "VITE_PROFILE_PIC")[1];
  const profilePicIndex = envVars.findIndex(
    (val) => val[0] === "VITE_PROFILE_PIC"
  );

  if (profilePicIndex !== -1) {
    envVars.splice(profilePicIndex, 1);
  }

  const name = envVars
    .find((val) => val[0] === "VITE_NAME")[1]
    .replace(/_/g, " ");
  const nameIndex = envVars.findIndex((val) => val[0] === "VITE_NAME");

  if (nameIndex !== -1) {
    envVars.splice(nameIndex, 1);
  }

  const handle = envVars
    .find((val) => val[0] === "VITE_HANDLE")[1]
    .replace(/_/g, " ");
  const handleIndex = envVars.findIndex((val) => val[0] === "VITE_HANDLE");

  if (handleIndex !== -1) {
    envVars.splice(handleIndex, 1);
  }

  const title = envVars
    .find((val) => val[0] === "VITE_TITLE")[1]
    .replace(/_/g, " ");
  const titleIndex = envVars.findIndex((val) => val[0] === "VITE_TITLE");

  if (titleIndex !== -1) {
    envVars.splice(titleIndex, 1);
  }

  const roundStyle = envVars
    .find((val) => val[0] === "VITE_ROUNDSTYLE")[1]
    .replace(/_/g, " ");
  const roundStyleIndex = envVars.findIndex(
    (val) => val[0] === "VITE_ROUNDSTYLE"
  );

  if (roundStyleIndex !== -1) {
    envVars.splice(roundStyleIndex, 1);
  }

  const smallLinksOrder = envVars
    .find((val) => val[0] === "VITE_SMALL_LINKS_ORDER")[1]
    .replace(/\s/g, "")
    .toLowerCase()
    .split(",");
  const smallLinksOrderIndex = envVars.findIndex(
    (val) => val[0] === "VITE_SMALL_LINKS_ORDER"
  );

  if (smallLinksOrderIndex !== -1) {
    envVars.splice(smallLinksOrderIndex, 1);
  }

  let smallLinks = envVars
    .filter((key) => key[0].endsWith("_SMALL"))
    .filter((key) => key[1] !== "")
    .map((k) => {
      const lowercaseName = deEnvify(k[0]);
      return [lowercaseName, k[1], smallLinksOrder.indexOf(lowercaseName)];
    })
    .sort((a, b) => a[2] - b[2]);

  const largeLinksOrder = envVars
    .find((val) => val[0] === "VITE_LARGE_LINKS_ORDER")[1]
    .replace(/\s/g, "")
    .toLowerCase()
    .split(",");
  const largeLinksOrderIndex = envVars.findIndex(
    (val) => val[0] === "VITE_LARGE_LINKS_ORDER"
  );

  if (largeLinksOrderIndex !== -1) {
    envVars.splice(largeLinksOrderIndex, 1);
  }

  let largeLinks = envVars
    .filter((key) => key[0].endsWith("_LARGE"))
    .filter((key) => key[1] !== "")
    .map((k) => {
      const lowercaseName = deEnvify(k[0]);
      return [lowercaseName, k[1], largeLinksOrder.indexOf(lowercaseName)];
    })
    .sort((a, b) => a[2] - b[2]);

  return {
    colorScheme,
    name,
    profilePic,
    handle,
    title,
    roundStyle,
    smallLinks,
    largeLinks,
  };
}

function deEnvify(str) {
  return str
    .replace("VITE_", "")
    .replace("_LINK", "")
    .replace("_SMALL", "")
    .replace("_LARGE", "")
    .toLowerCase()
    .split("_")
    .join(" ");
}

function validateHttp(string) {
  if (!/(http(s?)):\/\//i.test(string)) {
    return `https://${string}`;
  }
  return string;
}

export { getVariables, validateHttp };

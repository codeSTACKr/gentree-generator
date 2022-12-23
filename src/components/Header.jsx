import { IconArrowUpRight, IconHeart } from "@tabler/icons";

const Header = () => {
  return (
    <header
      className={
        "bg-slate-200 text-slate-800 dark:bg-slate-800 dark:text-slate-200"
      }
    >
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8" aria-label="Top">
        <div className="flex w-full items-center justify-between py-6">
          <div className="flex items-center">
            <span className="sr-only">genTr.ee</span>
            <svg
              viewBox="0 0 491 387"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="h-10 w-auto"
            >
              <path
                d="M207.54 265.18V227.18L209.44 220.34V178.92L207.54 171.32V102.92H256.94V260.62C256.94 288.233 251.113 311.287 239.46 329.78C227.807 348.527 211.847 362.587 191.58 371.96C171.313 381.333 148.007 386.02 121.66 386.02C102.407 386.02 84.6733 383.487 68.46 378.42C52.2467 373.353 36.54 365.627 21.34 355.24V314.2C36.7933 326.36 52.7533 334.847 69.22 339.66C85.6867 344.727 102.153 347.26 118.62 347.26C147.5 347.26 169.54 340.167 184.74 325.98C199.94 311.793 207.54 291.527 207.54 265.18ZM104.18 301.28C84.42 301.28 66.6867 297.1 50.98 288.74C35.2733 280.127 22.86 268.22 13.74 253.02C4.62 237.82 0.0600002 219.96 0.0600002 199.44C0.0600002 178.92 4.62 161.06 13.74 145.86C22.86 130.66 35.2733 118.88 50.98 110.52C66.6867 101.907 84.42 97.6 104.18 97.6C118.873 97.6 132.427 99.88 144.84 104.44C157.507 109 168.78 115.08 178.66 122.68C188.793 130.027 197.28 138.26 204.12 147.38C211.213 156.247 216.66 165.367 220.46 174.74C224.26 183.86 226.16 192.22 226.16 199.82C226.16 209.7 223.247 220.593 217.42 232.5C211.593 244.153 203.233 255.173 192.34 265.56C181.7 275.947 168.907 284.56 153.96 291.4C139.013 297.987 122.42 301.28 104.18 301.28ZM119.38 264.8C137.367 264.8 153.833 259.607 168.78 249.22C183.98 238.833 197.533 222.24 209.44 199.44C197.533 176.133 183.98 159.413 168.78 149.28C153.833 138.893 137.367 133.7 119.38 133.7C104.687 133.7 92.1467 136.487 81.76 142.06C71.3733 147.633 63.3933 155.36 57.82 165.24C52.5 175.12 49.84 186.52 49.84 199.44C49.84 212.107 52.5 223.38 57.82 233.26C63.3933 243.14 71.3733 250.867 81.76 256.44C92.1467 262.013 104.687 264.8 119.38 264.8ZM281.948 39.243H369.932V318H281.948V39.243ZM160.97 0.749975H490.91V78.582H160.97V0.749975Z"
                fill="currentColor"
              />
            </svg>
            {/* <div className="ml-10 hidden space-x-8 lg:block">
              {navigation.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-base font-medium text-white hover:text-slate-50"
                >
                  {link.name}
                </a>
              ))}
            </div> */}
          </div>
          <div className="ml-10 flex space-x-4">
            <a
              href="https://github.com/sponsors/codeSTACKr"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-md border border-slate-900 bg-slate-200 py-2 px-4 text-sm font-medium text-slate-900 shadow-sm hover:bg-slate-300 focus:outline-none focus:ring-2 focus:ring-slate-500 focus:ring-offset-2"
            >
              <IconHeart className="mr-2 h-5 w-5 text-red-500" />
              Sponsor
            </a>
            <a
              href="https://github.com/codeSTACKr/gentree-generator"
              className="inline-flex items-center gap-2 rounded-md border border-transparent bg-slate-500 py-2 px-4 text-base font-medium text-white hover:bg-opacity-75"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub <IconArrowUpRight size={18} />
            </a>
            {/* <a
              href="#"
              className="inline-block rounded-md border border-transparent bg-white py-2 px-4 text-base font-medium text-slate-600 hover:bg-slate-50"
            >
              Sign up
            </a> */}
          </div>
        </div>
        {/* <div className="flex flex-wrap justify-center space-x-6 py-4 lg:hidden">
          {navigation.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-base font-medium text-white hover:text-slate-50"
            >
              {link.name}
            </a>
          ))}
        </div> */}
      </nav>
    </header>
  );
};

export default Header;

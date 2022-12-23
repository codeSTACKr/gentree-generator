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
              className="h-10 w-auto"
              viewBox="0 0 850 850"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect width="850" height="850" rx="200" fill="#5AC24A" />
              <path
                d="M354.073 731.216V426.134L262.788 339.636"
                stroke="white"
                strokeWidth="24"
                strokeMiterlimit="10"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M287.704 309.606L384.755 364.442V266.629"
                stroke="white"
                strokeWidth="24"
                strokeMiterlimit="10"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M451.56 267.391V484.778L560.254 342.247"
                stroke="white"
                strokeWidth="24"
                strokeMiterlimit="10"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M596.594 353.019L451.56 568.556V731.216"
                stroke="white"
                strokeWidth="24"
                strokeMiterlimit="10"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M354.073 459.862C286.942 511.87 247.338 452.899 247.338 452.899C186.953 484.778 184.668 417.103 184.668 417.103C184.668 417.103 126.567 411.228 127.002 342.247C127.655 258.143 199.247 249.112 199.247 249.112C199.247 249.112 192.284 165.008 287.812 173.821C287.812 173.821 312.837 95.2654 400.749 133.02C400.749 133.02 505.961 77.7482 533.488 179.261C533.488 179.261 586.475 124.86 627.82 185.136C627.82 185.136 684.289 163.92 713.992 222.347C741.736 276.857 695.387 315.482 695.387 315.482C695.387 315.482 724.437 383.048 681.46 413.295C634.566 446.371 593.765 423.74 593.765 423.74C593.765 423.74 580.165 482.82 515.971 473.028"
                stroke="white"
                strokeWidth="24"
                strokeMiterlimit="10"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M538.059 320.704C538.059 320.704 572.984 369.665 639.898 348.122"
                stroke="white"
                strokeWidth="24"
                strokeMiterlimit="10"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M354.073 259.992C354.073 259.992 446.664 285.561 496.713 251.288"
                stroke="white"
                strokeWidth="24"
                strokeMiterlimit="10"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M301.086 278.814C301.086 278.814 292.926 319.615 241.68 357.37"
                stroke="white"
                strokeWidth="24"
                strokeMiterlimit="10"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M287.704 479.883C287.704 479.883 288.356 539.724 354.073 542.118"
                stroke="white"
                strokeWidth="24"
                strokeMiterlimit="10"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M241.789 731.216H579.294"
                stroke="white"
                strokeWidth="24"
                strokeMiterlimit="10"
                strokeLinecap="round"
                strokeLinejoin="round"
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

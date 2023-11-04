

const Hero = () => {
    return (
        <div>
         <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
        <div className="grid gap-10 lg:grid-cols-2">
          <div className="lg:pr-10">
            <a
              href="/"
              aria-label="Go Home"
              title="Logo"
              className="inline-block mb-5"
            >
              <div className="flex items-center justify-center w-12 h-12 rounded-full bg-indigo-50">
                <svg
                  className="w-10 h-10 text-deep-purple-accent-400"
                  stroke="currentColor"
                  viewBox="0 0 52 52"
                >
                  <polygon
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    fill="none"
                    points="29 13 14 29 25 29 23 39 38 23 27 23"
                  />
                </svg>
              </div>
            </a>
            <h5 className="mb-4 text-4xl font-extrabold leading-none text-slate-300">
              Instant access to
              <br className="hidden md:block" />
              investing, anytime{" "}
              <span className="inline-block text-deep-purple-accent-400">
                and anywhere
              </span>
            </h5>
            <p className="mt-5 text-slate-400 text-lg font-bold">
              Investing has never been easier. Everything you are looking for in
              an ultimate investment platform — on the device of your choice.
            </p>
            <hr className="mb-5 border-gray-300" />
            <button
              type="button"
              className="text-slate-200 bg-red-700 hover:bg-red-900 mt-3 focus:ring-4 focus:outline-none focus:ring-gray-100 font-bold text-md px-8 py-3 text-center inline-flex items-center mr-2 mb-2"
            >
              GET STARTED WITH FREE
            </button>
            <div className="flex items-center space-x-6 mt-5">
              <a
                href="/"
                className="text-slate-300 transition-colors duration-300 hover:text-deep-purple-accent-400"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  className="bi bi-apple h-10"
                  viewBox="0 0 16 16"
                  id="IconChangeColor"
                  data-darkreader-inline-fill=""
                >
                  {" "}
                  <path
                    d="M11.182.008C11.148-.03 9.923.023 8.857 1.18c-1.066 1.156-.902 2.482-.878 2.516.024.034 1.52.087 2.475-1.258.955-1.345.762-2.391.728-2.43zm3.314 11.733c-.048-.096-2.325-1.234-2.113-3.422.212-2.189 1.675-2.789 1.698-2.854.023-.065-.597-.79-1.254-1.157a3.692 3.692 0 0 0-1.563-.434c-.108-.003-.483-.095-1.254.116-.508.139-1.653.589-1.968.607-.316.018-1.256-.522-2.267-.665-.647-.125-1.333.131-1.824.328-.49.196-1.422.754-2.074 2.237-.652 1.482-.311 3.83-.067 4.56.244.729.625 1.924 1.273 2.796.576.984 1.34 1.667 1.659 1.899.319.232 1.219.386 1.843.067.502-.308 1.408-.485 1.766-.472.357.013 1.061.154 1.782.539.571.197 1.111.115 1.652-.105.541-.221 1.324-1.059 2.238-2.758.347-.79.505-1.217.473-1.282z"
                    id="mainIconPathAttribute"
                    fill="#737373"
                    data-darkreader-inline-fill=""
                  ></path>{" "}
                  <path
                    d="M11.182.008C11.148-.03 9.923.023 8.857 1.18c-1.066 1.156-.902 2.482-.878 2.516.024.034 1.52.087 2.475-1.258.955-1.345.762-2.391.728-2.43zm3.314 11.733c-.048-.096-2.325-1.234-2.113-3.422.212-2.189 1.675-2.789 1.698-2.854.023-.065-.597-.79-1.254-1.157a3.692 3.692 0 0 0-1.563-.434c-.108-.003-.483-.095-1.254.116-.508.139-1.653.589-1.968.607-.316.018-1.256-.522-2.267-.665-.647-.125-1.333.131-1.824.328-.49.196-1.422.754-2.074 2.237-.652 1.482-.311 3.83-.067 4.56.244.729.625 1.924 1.273 2.796.576.984 1.34 1.667 1.659 1.899.319.232 1.219.386 1.843.067.502-.308 1.408-.485 1.766-.472.357.013 1.061.154 1.782.539.571.197 1.111.115 1.652-.105.541-.221 1.324-1.059 2.238-2.758.347-.79.505-1.217.473-1.282z"
                    id="mainIconPathAttribute"
                    fill="#737373"
                    data-darkreader-inline-fill=""
                  ></path>{" "}
                </svg>
              </a>
              <a
                href="/"
                className="text-slate-300 transition-colors duration-300 hover:text-deep-purple-accent-400"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  className="bi bi-windows h-9"
                  viewBox="0 0 16 16"
                  id="IconChangeColor"
                  data-darkreader-inline-fill=""
                >
                  {" "}
                  <path
                    d="M6.555 1.375 0 2.237v5.45h6.555V1.375zM0 13.795l6.555.933V8.313H0v5.482zm7.278-5.4.026 6.378L16 16V8.395H7.278zM16 0 7.33 1.244v6.414H16V0z"
                    id="mainIconPathAttribute"
                    fill="#737373"
                    data-darkreader-inline-fill=""
                  ></path>{" "}
                </svg>
              </a>
              <a
                href="/"
                className="text-gray-600 transition-colors duration-300 hover:text-deep-purple-accent-400"
              >
                <svg
                 className="h-12"
                  viewBox="0 0 48 48"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  id="IconChangeColor"
                >
                  <path
                    d="M24 15C28.9706 15 33 19.0294 33 24C33 28.9706 28.9706 33 24 33C19.0294 33 15 28.9706 15 24C15 19.0294 19.0294 15 24 15ZM24 15H41.8654M17 42.7408L29.6439 31M6 15.2717L16.8751 29.552M24 44C35.0457 44 44 35.0457 44 24C44 12.9543 35.0457 4 24 4C12.9543 4 4 12.9543 4 24C4 35.0457 12.9543 44 24 44Z"
                   
                    data-darkreader-inline-stroke=""
                    id="mainIconPathAttribute"
                    fill="#737373"
                    data-darkreader-inline-fill=""
                  ></path>
                </svg>
              </a>
            </div>
          </div>
          <div>
            <img
              className="object-cover w-full h-56 rounded shadow-lg sm:h-96"
              src="https://i.brecorder.com/primary/2022/12/241730193a78f7e.gif"
              alt=""
            />
          </div>
        </div>
      </div>   
        </div>
    );
};

export default Hero;
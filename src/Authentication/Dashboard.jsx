import { Link } from "react-router-dom";
import LiveTradingApp from "../LiveData/LiveData";


const Dashboard = () => {
  
  return (
    <div>
      <div className="flex overflow-hidden bg-dark pt-16">
        <aside
          id="sidebar"
          className="fixed hidden z-20 top-0 mt-40 pt-16 flex lg:flex flex-shrink-0 flex-col w-64 transition-width duration-75"
          aria-label="Sidebar"
        >
          <div className="relative flex-1 flex flex-col min-h-0 bg-dark pt-0 mt-8 ml-16">
            <div className="flex-1 flex flex-col pt-5 pb-4 overflow-y-auto">
              <div className="flex-1 px-3 bg-slate-700 divide-y space-y-1">
                <ul className="space-y-2 pb-2">
                  <li>
                    <form action="#" method="GET" className="lg:hidden">
                      <label className="sr-only">Search</label>
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                          <svg
                            className="w-5 h-5 text-gray-500"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path d="M5 3a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 00-2-2H5zM5 11a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2H5zM11 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zM11 13a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"></path>
                          </svg>
                        </div>
                        <input
                          type="text"
                          name="email"
                          id="mobile-search"
                          className="bg-gray-50 border border-gray-300 bg-slate-400 text-sm rounded-lg focus:ring-cyan-600 focus:ring-cyan-600 block w-full pl-10 p-2.5"
                          placeholder="Search"
                        />
                      </div>
                    </form>
                  </li>
                  <li>
                    <a
                      href="dashboard"
                      className="text-base bg-slate-800 font-normal rounded-lg flex items-center p-2 hover:bg-slate-500 group"
                    >
                      <svg
                        className="w-6 h-6 text-slate-200 group-hover:text-slate-300 transition duration-75"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M2 10a8 8 0 018-8v8h8a8 8 0 11-16 0z"></path>
                        <path d="M12 2.252A8.014 8.014 0 0117.748 8H12V2.252z"></path>
                      </svg>
                      <span className="ml-3 text-slate-200">Dashboard</span>
                    </a>
                  </li>
                  
                  
                  <li>
                    <a
                      href="documentation"
                      className="text-base bg-slate-800 font-normal rounded-lg flex items-center p-2 hover:bg-slate-500 group"
                    >
                      <svg
                        className="w-6 h-6 text-slate-200 flex-shrink-0 group-hover:text-slate-300 transition duration-75"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"></path>
                      </svg>
                      <span className="ml-3 flex-1 whitespace-nowrap text-slate-200 group-hover:text-slate-200">
                        Documentation
                      </span>
                    </a>
                  </li>
                  <li>
                    <a
                      href="dashboard/wallet"
                      className="text-base bg-slate-800 font-normal rounded-lg flex items-center p-2 hover:bg-slate-500 group"
                    >
                      <svg
                        className="w-6 h-6 text-slate-200 flex-shrink-0 group-hover:text-slate-300 transition duration-75"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M10 2a4 4 0 00-4 4v1H5a1 1 0 00-.994.89l-1 9A1 1 0 004 18h12a1 1 0 00.994-1.11l-1-9A1 1 0 0015 7h-1V6a4 4 0 00-4-4zm2 5V6a2 2 0 10-4 0v1h4zm-6 3a1 1 0 112 0 1 1 0 01-2 0zm7-1a1 1 0 100 2 1 1 0 000-2z"></path>
                      </svg>
                      <span className="ml-3 flex-1 whitespace-nowrap text-slate-200 group-hover:text-slate-200">
                        Wallet
                      </span>
                    </a>
                  </li>
                  
                </ul>
               
              </div>
            </div>
          </div>
        </aside>
        <div
          className="bg-gray-900 opacity-50 hidden fixed inset-0 z-10"
          id="sidebarBackdrop"
        ></div>
        <div
          id="main-content"
          className="h-full w-full bg-slate-700 relative overflow-y-auto lg:ml-64"
        >
          <main>
            <div className="pt-6 px-4">
             <LiveTradingApp/>
              <div className="">
                
                <div className="bg-slate-700 shadow rounded-lg p-4 sm:p-6 xl:p-8 ">
                  <h3 className="text-xl leading-none font-bold text-slate-200 mb-10">
                    Acquisition Overview
                  </h3>
                  <div className="block w-full overflow-x-auto">
                    <table className="items-center w-full bg-slate-700 border-collapse">
                      <thead>
                        <tr>
                          <th className="px-4 bg-slate-800 text-slate-200 align-middle py-3 text-xs font-semibold text-left uppercase border-l-0 border-r-0 whitespace-nowrap">
                            Top Channels
                          </th>
                          <th className="px-4 bg-slate-800 text-slate-200 align-middle py-3 text-xs font-semibold text-left uppercase border-l-0 border-r-0 whitespace-nowrap">
                            Users
                          </th>
                          <th className="px-4 bg-slate-800 text-slate-200 align-middle py-3 text-xs font-semibold text-left uppercase border-l-0 border-r-0 whitespace-nowrap min-w-140-px"></th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-gray-100">
                        <tr className="text-slate-200">
                          <th className="border-t-0 px-4 align-middle text-sm font-normal whitespace-nowrap p-4 text-left">
                            Organic Search
                          </th>
                          <td className="border-t-0 px-4 align-middle text-xs font-medium text-slate-200 whitespace-nowrap p-4">
                            5,649
                          </td>
                          <td className="border-t-0 px-4 align-middle text-xs whitespace-nowrap p-4">
                            <div className="flex items-center">
                              <span className="mr-2 text-xs font-medium text-slate-200">
                                30%
                              </span>
                              <div className="relative w-full">
                                <div className="w-full bg-gray-200 rounded-sm h-2">
                                  <div className="bg-cyan-600 h-2 rounded-sm"></div>
                                </div>
                              </div>
                            </div>
                          </td>
                        </tr>
                        <tr className="text-slate-200">
                          <th className="border-t-0 px-4 align-middle text-sm font-normal whitespace-nowrap p-4 text-left">
                            Referral
                          </th>
                          <td className="border-t-0 px-4 align-middle text-xs font-medium text-slate-200 whitespace-nowrap p-4">
                            4,025
                          </td>
                          <td className="border-t-0 px-4 align-middle text-xs whitespace-nowrap p-4">
                            <div className="flex items-center">
                              <span className="mr-2 text-xs font-medium">
                                24%
                              </span>
                              <div className="relative w-full">
                                <div className="w-full bg-gray-200 rounded-sm h-2">
                                  <div className="bg-orange-300 h-2 rounded-sm"></div>
                                </div>
                              </div>
                            </div>
                          </td>
                        </tr>
                        <tr className="text-slate-200">
                          <th className="border-t-0 px-4 align-middle text-sm font-normal whitespace-nowrap p-4 text-left">
                            Direct
                          </th>
                          <td className="border-t-0 px-4 align-middle text-xs font-medium text-slate-200 whitespace-nowrap p-4">
                            3,105
                          </td>
                          <td className="border-t-0 px-4 align-middle text-xs whitespace-nowrap p-4">
                            <div className="flex items-center">
                              <span className="mr-2 text-xs font-medium">
                                18%
                              </span>
                              <div className="relative w-full">
                                <div className="w-full bg-gray-200 rounded-sm h-2">
                                  <div className="bg-teal-400 h-2 rounded-sm"></div>
                                </div>
                              </div>
                            </div>
                          </td>
                        </tr>
                        <tr className="text-slate-200">
                          <th className="border-t-0 px-4 align-middle text-sm font-normal whitespace-nowrap p-4 text-left">
                            Social
                          </th>
                          <td className="border-t-0 px-4 align-middle text-xs font-medium text-slate-200 whitespace-nowrap p-4">
                            1251
                          </td>
                          <td className="border-t-0 px-4 align-middle text-xs whitespace-nowrap p-4">
                            <div className="flex items-center">
                              <span className="mr-2 text-xs font-medium">
                                12%
                              </span>
                              <div className="relative w-full">
                                <div className="w-full bg-gray-200 rounded-sm h-2">
                                  <div className="bg-pink-600 h-2 rounded-sm"></div>
                                </div>
                              </div>
                            </div>
                          </td>
                        </tr>
                        <tr className="text-slate-200">
                          <th className="border-t-0 px-4 align-middle text-sm font-normal whitespace-nowrap p-4 text-left">
                            Other
                          </th>
                          <td className="border-t-0 px-4 align-middle text-xs font-medium text-slate-200 whitespace-nowrap p-4">
                            734
                          </td>
                          <td className="border-t-0 px-4 align-middle text-xs whitespace-nowrap p-4">
                            <div className="flex items-center">
                              <span className="mr-2 text-xs font-medium">
                                9%
                              </span>
                              <div className="relative w-full">
                                <div className="w-full bg-gray-200 rounded-sm h-2">
                                  <div className="bg-indigo-600 h-2 rounded-sm"></div>
                                </div>
                              </div>
                            </div>
                          </td>
                        </tr>
                        <tr className="text-slate-200">
                          <th className="border-t-0 align-middle text-sm font-normal whitespace-nowrap p-4 pb-0 text-left">
                            Email
                          </th>
                          <td className="border-t-0 align-middle text-xs font-medium text-slate-200 whitespace-nowrap p-4 pb-0">
                            456
                          </td>
                          <td className="border-t-0 align-middle text-xs whitespace-nowrap p-4 pb-0">
                            <div className="flex items-center">
                              <span className="mr-2 text-xs font-medium">
                                7%
                              </span>
                              <div className="relative w-full">
                                <div className="w-full bg-gray-200 rounded-sm h-2">
                                  <div className="bg-purple-500 h-2 rounded-sm"></div>
                                </div>
                              </div>
                            </div>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
           
          </main>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;

const Ratio = () => {
  return (
    <div>
      <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
        <div className="flex flex-col bg-dark border rounded shadow-sm md:justify-center lg:flex-row">
          <div className="flex flex-col justify-between p-5 border-b sm:p-10 lg:border-b-0 lg:border-r lg:w-1/2">
            <div>
              <h1 className="mb-1 text-xl text-slate-300 text-center font-bold tracking-wide uppercase">
                Market Comparison
              </h1>

              <div
                className="flex justify-center items-center rounded-md shadow-sm mt-5"
                role="group"
              >
                <button
                  type="button"
                  className="px-4 py-2 text-sm font-medium text-slate-200 bg-yellow-600 border border-gray-900 rounded-l-lg hover:bg-gray-900 hover:text-white focus:z-10 focus:ring-2 focus:ring-gray-500 focus:bg-gray-900 focus:text-white"
                >
                  DAVID
                </button>
                <button
                  type="button"
                  className="px-4 py-2 text-sm font-medium text-slate-200 bg-sky-700 border-t border-b border-gray-900 hover:bg-gray-900 hover:text-white focus:z-10 focus:ring-2 focus:ring-gray-500 focus:bg-gray-900 focus:text-white"
                >
                  SAYEED
                </button>
                <button
                  type="button"
                  className="px-4 py-2 text-sm font-medium text-slate-200 bg-blue-900 border border-gray-900 rounded-r-md hover:bg-gray-900 hover:text-white focus:z-10 focus:ring-2 focus:ring-gray-500 focus:bg-gray-900 focus:text-white"
                >
                  RASEL
                </button>
                <button
                  type="button"
                  className="px-4 py-2 text-sm font-medium text-slate-200 bg-pink-500 border border-gray-900 rounded-r-md hover:bg-gray-900 hover:text-white focus:z-10 focus:ring-2 focus:ring-gray-500 focus:bg-gray-900 focus:text-white"
                >
                  Meharab
                </button>
                <button
                  type="button"
                  className="px-4 py-2 text-sm font-medium text-slate-200 bg-green-600 border border-gray-900 rounded-r-md hover:bg-gray-900 hover:text-white focus:z-10 focus:ring-2 focus:ring-gray-500 focus:bg-gray-900 focus:text-white"
                >
                  HOSSAIN
                </button>
              </div>

              <div className="relative overflow-x-auto mt-6">
                <table className="w-full text-sm text-left text-gray-400">
                  <thead className="text-xs text-gray-700 uppercase bg-dark">
                    <tr>
                      <th scope="col" className="px-6 py-3 text-slate-200 text-center">
                        Today
                      </th>
                      <th scope="col" className="px-6 py-3"></th>
                      <th scope="col" className="px-6 py-3 text-slate-200 text-center">
                        Yesterday
                      </th>
                      <th scope="col" className="px-6 py-3"></th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="bg-dark border-b">
                      <th
                        scope="row"
                        className="px-6 py-4 font-bold text-slate-200 whitespace-nowrap"
                      >
                        Index
                      </th>
                      <td className="px-6 py-4 text-slate-200">1035.7687</td>
                      <td className="px-6 py-4 font-bold text-slate-200 whitespace-nowrap">
                        Index
                      </td>
                      <td className="px-6 py-4 text-slate-200">3465.7623</td>
                    </tr>
                    <tr className="bg-dark border-b">
                      <th
                        scope="row"
                        className="px-6 py-4 font-medium text-slate-200 whitespace-nowrap"
                      >
                        %
                      </th>
                      <td className="px-6 py-4 text-slate-200">-0.7634</td>
                      <td className="px-6 py-4 font-bold text-slate-200 whitespace-nowrap">
                        %
                      </td>
                      <td className="px-6 py-4 text-slate-200">0.0076</td>
                    </tr>
                    <tr className="bg-dark border-b">
                      <th
                        scope="row"
                        className="px-6 py-4 font-medium text-slate-200 whitespace-nowrap"
                      >
                        Trade
                      </th>
                      <td className="px-6 py-4 text-slate-200">3215</td>
                      <td className="px-6 py-4 font-bold text-slate-200 whitespace-nowrap">
                        Trade
                      </td>
                      <td className="px-6 py-4 text-slate-200">5423</td>
                    </tr>
                    <tr className="bg-dark border-b">
                      <th
                        scope="row"
                        className="px-6 py-4 font-medium text-slate-200 whitespace-nowrap"
                      >
                        Volume
                      </th>
                      <td className="px-6 py-4 text-slate-200">3876543</td>
                      <td className="px-6 py-4 font-bold text-slate-200 whitespace-nowrap">
                        Volume
                      </td>
                      <td className="px-6 py-4">4321654</td>
                    </tr>
                    <tr className="bg-dark border-b">
                      <th
                        scope="row"
                        className="px-6 py-4 font-medium text-slate-200 whitespace-nowrap"
                      >
                        Value
                      </th>
                      <td className="px-6 py-4 text-slate-200">143,765,345</td>
                      <td className="px-6 py-4 font-bold text-slate-200 whitespace-nowrap">
                        Value
                      </td>
                      <td className="px-6 py-4 text-slate-200">176,543,8754</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          <div className="flex flex-col justify-between p-5 sm:p-10 lg:w-1/2">
            <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
              <h1 className="mb-1 text-xl text-slate-200 text-center font-bold tracking-wide uppercase">
                MARKET MOVER
              </h1>
              <div
                className="flex justify-center items-center rounded-md shadow-sm mt-5"
                role="group"
              >
                <button
                  type="button"
                  className="px-4 py-2 text-sm text-slate-200 font-medium text-gray-900 bg-yellow-600 border border-gray-900 rounded-l-lg hover:bg-gray-900 hover:text-white focus:z-10 focus:ring-2 focus:ring-gray-500 focus:bg-gray-900 focus:text-white"
                >
                  BUY VOLUME
                </button>
                <button
                  type="button"
                  className="px-4 py-2 text-sm text-slate-200 font-medium text-gray-900 bg-sky-700 border-t border-b border-gray-900 hover:bg-gray-900 hover:text-white focus:z-10 focus:ring-2 focus:ring-gray-500 focus:bg-gray-900 focus:text-white"
                >
                  BUY VALUE
                </button>
                <button
                  type="button"
                  className="px-4 py-2 text-sm text-slate-200 font-medium text-gray-900 bg-blue-900 border border-gray-900 rounded-r-md hover:bg-gray-900 hover:text-white focus:z-10 focus:ring-2 focus:ring-gray-500 focus:bg-gray-900 focus:text-white"
                >
                  BUY TRADE
                </button>
                
              </div>
              <table className="w-full text-sm text-left text-slate-200">
                <thead className="text-xs text-slate-200 uppercase bg-dark">
                  <tr>
                    <th scope="col" className="px-6 py-3">
                      Company
                    </th>
                    <th scope="col" className="px-6 py-3">
                      LTP
                    </th>
                    <th scope="col" className="px-6 py-3">
                      High
                    </th>
                    <th scope="col" className="px-6 py-3">
                      Low
                    </th>
                    <th scope="col" className="px-6 py-3">
                      Value
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b bg-dark">
                    <th
                      scope="row"
                      className="px-6 py-4 font-medium text-slate-200 whitespace-nowrap"
                    >
                      David Trade
                    </th>
                    <td className="px-4 py-4">590.00</td>
                    <td className="px-4 py-4">590.00</td>
                    <td className="px-4 py-4">590.00</td>
                    <td className="px-4 py-4">324567365.00</td>
                  </tr>
                  <tr className="border-b bg-dark">
                    <th
                      scope="row"
                      className="px-6 py-4 font-medium text-slate-200 whitespace-nowrap"
                    >
                      Sayeed Co.
                    </th>
                    <td className="px-4 py-4">170.00</td>
                    <td className="px-4 py-4">170.00</td>
                    <td className="px-4 py-4">170.00</td>
                    <td className="px-4 py-4">65432785.87</td>
                  </tr>

                  <tr className="border-b bg-dark">
                    <th
                      scope="row"
                      className="px-6 py-4 font-medium text-slate-200 whitespace-nowrap"
                    >
                      Zisan Trade
                    </th>
                    <td className="px-4 py-4">270.00</td>
                    <td className="px-4 py-4">270.00</td>
                    <td className="px-4 py-4">220.00</td>
                    <td className="px-4 py-4">875345765.78</td>
                  </tr>
                  <tr className="border-b bg-dark">
                    <th
                      scope="row"
                      className="px-6 py-4 font-medium text-slate-200 whitespace-nowrap"
                    >
                      Rasel Ltd.
                    </th>
                    <td className="px-4 py-4">170.00</td>
                    <td className="px-4 py-4">170.00</td>
                    <td className="px-4 py-4">170.00</td>
                    <td className="px-4 py-4">98754379.65</td>
                  </tr>
                  <tr className="border-b bg-dark">
                    <th
                      scope="row"
                      className="px-6 py-4 font-medium text-slate-200 whitespace-nowrap"
                    >
                      Hossain Co.
                    </th>
                    <td className="px-4 py-4">190.00</td>
                    <td className="px-4 py-4">190.00</td>
                    <td className="px-4 py-4">190.00</td>
                    <td className="px-4 py-4">76424885.0986</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Ratio;

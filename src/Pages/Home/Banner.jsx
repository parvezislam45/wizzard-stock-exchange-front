import Slider from "react-slick";
import { useEffect, useState } from "react";
import Hero from "./Hero";

const Banner = () => {
  const settings = {
    infinite: true,
      slidesToShow: 5,
      slidesToScroll: 1,
      autoplay: true,
      speed: 3000,
      autoplaySpeed: 3000,
      cssEase: "linear",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  const [trades,setTrades]=useState([])
  useEffect(()=>{
    fetch('https://stockapi-i947.onrender.com/api')
    .then(res => res.json())
    .then(data =>{setTrades(data)})
  },[trades])
  return (
    <div >
      {/* -------------------------- Slider --------------------------- */}
      <div className="mt-28 bg-gray-800">
        <Slider {...settings}>
          {trades.map((item, index) => (
            <div
              key={index}
              className=" text-white w-60 flex flex-col rounded-xl shadow-lg p-4"
            >
              <div className="flex items-center justify-between gap-8">
                <div className="text-md font-bold">{item.description}</div>
                <div className="text-md font-bold">{item.title}</div>
              </div>
              <div className="flex items-center justify-between gap-8">
                <div className="text-md font-bold">{item.value}</div>
                <div className="text-xl text-red-600 font-bold">- {item.price}</div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
<Hero/>
      {/* -------------------------- Slider --------------------------- */}
      <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
        <div className="grid gap-10 lg:grid-cols-2">
          <div className="lg:pr-10">
            <h5 className="mb-4 text-3xl font-extrabold leading-none">
              <span className="text-yellow-500">150M+ </span>
              <span className="inline-block text-slate-200 mt-5">Users Choose Us</span>
              <span className="inline-block text-slate-200 mt-5">
                Find Out Why Today!
              </span>
            </h5>
            <div className="md:flex md:items-start md:-mx-4 mt-10">
              <img
                className="w-6 h-6"
                src="https://cdn-icons-png.flaticon.com/256/217/217853.png"
                alt=""
              />
              <div className="mt-4 md:mx-4 md:mt-0">
                <h1 className="text-md font-semibold text-slate-300 capitalize">
                  Register now and get up to 100 USDT in rewards
                </h1>
              </div>
            </div>
            <div className="flex items-center mt-20">
              <input
                type="text"
                id="voice-search"
                className="bg-slate-300 border border-gray-300 text-slate-900 text-sm rounded-lg focus:ring-slate-100 focus:border-slate-100 block w-60 pl-10 p-5"
                placeholder=""
              />
              <button
                type="submit"
                className="inline-flex items-center py-4 px-16 ml-2 text-lg rounded-lg font-medium text-slate-200 bg-yellow-700 border border-blue-700 hover:bg-yellow-800"
              >
                Register
              </button>
            </div>
            <h1 className="text-center font-semibold text-md mt-5">
              <span class="text-slate-300">Already Have Account? </span>
               <a class="text-slate-200" href="">LOGIN</a>
            </h1>

            <hr className="mb-5 border-gray-300 mt-10" />
            <h1 className="text-center text-slate-300 font-semibold text-md">
              Continue With
            </h1>
            <div className="flex items-center mt-10 gap-10">
              <button
                type="button"
                className="text-slate-300 text-xl bg-slate-600 rounded-lg hover:bg-[#4285F4]/90 focus:ring-4 focus:outline-none focus:ring-[#4285F4]/50 font-medium px-16 py-5 text-center inline-flex items-center mr-2 mb-2"
              >
                <svg
                  className="w-7 h-7 mr-2"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 18 19"
                >
                  <path d="M8.842 18.083a8.8 8.8 0 0 1-8.65-8.948 8.841 8.841 0 0 1 8.8-8.652h.153a8.464 8.464 0 0 1 5.7 2.257l-2.193 2.038A5.27 5.27 0 0 0 9.09 3.4a5.882 5.882 0 0 0-.2 11.76h.124a5.091 5.091 0 0 0 5.248-4.057L14.3 11H9V8h8.34c.066.543.095 1.09.088 1.636-.086 5.053-3.463 8.449-8.4 8.449l-.186-.002Z" />
                </svg>
                Google
              </button>
              <button
                type="button"
                className="text-slate-300 bg-slate-600 rounded-lg hover:bg-[#050708]/90 focus:ring-4 focus:outline-none focus:ring-[#050708]/50 font-medium text-xl px-16 py-5 text-center inline-flex items-center mr-2 mb-2"
              >
                <svg
                  className="w-7 h-7 mr-2 -ml-1"
                  aria-hidden="true"
                  focusable="false"
                  data-prefix="fab"
                  data-icon="apple"
                  role="img"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 384 512"
                >
                  <path
                    fill="currentColor"
                    d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z"
                  ></path>
                </svg>
                Apple
              </button>
            </div>
            {/* <h1 className="text-center font-semibold text-md mt-10">
              <span class="text-slate-300">Already Have Account? </span>
               <a class="text-slate-200" href="">LOGIN</a>
            </h1> */}
            <div className="md:flex md:items-start md:-mx-4 mt-10">
              <div className="mt-4 md:mx-4 md:mt-0">
                <h1 className="text-lg text-slate-300 font-semibold  capitalize">
                  Register now and get up to 100 USDT in rewards
                </h1>
              </div>
              <img
                className="w-9 h-9"
                src="https://image.winudf.com/v2/image1/Y29tLmdhbW1hLnNjYW5faWNvbl8xNTc5MjAwODA1XzA2NA/icon.png?w=184&fakeurl=1"
                alt=""
              />
            </div>
          </div>
          <div>
            <div className=" w-full  flex flex-col justify-center items-center p-4">
              <div className=" text-white w-full max-w-md flex flex-col rounded-xl shadow-lg p-4">
                <div className="flex items-center justify-center gap-12">
                  <div className="flex items-center space-x-4">
                    <div className="flex items-center gap-4">
                      <img
                        className="w-6 h-6 rounded-full"
                        src="https://c8.alamy.com/comp/KEXYBX/bitcoin-gold-sign-icon-for-internet-money-KEXYBX.jpg"
                      />
                      <div className="text-xl font-semibold">
                        BTC{" "}
                        <span className="font-normal text-md">( BitCoin )</span>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-6">
                    <div className="cursor-pointer">
                      <div className="text-md font-bold">$ 3764.78.2</div>
                    </div>
                    <div className="text-gray-500 hover:text-gray-300 cursor-pointer">
                      <div className="text-md font-bold text-red-700">
                        - 1.89
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className=" w-full  flex flex-col justify-center items-center p-4">
              <div className=" text-white w-full max-w-md flex flex-col rounded-xl shadow-lg p-4">
                <div className="flex items-center justify-center gap-12">
                  <div className="flex items-center space-x-4">
                    <div className="flex items-center gap-4">
                      <img
                        className="w-7 h-7 rounded-full"
                        src="https://cdn.worldvectorlogo.com/logos/tradecoin-logo-1.svg"
                      />
                      <div className="text-xl font-semibold">
                        ETE{" "}
                        <span className="font-normal text-md">Trade Coin</span>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-6">
                    <div className="cursor-pointer">
                      <div className="text-md font-bold">$ 3764.78.2</div>
                    </div>
                    <div className="text-gray-500 hover:text-gray-300 cursor-pointer">
                      <div className="text-md font-bold text-red-700">
                        - 1.89
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className=" w-full  flex flex-col justify-center items-center p-4">
              <div className=" text-white w-full max-w-md flex flex-col rounded-xl shadow-lg p-4">
                <div className="flex items-center justify-center gap-12">
                  <div className="flex items-center space-x-4">
                    <div className="flex items-center gap-4">
                      <img
                        className="w-7 h-7 rounded-full"
                        src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/46/Bitcoin.svg/1200px-Bitcoin.svg.png"
                      />
                      <div className="text-xl font-semibold">
                        BNB{" "}
                        <span className="font-normal text-md">BNB Trade</span>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-6">
                    <div className="cursor-pointer">
                      <div className="text-md font-bold">$ 3764.78.2</div>
                    </div>
                    <div className="text-gray-500 hover:text-gray-300 cursor-pointer">
                      <div className="text-md font-bold text-red-700">
                        - 1.89
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className=" w-full  flex flex-col justify-center items-center p-4">
              <div className=" text-white w-full max-w-md flex flex-col rounded-xl shadow-lg p-4">
                <div className="flex items-center justify-center gap-12">
                  <div className="flex items-center space-x-4">
                    <div className="flex items-center gap-4">
                      <img
                        className="w-7 h-7 rounded-full"
                        src="https://media.istockphoto.com/id/1063742554/vector/brazil-real-brl-money-trade-arrow-coin-vector-illustration-image.jpg?s=612x612&w=is&k=20&c=xxtXcY6AesEW_eJNxU6NTldnv02Zme2o5Rhu7s3dPUk="
                      />
                      <div className="text-xl font-semibold">
                        XRP{" "}
                        <span className="font-normal text-md">Ripple Eur</span>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-6">
                    <div className="cursor-pointer">
                      <div className="text-md font-bold">$ 3764.78.2</div>
                    </div>
                    <div className="text-gray-500 hover:text-gray-300 cursor-pointer">
                      <div className="text-md font-bold text-red-700">
                        - 1.89
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <a href="#">
              <h1 className="text-md font-normal px-24">View All 350 Item</h1>
            </a>

            <div className="mt-20">
              <a href="#">
                <div className=" w-full  flex flex-col justify-center items-center">
                  <div className=" text-white w-full max-w-md flex flex-col rounded-xl shadow-lg">
                    <div className="text-lg font-bold text-slate-200">
                      Alchemy Pay to support fiat purchases of Sei SEI token{" "}
                      <span className="font-normal text-sm px-2">
                        20 Minutes Ago
                      </span>
                    </div>
                  </div>
                </div>
              </a>
              <a href="#">
                <div className=" w-full  flex flex-col justify-center items-center mt-5">
                  <div className=" text-white w-full max-w-md flex flex-col rounded-xl shadow-lg">
                    <div className="text-lg text-slate-200 font-bold">
                      Digital asset investment products see sixth consecutive
                      week of net outflows{" "}
                      <span className="font-normal text-sm px-2">
                        an hour ago
                      </span>
                    </div>
                  </div>
                </div>
              </a>
              <a href="#">
                <div className=" w-full  flex flex-col justify-center items-center mt-5">
                  <div className=" text-white w-full max-w-md flex flex-col rounded-xl shadow-lg">
                    <div className="text-lg text-slate-200 font-bold">
                      Terra Classic Protocol to Stop Minting Infamous TerraUSD
                      Token
                      <span className="font-normal text-sm px-2">
                        an hour ago
                      </span>
                    </div>
                  </div>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;

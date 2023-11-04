import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const Nav = () => {
  const [user, setUser] = useState(null);
  const token = localStorage.getItem("token");

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const response = await axios.get(
          "https://wizardstockexchange.onrender.com/account/profile/",
          {
            headers: {
              Authorization: `Token ${localStorage.getItem("token")}`,
            },
          }
        );
        setUser(response.data);
      } catch (error) {
        console.error("Error fetching user profile:", error);
      }
    };

    if (token) {
      fetchProfile();
    }
  }, [token]);

  const handleLogout = () => {
    localStorage.removeItem("token");
    window.location.href = "/";
  };

  return (
    <div>
      {/* <div className="navbar bg-gray-800">
        <div className="navbar-start fixed">
          <div className="dropdown">
          
          </div>
          <Link to="/">
            <img
              className="w-80 h-20"
              src="https://i.postimg.cc/L5ZVG1v3/Screenshot-2023-09-24-015211.png"
              alt=""
            />
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="text-slate-400 menu menu-horizontal px-1">
            <li>
              <Link className="hover:text-slate-400" to="/">Home</Link>
            </li>
            <li>
              <Link className="hover:text-slate-400" to="documentation">Documentation</Link>
            </li>
            <li>
              <Link to="help-center">Help center</Link>
            </li>
            {user || token ? (
              <>
                <li>
                  <Link className="hover:text-slate-400" to="/dashboard">Buy Crypto</Link>
                </li>
                <li>
                <Link className="hover:text-slate-400" to="/dashboard/wallet">Wallet</Link>
                </li>
                
              </>
            ) : null}
          </ul>
        </div>
       <div className="navbar-end">
        {user || token ? (
          
            <>
              <Link to="/profile">
              <button
              
              type="button"
              className="px-3 py-2 text-sm font-medium text-center inline-flex items-center text-white bg-yellow-700 rounded-lg hover:bg-yellow-800 focus:ring-4 focus:outline-none focus:ring-blue-300 mr-6"
            >
              Profile
            </button>
              </Link>
              <button
              type="button"
              className="px-3 py-2 text-sm font-medium text-center inline-flex items-center text-white bg-yellow-700 rounded-lg hover:bg-yellow-800 focus:ring-4 focus:outline-none focus:ring-blue-300"
              onClick={handleLogout}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                className="bi bi-box-arrow-in-right w-6 h-5 text-white mr-2"
                viewBox="0 0 16 16"
              >
                {" "}
                <path d="M6 3.5a.5.5 0 0 1 .5-.5h8a.5.5 0 0 1 .5.5v9a.5.5 0 0 1-.5.5h-8a.5.5 0 0 1-.5-.5v-2a.5.5 0 0 0-1 0v2A1.5 1.5 0 0 0 6.5 14h8a1.5 1.5 0 0 0 1.5-1.5v-9A1.5 1.5 0 0 0 14.5 2h-8A1.5 1.5 0 0 0 5 3.5v2a.5.5 0 0 0 1 0v-2z" />{" "}
                <path d="M11.854 8.354a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H1.5a.5.5 0 0 0 0 1h8.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3z" />{" "}
              </svg>
              Logout
            </button>
            </>
          ) : (
          <div className="flex justify-center items-center gap-5 px-10">
            <Link to="login">
              <button
              type="button"
              className="px-3 py-2 text-sm font-medium text-center inline-flex items-center text-white bg-yellow-700 rounded-lg hover:bg-yellow-800 focus:ring-4 focus:outline-none focus:ring-blue-300"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                className="bi bi-box-arrow-in-right w-6 h-5 text-white mr-2"
                viewBox="0 0 16 16"
              >
                {" "}
                <path d="M6 3.5a.5.5 0 0 1 .5-.5h8a.5.5 0 0 1 .5.5v9a.5.5 0 0 1-.5.5h-8a.5.5 0 0 1-.5-.5v-2a.5.5 0 0 0-1 0v2A1.5 1.5 0 0 0 6.5 14h8a1.5 1.5 0 0 0 1.5-1.5v-9A1.5 1.5 0 0 0 14.5 2h-8A1.5 1.5 0 0 0 5 3.5v2a.5.5 0 0 0 1 0v-2z" />{" "}
                <path d="M11.854 8.354a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H1.5a.5.5 0 0 0 0 1h8.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3z" />{" "}
              </svg>
              Login
            </button></Link>
            <Link to="register">
            <button
              type="button"
              className="px-3 py-2 text-sm font-medium text-center inline-flex items-center text-white bg-sky-800 rounded-lg hover:bg-sky-900 focus:ring-4 focus:outline-none focus:ring-blue-300"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-forward-fill w-6 h-5 text-white mr-2"
                viewBox="0 0 16 16"
              >
                {" "}
                <path d="m9.77 12.11 4.012-2.953a.647.647 0 0 0 0-1.114L9.771 5.09a.644.644 0 0 0-.971.557V6.65H2v3.9h6.8v1.003c0 .505.545.808.97.557z" />{" "}
              </svg>
              Register
            </button>
            </Link>
            
          </div>
          )}
        </div>
      </div> */}
      <div className="fixed top-0">
      <div className="navbar bg-base-100">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu nav menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <Link className="hover:text-slate-400" to="/">
                  Home
                </Link>
              </li>
              <li>
                <Link className="hover:text-slate-400" to="documentation">
                  Documentation
                </Link>
              </li>
              <li>
                <Link to="help-center">Help center</Link>
              </li>
              {user || token ? (
                <>
                  <li>
                    <Link className="hover:text-slate-400" to="/dashboard">
                      Buy Crypto
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="hover:text-slate-400"
                      to="/dashboard/wallet"
                    >
                      Wallet
                    </Link>
                  </li>
                </>
              ) : null}
              {user || token ? (
                <button onClick={handleLogout}>
                  <li>
                    <a>Logout</a>
                  </li>
                </button>
              ) : (
                <li>
                  <Link className="hover:text-slate-400" to="login">
                    Login
                  </Link>
                  <Link className="hover:text-slate-400" to="register">
                    SignUp
                  </Link>
                </li>
              )}
            </ul>
          </div>
          <div className="flex">
          <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="bi bi-graph-up-arrow w-8 h-7 mt-3" viewBox="0 0 16 16" id="IconChangeColor"> <path fill-rule="evenodd" d="M0 0h1v15h15v1H0V0Zm10 3.5a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 .5.5v4a.5.5 0 0 1-1 0V4.9l-3.613 4.417a.5.5 0 0 1-.74.037L7.06 6.767l-3.656 5.027a.5.5 0 0 1-.808-.588l4-5.5a.5.5 0 0 1 .758-.06l2.609 2.61L13.445 4H10.5a.5.5 0 0 1-.5-.5Z" id="mainIconPathAttribute" fill="orange"></path> </svg>
          <a className="btn btn-ghost normal-case text-xl text-yellow-600 font-black">
            Wizard Stock Exchange
          </a>
         
          </div>
          
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu ml-40 menu-horizontal px-1">
            <li>
              <Link className="hover:text-slate-400" to="/">
                Home
              </Link>
            </li>
            <li>
              <Link className="hover:text-slate-400" to="documentation">
                Documentation
              </Link>
            </li>
            <li>
              <Link to="help-center">Help center</Link>
            </li>
            {user || token ? (
              <>
                <li>
                  <Link className="hover:text-slate-400" to="/dashboard">
                    Buy Crypto
                  </Link>
                </li>
                <li>
                  <Link className="hover:text-slate-400" to="/dashboard/wallet">
                    Wallet
                  </Link>
                </li>
              </>
            ) : null}
          </ul>
        </div>
        <div className="dropdown dropdown-end mx-60">
          {user || token ? (
            <>
              <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                <div className="w-10 rounded-full">
                  <img src="https://static-00.iconduck.com/assets.00/user-icon-2048x2048-ihoxz4vq.png" />
                </div>
              </label>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
              >
                <Link to="profile"> <li>
                  <a className="justify-between">Profile</a>
                </li></Link>
               
                <li>
                  <a>Dashboard</a>
                </li>
                <button onClick={handleLogout}>
                  <li>
                    <a>Logout</a>
                  </li>
                </button>
              </ul>
            </>
          ) : (
            <div className="flex justify-center items-center gap-5 px-10">
              <Link to="login">
                <button
                  type="button"
                  className="px-3 py-2 text-sm font-medium text-center inline-flex items-center text-white bg-yellow-700 rounded-lg hover:bg-yellow-800 focus:ring-4 focus:outline-none focus:ring-blue-300"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    className="bi bi-box-arrow-in-right w-6 h-5 text-white mr-2"
                    viewBox="0 0 16 16"
                  >
                    {" "}
                    <path d="M6 3.5a.5.5 0 0 1 .5-.5h8a.5.5 0 0 1 .5.5v9a.5.5 0 0 1-.5.5h-8a.5.5 0 0 1-.5-.5v-2a.5.5 0 0 0-1 0v2A1.5 1.5 0 0 0 6.5 14h8a1.5 1.5 0 0 0 1.5-1.5v-9A1.5 1.5 0 0 0 14.5 2h-8A1.5 1.5 0 0 0 5 3.5v2a.5.5 0 0 0 1 0v-2z" />{" "}
                    <path d="M11.854 8.354a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H1.5a.5.5 0 0 0 0 1h8.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3z" />{" "}
                  </svg>
                  Login
                </button>
              </Link>
              <Link to="register">
                <button
                  type="button"
                  className="px-3 py-2 text-sm font-medium text-center inline-flex items-center text-white bg-sky-800 rounded-lg hover:bg-sky-900 focus:ring-4 focus:outline-none focus:ring-blue-300"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    className="bi bi-forward-fill w-6 h-5 text-white mr-2"
                    viewBox="0 0 16 16"
                  >
                    {" "}
                    <path d="m9.77 12.11 4.012-2.953a.647.647 0 0 0 0-1.114L9.771 5.09a.644.644 0 0 0-.971.557V6.65H2v3.9h6.8v1.003c0 .505.545.808.97.557z" />{" "}
                  </svg>
                  Register
                </button>
              </Link>
            </div>
          )}
        </div>
      </div>
      </div>
      
    </div>
  );
};

export default Nav;

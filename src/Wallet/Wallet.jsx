/* eslint-disable no-unused-vars */
import axios from "axios";
import { useEffect, useState } from "react";
import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from "../../Payment/CheckoutForm";
import { loadStripe } from "@stripe/stripe-js";
import Swal from 'sweetalert2'

const Wallet = () => {
  const [user, setUser] = useState(null);
  const token = localStorage.getItem("token");
  const [userShares, setUserShares] = useState([]);
  const [wallet, setWallet] = useState([]);
  const [userWalletId, setUserWalletId] = useState(0);
  const [inputBalanceWithdraw, setInputBalanceWithdraw] = useState("");
  const [inputBalance, setInputBalance] = useState("");
  const stripePromise = loadStripe(
    "pk_test_51O1C3WIXrs8l40b4FeFgjHmMpDjLoVo4IzgphFZhkZJCR6pjRKXdUf78VzXPpTPVEfEwSG7VoAKGxN4Z6pKmOvMl000km5hTLd"
  );

  const handleChangeInput = (e) => {
    setInputBalance(e.target.value);
  };
  //this is add balance
  const handleSubmit = async (e) => {
    e.preventDefault();

    const requestBody = {
      amount: inputBalance,
    };

    try {
      const response = await fetch(
        `https://wizardstockexchange.onrender.com/trade/add-balance/${userWalletId}/`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            // Add any other headers as needed
          },
          body: JSON.stringify(requestBody),
        }
      );

      if (response.ok) {
        Swal.fire({
          position: 'top-center',
          icon: 'success',
          title: 'Deposit Done',
          showConfirmButton: false,
          timer: 1000
        })
        const reloadInterval = setInterval(() => {
          window.location.reload();
        }, 1000);
    
        // Cleanup the interval when the component unmounts
        return () => {
          clearInterval(reloadInterval);
        };
       
       
      } else {
        console.error("Request failed with status:", response.status);
        console.error("Response text:", await response.text());
      }
    } catch (error) {
      console.error("An error occurred:", error);
    }
  };

  const handleChangeInputWithdraw = (e) => {
    setInputBalanceWithdraw(e.target.value);
  };
  //this is withdrew balance 
  const handleSubmitWithdraw = async (e) => {
    
    e.preventDefault();

    const requestBody = {
      amount: inputBalanceWithdraw,
    };

    try {
      const response = await fetch(
        `https://wizardstockexchange.onrender.com/trade/withdraw-balance/${userWalletId}/`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            // Add any other headers as needed
          },
          body: JSON.stringify(requestBody),
        }
      );

      if (response.ok) {
        Swal.fire({
          position: 'top-center',
          icon: 'success',
          title: 'Successfully withdrawn',
          showConfirmButton: false,
          timer: 2000
        })
        const reloadInterval = setInterval(() => {
          window.location.reload();
        }, 1000);
    
        // Cleanup the interval when the component unmounts
        return () => {
          clearInterval(reloadInterval);
        };
        
        
        // window.location.href = "/dashboard/wallet";
      } else {
        console.error("Request failed with status:", response.status);
        console.error("Response text:", await response.text());
      }
    } catch (error) {
      console.error("An error occurred:", error);
    }
  };

  //axios buy shares in trade
  useEffect(() => {
    const url = "https://wizardstockexchange.onrender.com/trade/buy-shares/";

    axios
      .get(url)
      .then((response) => {
        setUserShares(response.data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }, []);

  useEffect(() => {}, [userShares]);

  //axios wallets in trade
  useEffect(() => {
    const url = "https://wizardstockexchange.onrender.com/trade/user-wallets/";

    axios
      .get(url)
      .then((response) => {
        setWallet(response.data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
      
    // console.log(wallet)
  }, [wallet]);

  //axios user profile in trade
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
  }, []);

  //Specific user set id in setUserWalletId
  useEffect(() => {
    if (user) {
      const filtered = wallet.filter((wall) => wall.user_email === user.email);
      if (filtered.length > 0) {
        const id = filtered[0].user;
        setUserWalletId(id);
        console.log(filtered[0].user); // Update state with the filtered data
      }
    }
  }, [user, wallet]);

  return (
    <div>
      <main className="relative z-0 flex-1 pb-8 px-6 bg-dark mt-20">
        <div className="grid pb-10  mt-4 ">
          {wallet.map((wall) => {
            if (user && wall.user_email === user.email) {
              // console.log(wall.user)
              return (
                <div
                  key={wall.id}
                  className="grid grid-cols-1 mt-10 gap-10 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2"
                >
                  <div
                    className="relative w-full h-52 bg-cover bg-center group rounded-lg overflow-hidden shadow-lg transition duration-300 ease-in-out"
                    style={{
                      backgroundImage:
                        "url('https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/f868ecef-4b4a-4ddf-8239-83b2568b3a6b/de7hhu3-3eae646a-9b2e-4e42-84a4-532bff43f397.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg8OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcL2Y4NjhlY2VmLTRiNGEtNGRkZi04MjM5LTgzYjI1NjhiM2E2YlwvZGU3aGh1My0zZWFlNjQ2YS05YjJlLTRlNDItODRhNC01MzJiZmY0M2YzOTcuanBnIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.R0h-BS0osJSrsb1iws4-KE43bUXHMFvu5PvNfoaoi8o')",
                    }}
                  >
                    <div className="absolute inset-0 bg-pink-900 bg-opacity-75 transition duration-300 ease-in-out"></div>
                    <div className="relative w-full h-full px-4 sm:px-6 lg:px-4 flex items-center justify-center text-slate-200">
                      <div>
                        <h3 className="text-4xl font-black">Wallet Id : {wall.user}</h3>
                      </div>
                    </div>
                  </div>
                  <div
                    className="relative w-full h-52 bg-cover bg-center group rounded-lg overflow-hidden shadow-lg transition duration-300 ease-in-out"
                    style={{
                      backgroundImage:
                        "url('https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/f868ecef-4b4a-4ddf-8239-83b2568b3a6b/de7hhu3-3eae646a-9b2e-4e42-84a4-532bff43f397.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg8OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcL2Y4NjhlY2VmLTRiNGEtNGRkZi04MjM5LTgzYjI1NjhiM2E2YlwvZGU3aGh1My0zZWFlNjQ2YS05YjJlLTRlNDItODRhNC01MzJiZmY0M2YzOTcuanBnIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.R0h-BS0osJSrsb1iws4-KE43bUXHMFvu5PvNfoaoi8o')",
                    }}
                  >
                    <div className="absolute inset-0 bg-pink-900 bg-opacity-75 transition duration-300 ease-in-out"></div>
                    <div className="relative w-full h-full px-4 sm:px-6 lg:px-4 flex items-center justify-center text-slate-200">
                      <div>
                        <h3 className="text-center text-slate-200 text-2xl font-black">
                          Total Balance
                        </h3>
                        <div>
                          <h3 className="text-center text-slate-200 text-3xl mt-2 font-black">
                            {wall.balance}
                          </h3>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    className="relative w-full h-52 bg-cover bg-center group rounded-lg overflow-hidden shadow-lg transition duration-300 ease-in-out"
                    style={{
                      backgroundImage:
                        "url('https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/f868ecef-4b4a-4ddf-8239-83b2568b3a6b/de7hhu3-3eae646a-9b2e-4e42-84a4-532bff43f397.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcL2Y4NjhlY2VmLTRiNGEtNGRkZi04MjM5LTgzYjI1NjhiM2E2YlwvZGU3aGh1My0zZWFlNjQ2YS05YjJlLTRlNDItODRhNC01MzJiZmY0M2YzOTcuanBnIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.R0h-BS0osJSrsb1iws4-KE43bUXHMFvu5PvNfoaoi8o')",
                    }}
                  >
                    <div className="absolute inset-0 bg-yellow-700  transition duration-300 ease-in-out">
                      <div>
                        <Elements stripe={stripePromise}>
                          <CheckoutForm></CheckoutForm>
                        </Elements>
                      </div>

                      <input
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-60 mx-auto p-2.5"
                        type="text"
                        value={inputBalanceWithdraw}
                        onChange={handleChangeInputWithdraw}
                      />
                      <div key={wall.id} className="text-center mt-5">
                        <form onSubmit={handleSubmitWithdraw}>
                          <button type="submit">
                            <div className="text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">
                              Withdraw Balance
                            </div>
                          </button>
                        </form>
                      </div>
                    </div>
                  </div>
                  <div
                    className="relative w-full h-52 bg-cover bg-center group rounded-lg overflow-hidden shadow-lg transition duration-300 ease-in-out"
                    style={{
                      backgroundImage:
                        "url('https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/f868ecef-4b4a-4ddf-8239-83b2568b3a6b/de7hhu3-3eae646a-9b2e-4e42-84a4-532bff43f397.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcL2Y4NjhlY2VmLTRiNGEtNGRkZi04MjM5LTgzYjI1NjhiM2E2YlwvZGU3aGh1My0zZWFlNjQ2YS05YjJlLTRlNDItODRhNC01MzJiZmY0M2YzOTcuanBnIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.R0h-BS0osJSrsb1iws4-KE43bUXHMFvu5PvNfoaoi8o')",
                    }}
                  >
                    <div className="absolute inset-0 bg-yellow-700  transition duration-300 ease-in-out">
                      <div>
                        <Elements stripe={stripePromise}>
                          <CheckoutForm></CheckoutForm>
                        </Elements>
                      </div>

                      <input
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-60 mx-auto p-2.5 "
                        type="text"
                        value={inputBalance}
                        onChange={handleChangeInput}
                      />
                      <div key={wall.id} className="text-center mt-5">
                        <form onSubmit={handleSubmit}>
                          <button type="submit">
                            <div className="text-white bg-gradient-to-br from-green-400 to-blue-600 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">
                              Deposit Balance
                            </div>
                          </button>
                        </form>
                      </div>
                    </div>
                  </div>
                </div>
              );
            }
          })}
        </div>
      </main>
      <div>
        <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
          <table className="w-full text-sm text-center bg-slate-700">
            <thead className="text-xs text-slate-200 uppercase bg-slate-700">
              <tr>
                <th scope="col" className="px-6 py-3 text-md font-bold">
                  Stock Name
                </th>
                <th scope="col" className="px-6 py-3 text-md font-bold">
                  Quantity
                </th>
                <th scope="col" className="px-6 py-3 text-md font-bold">
                  Buying Price
                </th>
              </tr>
            </thead>
            <tbody>
              {userShares.map((wallet) => {
                if (user && wallet.user_email === user.email) {
                  console.log(wallet.id);
                  console.log(wallet.user);
                  return (
                    <tr
                      className="bg-slate-700 border-b hover:bg-slate-500"
                      key={wallet.id}
                    >
                      <td className="px-6 py-4 font-bold text-md text-slate-200 ">
                        {wallet.stock_name}
                      </td>
                      <td className="px-6 py-4 font-semibold text-md text-slate-200 ">
                        {wallet.quantity}
                      </td>
                      <td className="px-6 py-4 font-semibold text-md text-slate-200 ">
                        {wallet.price}
                      </td>
                    </tr>
                  );
                }
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Wallet;

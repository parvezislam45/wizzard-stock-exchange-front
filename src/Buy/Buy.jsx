import { useEffect, useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";

const Buy = (props) => {
  // console.log(props)
  const [priceValue, setPriceValue] = useState(props.closeData);
  const [symbolValue, setSymbolValue] = useState(props.symbol);
  const [Wallet, setWallet] = useState(props.user_wallet);
  const [user, setUser] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const token = localStorage.getItem("token");

  useEffect(() => {
    setPriceValue(props.closeData);
    setSymbolValue(props.symbol);
    setWallet(props.user_wallet)

    const fetchUserProfile = async () => {
      if (token) {
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
      }
    };

    fetchUserProfile();
  }, [props.closeData, props.symbol]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const requestBody = {
      stock_name: symbolValue,
      stock_symbol: symbolValue,
      user_wallet: Wallet,
      price: priceValue,
      quantity: quantity,
    };

    try {
      const response = await fetch("https://wizardstockexchange.onrender.com/trade/buy-shares/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(requestBody),
      });

      if (response.ok) {
        console.log("Request was successful");
        toast("Buy This Share Successfully");
        window.location.href = '/dashboard/wallet';
      } else {
        console.error("Request failed with status:", response.status);
        console.error("Response text:", await response.text());
      }
    } catch (error) {
      console.error("An error occurred:", error);
    }
  };

  return (
    <div>
      <dialog id="my_modal_3" className="modal">
        <div className="modal-box">
          <form method="dialog">
            {/* if there is a button in form, it will close the modal */}
            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
              ✕
            </button>
          </form>
         <form onSubmit={handleSubmit}>
         <div className="mt-6">
                    <div className="font-semibold">
                      How much would you like to Buy?
                    </div>
                    <div>
                      <input
                        className="mt-3 w-full rounded-[4px] border border-[#A0ABBB] p-2"
                        type="text"
                        placeholder="Stock name"
                        value={symbolValue}
                        readOnly
                      />
                    </div>
                    <div>
                      <input
                        className="mt-3 w-full rounded-[4px] border border-[#A0ABBB] p-2"
                        type="text"
                        placeholder="Stock Symbol"
                        value={symbolValue}
                        readOnly
                      />
                      <input
                        className="mt-3 w-full rounded-[4px] border border-[#A0ABBB] p-2"
                        type="text"
                        placeholder="Wallet"
                        value = {Wallet}
                        readOnly
                        // onChange={(e) => setWallet(e.target.value)}
                      />
                      <input
                        className="mt-3 w-full rounded-[4px] border border-[#A0ABBB] p-2"
                        type="number"
                        placeholder="Price"
                        value={priceValue}
                        readOnly
                      />
                      <input
                        className="mt-3 w-full rounded-[4px] border border-[#A0ABBB] p-2"
                        type="number"
                        placeholder="Quantity"
                        name="quantity"
                        min="1"
                        onChange={(e) => setQuantity(e.target.value)}
                      />
                    </div>
                  </div>
                  <div className="mt-6">
                  <button
                className="btn text-white bg-orange-800 hover:bg-purple-950 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center inline-flex items-center mr-2 dark:bg-orange-800 dark:hover:bg-purple-950 dark:focus:ring-blue-800"
               
              >
                <svg
                  className="w-5 h-5 mr-2"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 18 21"
                >
                  <path d="M15 12a1 1 0 0 0 .962-.726l2-7A1 1 0 0 0 17 3H3.77L3.175.745A1 1 0 0 0 2.208 0H1a1 1 0 0 0 0 2h.438l.6 2.255v.019l2 7 .746 2.986A3 3 0 1 0 9 17a2.966 2.966 0 0 0-.184-1h2.368c-.118.32-.18.659-.184 1a3 3 0 1 0 3-3H6.78l-.5-2H15Z" />
                </svg>
                Buy
              </button>
                  </div>
         </form>
        </div>
      </dialog>
    </div>
  );
};

export default Buy;

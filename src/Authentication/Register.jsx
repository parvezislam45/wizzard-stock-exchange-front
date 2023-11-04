import  { useState } from 'react';
import axios from 'axios';

function Registration() {
  const [formData, setFormData] = useState({
    email: '',
    username: '',
    password: '',  // Make sure this is 'password'
    full_name: '',
    phone_number: '',
    address: '',
    city: '',
    country: '',
    date_of_birth: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('https://wizardstockexchange.onrender.com/account/register/', formData);
      const token = response.data.token;
      console.log(token)
      localStorage.setItem("token", token);
      console.log('Registration successful:', response.data);
      // Redirect to dashboard after successful registration
      window.location.href = '/login';
    } catch (error) {
      console.error('Registration failed:', error);
    }
  };

  return (
    <div>
    <section className="bg-gray-900">
      <div className="flex justify-center min-h-screen">
        <div className="flex items-center w-full max-w-3xl p-8 mx-auto lg:px-12 lg:w-3/5">
          <div className="w-full">
            <h1 className="text-2xl font-semibold tracking-wider capitalize text-white">
              Get your free account now.
            </h1>

            <p className="mt-4 text-slate-400">
              Let’s get you all set up so you can verify your personal account
              and begin setting up your profile.
            </p>

            <div className="mt-6">
              <h1 className="text-slate-500">
                Select type of account
              </h1>

              <div className="mt-3 md:flex md:items-center md:-mx-2">
                <button className="flex justify-center w-full px-6 py-3 text-white bg-blue-500 rounded-md md:w-auto md:mx-2 focus:outline-none">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>

                  <span className="mx-2">Company</span>
                </button>

                <button className="flex justify-center w-full px-6 py-3 mt-4 text-blue-500 border border-blue-500 rounded-md md:mt-0 md:w-auto md:mx-2 dark:border-blue-400 dark:text-blue-400 focus:outline-none">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>

                  <span className="mx-2">User</span>
                </button>
              </div>
            </div>

            <form onSubmit={handleSubmit}>
              <div className="mt-8">
                <label className="block mb-2 text-sm text-slate-300">
                  User Name
                </label>
                <input
                  type="text"
                  name="username"
                  value={formData.username}
                  onChange={handleChange}
                  required
                  className="block w-80 px-5 py-3 mt-2 border rounded-md placeholder-gray-600 bg-gray-900 text-slate-300 border-gray-700 focus:border-blue-400 focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                />
              </div>
              <div className="grid grid-cols-1 gap-6 mt-8 md:grid-cols-2">
              <div>
                  <label className="block mb-2 text-sm text-slate-300">
                    Email address
                  </label>
                  <input
                     type="email"
                     name="email"
                     value={formData.email}
                     onChange={handleChange}
                     required
                    className="block w-full px-5 py-3 mt-2 text-slate-300 border rounded-md placeholder-gray-600 bg-gray-900 border-gray-700 focus:border-blue-400 focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                  />
                </div>
                
                

                <div>
                  <label className="block mb-2 text-sm text-slate-300">
                    Password
                  </label>
                  <input
                    type="password"
                    name="password"  // Make sure this is 'password1'
                    value={formData.password}
                    onChange={handleChange}
                    required
                    className="block w-full px-5 py-3 mt-2 text-slate-300 border rounded-md placeholder-gray-600 bg-gray-900 border-gray-700 focus:border-blue-400 focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                  />
                </div>
                <div>
                  <label className="block mb-2 text-sm text-slate-300">
                    Phone Number
                  </label>
                  <input
                   type="text"
                   name="phone_number"
                   value={formData.phone_number}
                   onChange={handleChange}
                    className="block w-full px-5 py-3 mt-2 text-slate-300 border rounded-md placeholder-gray-600 bg-gray-900 border-gray-700 focus:border-blue-400 focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                  />
                </div>

                <div>
                  <label className="block mb-2 text-sm text-slate-300">
                    Address
                  </label>
                  <input
                   type="text"
                   name="address"
                   value={formData.address}
                   onChange={handleChange}
                    className="block w-full px-5 py-3 mt-2 text-slate-300 border border-gray-200 rounded-md placeholder-gray-600 bg-gray-900 border-gray-700 focus:border-blue-400 focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                  />
                </div>
                {/* <div>
                  <fieldset className="relative z-0 w-full p-px mb-5">
                    <legend className="absolute  text-white transform scale-75 -top-3 origin-0">
                      <h1 className="text-2xl font-semibold"> Select Your Gender</h1>
                     
                    </legend>
                    <div className="block pt-3 pb-2 space-x-4 mt-5">
                      <label>
                        <input
                          type="radio"
                          name="radio"
                          value="1"
                          className="mr-2 text-black border-2 border-gray-300 focus:border-gray-300 focus:ring-black"
                        />
                        Male
                      </label>
                      <label>
                        <input
                          type="radio"
                          name="radio"
                          value="2"
                          className="mr-2 text-black border-2 border-gray-300 focus:border-gray-300 focus:ring-black"
                        />
                        Female
                      </label>
                    </div>
                    <span className="text-sm text-red-600 hidden" id="error">
                      Option has to be selected
                    </span>
                  </fieldset>
                </div> */}

                <div>
                  <label className="block mb-2 text-sm text-slate-300">
                    City
                  </label>
                  <input
                    type="text"
                    name="city"
                    value={formData.city}
                    onChange={handleChange}
                    className="block w-full px-5 py-3 mt-2 text-slate-300 border rounded-md placeholder-gray-600 bg-gray-900 border-gray-700 focus:border-blue-400 focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                  />
                </div>
                <div>
                  <label className="block mb-2 text-sm text-slate-300">
                    Country
                  </label>
                  <input
                    type="text"
                    name="country"
                    value={formData.country}
                    onChange={handleChange}
                    className="block w-full px-5 py-3 mt-2 text-slate-300 border rounded-md placeholder-gray-600 bg-gray-900 border-gray-700 focus:border-blue-400 focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                  />
                </div>
                <div>
                  <label className="block mb-2 text-sm text-slate-300">
                    Date Of Birth
                  </label>
                  <input
                     type="date"
                     name="date_of_birth"
                     value={formData.date_of_birth}
                     onChange={handleChange}
                    className="block w-full px-5 py-3 mt-2 text-slate-300 border rounded-md placeholder-gray-600 bg-gray-900 border-gray-700 focus:border-blue-400 focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                  />
                </div>

                <div>
                  <label className="block mb-2 text-sm text-slate-300">
                    Full Name
                  </label>
                  <input
                   type="text"
                   name="full_name"
                   value={formData.full_name}
                   onChange={handleChange}
                    className="block w-full px-5 py-3 mt-2 text-slate-300 border rounded-md placeholder-gray-600 bg-gray-900 border-gray-700 focus:border-blue-400 focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                  />
                </div>
                <button type="submit" className="flex items-center justify-between w-full px-6 py-3 text-sm tracking-wide text-white capitalize transition-colors duration-300 transform bg-pink-600 rounded-md hover:bg-yellow-700 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-50">
                  <span>Sign Up </span>

                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-5 h-5 rtl:-scale-x-100"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" />
                  </svg>
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  </div>
  );
}

export default Registration;
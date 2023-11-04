import React from 'react';

const Documentation = () => {
    return (
        <div>
            <div className='flex'>
                <aside className='w-1/6 '>
                    <ul className='fixed mt-10 px-10'>
                        <li className='text-base text-slate-100 font-normal rounded-lg flex items-center p-2 hover:bg-fuchsia-600 group'><a href="#introduction">Introduction</a></li>
                        <li className='text-base text-slate-100 font-normal rounded-lg flex items-center p-2 hover:bg-fuchsia-600 group'><a href="#project-overview">Project Overview</a></li>
                        <li className='text-base text-slate-100 font-normal rounded-lg flex items-center p-2 hover:bg-fuchsia-600 group'><a href="#user-authentication">User Authentication</a></li>
                        <li className='text-base text-slate-100 font-normal rounded-lg flex items-center p-2 hover:bg-fuchsia-600 group'><a href="#user-registration">User Registration</a></li>
                        <li className='text-base text-slate-100 font-normal rounded-lg flex items-center p-2 hover:bg-fuchsia-600 group'><a href="#data-security"></a>Data Security</li>
                        <li className='text-base text-slate-100 font-normal rounded-lg flex items-center p-2 hover:bg-fuchsia-600 group'><a href="#conclusion">Conclusion</a></li>
                    </ul>
                </aside>
                
                <div className='w-4/5'>
                    <h1 className="text-center text-3xl font-extrabold text-slate-200 my-5"> Wizard Stock Exchange Project Documentation</h1>

                    <div id='introduction' className='mb-10'>
                       <h3 className="w-3/5 text-xl font-bold text-slate-300 mb-2">Introduction</h3>
                       <p className="text-slate-400">Welcome to the Wizard Stock Exchange Project documentation. This document provides an overview of the key features and functionality of the project, including user authentication, registration, and data security.</p>
                    </div>

                    <div id='project-overview' className='mb-10'>
                       <h3 className="w-3/5 text-xl font-bold text-slate-300 mb-2">Project Overview</h3>
                       <p className="text-slate-400">The Wizard Stock Exchange Project is a web-based application designed to provide users with the ability to trade stocks and manage their investment portfolios. The project's main features include user authentication, registration, and data security.</p>
                    </div>

                    <div id='user-authentication' className='mb-10'>
                       <h3 className="w-3/5 text-xl font-bold text-slate-200 mb-2">User Authentication</h3>
                       
                       <div className='mb-5'>
                       <h4 className="w-3/5 text-xl font-bold text-slate-300 mb-2">Login</h4>
                       <p className='text-slate-400 mb-5'>Users can log in to the Wizard Stock Exchange Project by providing their valid credentials, which typically include a username and password. The login process involves the following steps:</p>
                       <ul className="text-slate-400">
                        <li> . Users enter their username and password.</li>
                        <li> . The system verifies the provided credentials against the stored user data.</li>
                        <li> . If the credentials are valid, the user gains access to their account.</li>
                       </ul>
                    </div>

                    <div className='mb-5'>
                       <h4 className="w-3/5 text-xl font-bold text-slate-300 mb-2">Logout</h4>
                       <p className='text-slate-400 mb-5'>Users can securely log out of their accounts to protect their session and data. The logout process includes: </p>
                       <ul className="text-slate-400">
                        <li> . Users enter their username and password.</li>
                        <li> . The system verifies the provided credentials against the stored user data.</li>
                        <li> . If the credentials are valid, the user gains access to their account.</li>
                       </ul>
                    </div>
                    </div>

                    <div id='user-registration' className='mb-10'>
                       <h4 className="w-3/5 text-xl font-bold text-slate-300 mb-2"> User Registration</h4>
                       <p className='text-slate-400 mb-5'>New users can register for an account in the Wizard Stock Exchange Project by following these steps: </p>
                       <ul className='text-slate-400'>
                        <li> . Users click on the "Register" button.</li>
                        <li> . They provide required information, such as a unique username, a strong password, and personal details.</li>
                        <li> . The system verifies the uniqueness of the chosen username.</li>
                        <li> . Upon successful registration, users receive a confirmation email.</li>
                       </ul>
                    </div>

                    <div id='data-security' className='mb-10'>
                        <div className='mb-5'>
                        <h4 className="w-3/5 text-xl font-bold text-slate-300 mb-2">  Data Security</h4>
                        <p className='text-slate-400 mb-5'>Ensuring the security of user data is of paramount importance in the Stock Exchange Project. <br></br>Here are some key security measures implemented: </p>
                        </div>

                        <div className='mb-5'>
                        <h4 className="w-3/5 text-xl font-bold text-slate-300 mb-2">  Password Encryption</h4>
                        <p className='text-slate-400 mb-5'>User passwords are securely stored using cryptographic hashing algorithms, such as bcrypt. This ensures that even in the event of a data breach, passwords are not exposed in plaintext. </p>
                        </div>

                        <div className='mb-5'>
                        <h4 className="w-3/5 text-xl font-bold text-slate-300 mb-2">  Secure Communication</h4>
                        <p className='text-slate-400 mb-5'>All data exchanged between the user's browser and the server is encrypted using HTTPS (SSL/TLS) to prevent eavesdropping and man-in-the-middle attacks. </p>
                        </div>

                        <div className='mb-5'>
                        <h4 className="w-3/5 text-xl font-bold text-slate-300 mb-2">  Authentication Tokens</h4>
                        <p className='text-slate-400 mb-5'>User sessions are managed using authentication tokens (e.g., JSON Web Tokens or session cookies) to ensure that only authorized users can access their accounts. </p>
                        </div>

                        <div className='mb-5'>
                        <h4 className="w-3/5 text-xl font-bold text-slate-300 mb-2">  Access Control</h4>
                        <p className='text-slate-400 mb-5'>Role-based access control (RBAC) is implemented to restrict access to sensitive features and data. Users have different roles, such as "Trader" or "Admin," each with specific permissions. </p>
                        </div>

                        <div className='mb-5'>
                        <h4 className="w-3/5 text-xl font-bold text-slate-300 mb-2">  Regular Security Audits</h4>
                        <p className='text-slate-400 mb-5'>Regular security audits and penetration testing are performed to identify and fix potential vulnerabilities in the application.</p>
                        </div>
                    </div>

                    <div id='conclusion' className='mb-10'>
                       <h3 className="w-3/5 text-xl font-bold text-slate-300 mb-2">Conclusion</h3>
                       <p className='text-slate-400'>The Wizard Stock Exchange Project provides users with a secure and user-friendly platform to trade stocks and manage their investment portfolios. Key features include user authentication, registration, and data security measures to protect user information and maintain the integrity of the system.</p>
                    </div>

                    <div className='mb-10'>
                       <p className='text-slate-400'>For any inquiries or issues related to the Stock Exchange Project, please contact our support team at <a href="">support@stockexchangeproject.com.</a></p>
                    </div>

                    <h3 className='text-center font-bold text-slate-300'>Thank you for using the Wizard Stock Exchange Project!</h3>
                </div>
            </div>
        </div>
    );
};

export default Documentation;


{/* <aside
          id="sidebar"
          className="fixed hidden z-20 h-full top-0 left-0 pt-16 flex lg:flex flex-shrink-0 flex-col w-64 transition-width duration-75"
          aria-label="Sidebar"
        >
          <div className="relative flex-1 flex flex-col min-h-0 border-r border-gray-200 bg-white pt-0 mt-8 ml-16">
            <div className="flex-1 flex flex-col pt-5 pb-4 overflow-y-auto">
              <div className="flex-1 px-3 bg-white divide-y space-y-1">
                <ul className="space-y-2 pb-2">
                  <li>
                    <a
                      href="#"
                      className="text-base text-gray-900 font-normal rounded-lg flex items-center p-2 hover:bg-gray-100 group"
                    >
                      <span className="ml-3">Introduction</span>
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-base text-gray-900 font-normal rounded-lg flex items-center p-2 hover:bg-gray-100 group"
                    >
                      <span className="ml-3">Project Overview</span>
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-base text-gray-900 font-normal rounded-lg flex items-center p-2 hover:bg-gray-100 group"
                    >
                      <span className="ml-3">User Authentication</span>
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-base text-gray-900 font-normal rounded-lg flex items-center p-2 hover:bg-gray-100 group"
                    >
                      <span className="ml-3">User Registration</span>
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-base text-gray-900 font-normal rounded-lg flex items-center p-2 hover:bg-gray-100 group"
                    >
                      <span className="ml-3">User Logout</span>
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-base text-gray-900 font-normal rounded-lg flex items-center p-2 hover:bg-gray-100 group"
                    >
                      <span className="ml-3">Data Security</span>
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-base text-gray-900 font-normal rounded-lg flex items-center p-2 hover:bg-gray-100 group"
                    >
                      <span className="ml-3">Conclusion</span>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </aside> */}
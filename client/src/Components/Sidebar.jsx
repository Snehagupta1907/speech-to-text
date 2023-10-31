import React from "react";
import SearchBar from "./SearchBar";

import {AiOutlineHome,AiOutlineSave} from "react-icons/ai"
import {FiSettings,FiHelpCircle,FiTrash2} from "react-icons/fi"
const NavData = [
  {
    id: 1,
    name: "Home",
    icon: <AiOutlineHome size={25} />,
  },
  {
    id: 2,
    name: "All Files",
    icon: <AiOutlineHome size={25}/>,
  },
  {
    id: 3,
    name: "Saved",
    icon:<AiOutlineSave size={25}/>,
  },
  {
    id: 4,
    name: "Integrations",
    icon: <AiOutlineHome size={25}/>,
  },
  {
    id: 5,
    name: "Trash",
    icon: <FiTrash2 size={25}/>,
  },
  {
    id: 6,
    name: "Settings",
    icon: <FiSettings size={25}/>,
  },
  {
    id: 7,
    name: "Help And Support",
    icon: <FiHelpCircle size={25}/>,
  },
];
const Sidebar = () => {
  return (
    <>
      <nav className="fixed top-0 z-50 w-full bg-white ">
        <div className="px-3 py-3 lg:px-5 lg:pl-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center justify-start">
              <button
                data-drawer-target="logo-sidebar"
                data-drawer-toggle="logo-sidebar"
                aria-controls="logo-sidebar"
                type="button"
                className="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-blue-400 dark:focus:ring-gray-600"
              >
                <span className="sr-only">Open sidebar</span>
                <svg
                  className="w-6 h-6"
                  aria-hidden="true"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    clip-rule="evenodd"
                    fill-rule="evenodd"
                    d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"
                  ></path>
                </svg>
              </button>
              <a href="/" className="flex ml-2 md:mr-24">
                
                <span className="bg-blue-500 w-auto px-4 py-1 rounded-lg self-center text-xl font-bold sm:text-2xl whitespace-nowrap text-white">
                  ABC FIRM
                </span>
              </a>
              <div className="ml-12">
                <SearchBar />
              </div>
            </div>
            <div className="flex items-center">
              <div className="flex items-center flex-row ml-3">
              <svg
                    className="w-6 h-6 text-gray-800 dark:text-white mx-3"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 14 20"
                  >
                    <path d="M12.133 10.632v-1.8A5.406 5.406 0 0 0 7.979 3.57.946.946 0 0 0 8 3.464V1.1a1 1 0 0 0-2 0v2.364a.946.946 0 0 0 .021.106 5.406 5.406 0 0 0-4.154 5.262v1.8C1.867 13.018 0 13.614 0 14.807 0 15.4 0 16 .538 16h12.924C14 16 14 15.4 14 14.807c0-1.193-1.867-1.789-1.867-4.175ZM3.823 17a3.453 3.453 0 0 0 6.354 0H3.823Z" />
                  </svg>
                <div>
                 
                  <button
                    type="button"
                    className="flex text-sm bg-gray-800 rounded-full focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600"
                    aria-expanded="false"
                    data-dropdown-toggle="dropdown-user"
                  >
                    <span className="sr-only">Open user menu</span>
                    <img
                      className="w-8 h-8 rounded-full"
                      src="https://flowbite.com/docs/images/people/profile-picture-5.jpg"
                      alt="user photo"
                    />
                  </button>
                </div>
                <div
                  className="z-50 hidden my-4 text-base list-none bg-white divide-y divide-gray-100 rounded shadow dark:bg-gray-700 dark:divide-gray-600"
                  id="dropdown-user"
                >
                  <div className="px-4 py-3" role="none">
                    <p
                      className="text-sm text-gray-900 dark:text-white"
                      role="none"
                    >
                      Neil Sims
                    </p>
                    <p
                      className="text-sm font-medium text-gray-900 truncate dark:text-gray-300"
                      role="none"
                    >
                      neil.sims@flowbite.com
                    </p>
                  </div>
                  
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>

      <aside
        id="logo-sidebar"
        className="fixed top-0 left-0 z-40 w-64 h-screen pt-20 transition-transform -translate-x-full bg-white sm:translate-x-0  dark:border-gray-700"
        aria-label="Sidebar"
      >
        <div className="h-full px-3 pb-4 overflow-y-auto bg-white ">
          <ul className="space-y-2 font-medium">
          {NavData.map((item,i)=><>
            <li>
              <a
                href="#"
                className="flex items-center p-2 text-gray-900 rounded-lg  hover:bg-gray-100 dark:hover:bg-blue-400 group"
              >
                {item.icon}
                <span className="ml-3">{item.name}</span>
              </a>
            </li>
          </>)}
           
          </ul>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;

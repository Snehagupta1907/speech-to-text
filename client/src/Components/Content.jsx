import React from "react";
import Table from "./Table";

const Content = () => {
  return (
    <div>
      <div className="p-4 sm:ml-64">
        <div className="p-4  rounded-lg mt-14">
          <div className="mb-5 flex items-center justify-between">
            <div>
              <h1 className="font-bold text-6xl">Welcome Sneha</h1>
              <p>Upload your audio and Video to covert to text</p>
            </div>
            <button
              type="button"
              class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
            >
              Transcribe File
            </button>
          </div>
          <div className="grid grid-cols-3 gap-4 mb-4">
            <div className="flex items-start flex-col justify-center h-32 rounded bg-gray-50 dark:bg-gray-800">
            <svg
                className="w-6 h-6 text-gray-800 dark:text-white ml-2"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 20"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="m13 19-6-5-6 5V2a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v17Z"
                />
              </svg>
              <p className="text-2xl font-semibold text-white ml-3 mt-3">20</p>
              <p className="text-2xl font-normal text-white ml-3 mt-3">Saved</p>
            </div>
            <div className="flex items-start flex-col justify-center h-32 rounded bg-gray-50 dark:bg-gray-800">
            <svg
                className="w-6 h-6 text-gray-800 dark:text-white ml-2"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 20"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="m13 19-6-5-6 5V2a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v17Z"
                />
              </svg>
              <p className="text-2xl font-semibold text-white ml-3 mt-3">20</p>
              <p className="text-2xl font-normal text-white ml-3 mt-3">Saved</p>
            </div>
            <div className="flex items-start flex-col justify-center h-32 rounded bg-gray-50 dark:bg-gray-800">
              <svg
                className="w-6 h-6 text-gray-800 dark:text-white ml-2"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 20"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="m13 19-6-5-6 5V2a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v17Z"
                />
              </svg>
              <p className="text-2xl font-semibold text-white ml-3 mt-3">20</p>
              <p className="text-2xl font-normal text-white ml-3 mt-3">Saved</p>
              
            </div>
          </div>
          <div className="flex items-center justify-center h-[100vh] mb-4 rounded bg-gray-50 dark:bg-gray-800 mt-10">
            <Table />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Content;

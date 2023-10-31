import React, { useState } from 'react';
import Table from "./Table";
import Upload from "./Upload";


const Content = () => {
    const [modalIsOpen, setModalIsOpen] = useState(false);

    const openModal = () => {
      setModalIsOpen(true);
    };
  
    const closeModal = () => {
      setModalIsOpen(false);
    };
  return (
    <div className='bg-gray-100'>
      <div className="p-4 sm:ml-64">
        <div className="p-4  rounded-lg mt-14">
          <div className="mb-5 flex items-center justify-between">
            <div>
              <h1 className="font-bold text-6xl">Welcome Sneha</h1>
              <p>Upload your audio and Video to covert to text</p>
            </div>
            <button
              data-modal-target="authentication-modal"
              data-modal-toggle="authentication-modal"
              className="block text-white bg-blue-800 hover:bg-blue-900 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
              onClick={openModal}
              type="button"
            >
             Transcribe File
            </button>
          </div>
          <div className="grid grid-cols-3 gap-4 mb-4">
            <div className="flex items-start flex-col justify-center h-32 rounded bg-white">
              <svg
                className="w-6 h-6 text-black ml-2"
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
              <p className="text-2xl font-semibold text-black ml-3 mt-3">20</p>
              <p className="text-2xl font-normal text-black ml-3 mt-3">Saved</p>
            </div>
            <div className="flex items-start flex-col justify-center h-32 rounded bg-white">
              <svg
                className="w-6 h-6 text-black ml-2"
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
              <p className="text-2xl font-semibold text-black ml-3 mt-3">20</p>
              <p className="text-2xl font-normal text-black ml-3 mt-3">Saved</p>
            </div>
            <div className="flex items-start flex-col justify-center h-32 rounded bg-white">
              <svg
                className="w-6 h-6 text-black ml-2"
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
              <p className="text-2xl font-semibold text-black ml-3 mt-3">20</p>
              <p className="text-2xl font-normal text-black ml-3 mt-3">Saved</p>
            </div>
          </div>
          <div className="flex flex-col items-start  mb-4  rounded-md bg-gray-50  mt-10">
          <h1 className="pt-5 mb-5 px-5 text-xl whitespace-nowrap font-bold h-12">Recent Files</h1>
            <Table />
          </div>
        </div>
      </div>
      {modalIsOpen && (
        
         <Upload isOpen={modalIsOpen} onClose={closeModal} /> 
        
      )}
    </div>
  );
};

export default Content;

import React, { useEffect } from "react";
import { languages } from "../constants/constant";
import axios from "axios";
import instance from "../utils/axiosInstance";

const Upload = ({ isOpen, onClose }) => {
  if (!isOpen) return null;
 

  const transcribtion = async () => {
    const data = {
      source_config: {
        url: 'https://www.rev.ai/FTC_Sample_1.mp3'
      },
      metadata: 'This is a test'
    };
    
    const headers = {
      'Authorization': 'Bearer 02WnnpPYQyxrCyX5Il1euxQP4j1bQdKrgoW7zYMk15vQveCGzuU78TngoTLRyDezHO17c9oMAhgJv12seB-apoe9xUitc',
      'Content-Type': 'application/json'
    };
    
    axios.post('https://api.rev.ai/speechtotext/v1/jobs', data, { headers })
      .then(response => {
        console.log('Response:', response.data);
      })
      .catch(error => {
        console.error('Error:', error);
      });
  }
  
  return (
    <div className=" fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
      <div className="bg-white rounded-lg shadow-lg ">
        <div className="relative bg-white rounded-lg shadow  md:w-[600px]">
          <button
            type="button"
            className="absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ml-auto inline-flex justify-center items-center"
            data-modal-hide="authentication-modal"
            onClick={onClose}
          >
            <svg
              className="w-3 h-3"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 14 14"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
              />
            </svg>
            <span className="sr-only">Close modal</span>
          </button>
          <div className="px-6 py-6 lg:px-8">
            <h1 className="mb-4 text-4xl font-bold text-gray-900 ">
              Transcribe File
            </h1>
            <form className="space-y-6" action="#">
              <div>
                <label
                  for="languages"
                  className="block mb-2 text-sm font-medium text-gray-900"
                >
                  Transcription Language
                </label>
                <select
                  id="languages"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
                >
                  <option value="en_us" selected>
                    Default
                  </option>
                  {languages.map((language) => (
                    <option value={language.code}>{language.name}</option>
                  ))}
                </select>
              </div>
              <div>
                <div class="flex items-center justify-center w-full">
                  <label
                    for="dropzone-file"
                    class="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 hover:bg-gray-100 "
                  >
                    <div class="flex flex-col items-center justify-center pt-5 pb-6">
                      <svg
                        class="w-8 h-8 mb-4 text-blue-500 "
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 20 16"
                      >
                        <path
                          stroke="currentColor"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
                        />
                      </svg>
                      <p class="mb-2 text-[12px] text-gray-500 ">
                        <span class="font-normal text-[12px] text-blue-500">Click to upload</span> or
                        drag and drop
                      </p>
                      <p class="text-[12px] text-gray-500 px-3 text-center">
                      The maximum file size is 1GB for audio and 10GB for videos.
Supported formats: mp3, mp4, wav, caf, aiff, avi, rmvb, flv, m4a, mov, wmv, wma
                      </p>
                    </div>
                    <input id="dropzone-file" type="file" class="hidden" />
                  </label>
                </div>
              </div>
              <div>
                <label
                  for="website"
                  class="block mb-2 text-sm font-medium text-gray-900 "
                >
                  Import From Link
                </label>
                <input
                  type="url"
                  id="website"
                  class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                  placeholder="Paste a Drobpox, Google Drive or Youtube URL here"
                  required
                />
              </div>
              <div className="flex justify-between">
                <div className="flex items-start">
                  <div className="flex items-center h-5">
                    <input
                      id="remember"
                      type="checkbox"
                      value=""
                      className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300  dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800"
                      required
                    />
                  </div>
                  <label
                    for="remember"
                    className="ml-2 text-sm font-medium text-gray-900 "
                  >
                    Speaker Identification
                  </label>
                </div>
              </div>
              <button
                onClick={()=>transcribtion()}

                className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Transcribe
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Upload;

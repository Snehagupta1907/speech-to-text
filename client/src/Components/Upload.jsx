import React, { useState } from "react";
import axios from 'axios';


const Upload = ({ isOpen, onClose }) => {

  const [file, setFile] = useState(null);
  const [transcribedText, setTranscribedText] = useState(null);

  const handleFileUpload = (event) => {
    setFile(event.target.files[0]);
  };

  const uploadFile = async () => {
    if (file) {
      const formData = new FormData();
      formData.append('file', file);

      const response = await axios.post('http://localhost:5000/upload', formData);
      console.log(response)

      if (response.data.upload_url) {
        const data = { audio_url: response.data.upload_url };
        const transcriptResponse = await axios.post('http://localhost:5000/transcript', data);
        
        pollForTranscription(transcriptResponse.data.id);
      }
    }
  };

  const pollForTranscription = async (transcriptId) => {
    while (true) {
      const response = await axios.get(`http://localhost:5000/transcript/${transcriptId}`);

      if (response.data.status === 'completed') {
        setTranscribedText(response.data.text);
        break;
      }

      if (response.data.status === 'error') {
        console.error(`Transcription failed: ${response.data.error}`);
        break;
      }

      await new Promise((resolve) => setTimeout(resolve, 3000));
    }
  };


  if (!isOpen) return null;
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
                  <option selected>Default</option>
                  <option value="US">United States</option>
                  <option value="CA">Canada</option>
                  <option value="FR">France</option>
                  <option value="DE">Germany</option>
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
                        class="w-8 h-8 mb-4 text-gray-500 "
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
                      <p class="mb-2 text-sm text-gray-500 ">
                        <span class="font-semibold">Click to upload</span> or
                        drag and drop
                      </p>
                      <p class="text-xs text-gray-500 ">
                        SVG, PNG, JPG or GIF (MAX. 800x400px)
                      </p>
                    </div>
                    <input id="dropzone-file" type="file" accept=".mp3, .mp4" onChange={handleFileUpload} class="hidden" />
                  </label>
                </div>
              </div>
              <div>
            <label for="website" class="block mb-2 text-sm font-medium text-gray-900 ">Import From Link</label>
            <input type="url" id="website" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="Paste a Drobpox, Google Drive or Youtube URL here" required/>
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
                type="submit"
                onClick={uploadFile}
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

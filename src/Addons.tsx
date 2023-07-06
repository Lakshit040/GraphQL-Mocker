const AddOns = () => {
  return (
    <div className="flex items-center justify-center min-h-screen mt-32">
      <h3 className="text-5xl text-green-500 font-bold mb-6 ml-3 mr-32 text-shadow-lg font-heading">
        Add-ons
      </h3>
      <ol>
        <li className="border-l-2 border-purple-600">
          <div className="md:flex flex-start">
            <div className="bg-purple-600 w-6 h-6 flex items-center justify-center rounded-full -ml-3.5">
              <svg
                aria-hidden="true"
                focusable="false"
                data-prefix="fas"
                className="text-white w-3 h-3"
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 448 512"
              >
                <path
                  fill="currentColor"
                  d="M0 464c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V192H0v272zm64-192c0-8.8 7.2-16 16-16h288c8.8 0 16 7.2 16 16v64c0 8.8-7.2 16-16 16H80c-8.8 0-16-7.2-16-16v-64zM400 64h-48V16c0-8.8-7.2-16-16-16h-32c-8.8 0-16 7.2-16 16v48H160V16c0-8.8-7.2-16-16-16h-32c-8.8 0-16 7.2-16 16v48H48C21.5 64 0 85.5 0 112v48h448v-48c0-26.5-21.5-48-48-48z"
                ></path>
              </svg>
            </div>
            <div className="hover:scale-105 transition-transform block p-6 rounded-xl shadow-lg bg-gray-100 max-w-md ml-6 mb-10">
              <div className="flex justify-between mb-4">
                <a
                  href="#!"
                  className=" text-green-600 hover:text-purple-700 focus:text-purple-800 duration-300 transition ease-in-out font-mono antialiased font-semibold text-md"
                >
                  Meaningful Data Generation
                </a>
                
              </div>
              <p className="text-gray-700 mb-6">
                In addition to random data, the plugin will also support generating meaningful mock data for specific fields like name, age, color, animal, profession, country, address, company, and so on.
              </p>
            </div>
          </div>
        </li>
        <li className="border-l-2 border-green-600">
          <div className="md:flex flex-start">
            <div className="bg-green-600 w-6 h-6 flex items-center justify-center rounded-full -ml-3.5">
              <svg
                aria-hidden="true"
                focusable="false"
                data-prefix="fas"
                className="text-white w-3 h-3"
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 448 512"
              >
                <path
                  fill="currentColor"
                  d="M0 464c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V192H0v272zm64-192c0-8.8 7.2-16 16-16h288c8.8 0 16 7.2 16 16v64c0 8.8-7.2 16-16 16H80c-8.8 0-16-7.2-16-16v-64zM400 64h-48V16c0-8.8-7.2-16-16-16h-32c-8.8 0-16 7.2-16 16v48H160V16c0-8.8-7.2-16-16-16h-32c-8.8 0-16 7.2-16 16v48H48C21.5 64 0 85.5 0 112v48h448v-48c0-26.5-21.5-48-48-48z"
                ></path>
              </svg>
            </div>
            <div className="hover:scale-105 transition-transform block p-6 rounded-xl shadow-lg bg-gray-100 max-w-md ml-6 mb-10">
              <div className="flex justify-between mb-4">
                <a
                  href="#!"
                  className="font-medium text-purple-600 hover:text-purple-700 focus:text-purple-800 duration-300 transition ease-in-out font-mono antialiased font-semibold text-md"
                >
                  Fast Randomization
                </a>
                
              </div>
              <p className="text-gray-700 mb-6">
              Fast Randomization will allow users to quickly generate random responses based on previously used mock configurations.
              </p>
              
            </div>
          </div>
        </li>
        <li className="border-l-2 border-purple-600">
          <div className="md:flex flex-start">
            <div className="bg-purple-600 w-6 h-6 flex items-center justify-center rounded-full -ml-3.5">
              <svg
                aria-hidden="true"
                focusable="false"
                data-prefix="fas"
                className="text-white w-3 h-3"
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 448 512"
              >
                <path
                  fill="currentColor"
                  d="M0 464c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V192H0v272zm64-192c0-8.8 7.2-16 16-16h288c8.8 0 16 7.2 16 16v64c0 8.8-7.2 16-16 16H80c-8.8 0-16-7.2-16-16v-64zM400 64h-48V16c0-8.8-7.2-16-16-16h-32c-8.8 0-16 7.2-16 16v48H160V16c0-8.8-7.2-16-16-16h-32c-8.8 0-16 7.2-16 16v48H48C21.5 64 0 85.5 0 112v48h448v-48c0-26.5-21.5-48-48-48z"
                ></path>
              </svg>
            </div>
            <div className="hover:scale-105 transition-transform block p-6 rounded-xl shadow-lg bg-gray-100 max-w-md ml-6 mb-10">
              <div className="flex justify-between mb-4">
                <a
                  href="#!"
                  className="font-medium text-green-600 hover:text-purple-700 focus:text-purple-800 duration-300 transition ease-in-out font-mono antialiased font-semibold text-md"
                >
                  Type Error Information
                </a>
                
              </div>
              <p className="text-gray-700 mb-6">
              To assist developers in creating and debugging mock responses, the plugin will incorporate a feature that highlights and provides information on type errors.
              </p>
            </div>
          </div>
        </li>
        <li className="border-l-2 border-green-600">
          <div className="md:flex flex-start">
            <div className="bg-green-600 w-6 h-6 flex items-center justify-center rounded-full -ml-3.5">
              <svg
                aria-hidden="true"
                focusable="false"
                data-prefix="fas"
                className="text-white w-3 h-3"
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 448 512"
              >
                <path
                  fill="currentColor"
                  d="M0 464c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V192H0v272zm64-192c0-8.8 7.2-16 16-16h288c8.8 0 16 7.2 16 16v64c0 8.8-7.2 16-16 16H80c-8.8 0-16-7.2-16-16v-64zM400 64h-48V16c0-8.8-7.2-16-16-16h-32c-8.8 0-16 7.2-16 16v48H160V16c0-8.8-7.2-16-16-16h-32c-8.8 0-16 7.2-16 16v48H48C21.5 64 0 85.5 0 112v48h448v-48c0-26.5-21.5-48-48-48z"
                ></path>
              </svg>
            </div>
            <div className="hover:scale-105 transition-transform block p-6 rounded-xl shadow-lg bg-gray-100 max-w-md ml-6 mb-10">
              <div className="flex justify-between mb-4">
                <a
                  href="#!"
                  className="font-medium text-purple-600 hover:text-purple-700 focus:text-purple-800 duration-300 transition ease-in-out font-mono antialiased font-semibold text-md"
                >
                  Field Not Found Information
                </a>
                
              </div>
              <p className="text-gray-700 mb-6">
              In situations where a requested field is missing from the mock response, the plugin will generate a 'Field Not Found' notification.
              </p>
              
            </div>
          </div>
        </li>
        <li className="border-l-2 border-purple-600">
          <div className="md:flex flex-start">
            <div className="bg-purple-600 w-6 h-6 flex items-center justify-center rounded-full -ml-3.5">
              <svg
                aria-hidden="true"
                focusable="false"
                data-prefix="fas"
                className="text-white w-3 h-3"
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 448 512"
              >
                <path
                  fill="currentColor"
                  d="M0 464c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V192H0v272zm64-192c0-8.8 7.2-16 16-16h288c8.8 0 16 7.2 16 16v64c0 8.8-7.2 16-16 16H80c-8.8 0-16-7.2-16-16v-64zM400 64h-48V16c0-8.8-7.2-16-16-16h-32c-8.8 0-16 7.2-16 16v48H160V16c0-8.8-7.2-16-16-16h-32c-8.8 0-16 7.2-16 16v48H48C21.5 64 0 85.5 0 112v48h448v-48c0-26.5-21.5-48-48-48z"
                ></path>
              </svg>
            </div>
            <div className="hover:scale-105 transition-transform block p-6 rounded-xl shadow-lg bg-gray-100 max-w-md ml-6 mb-10">
              <div className="flex justify-between mb-4">
                <a
                  href="#!"
                  className="font-medium text-green-600 hover:text-purple-700 focus:text-purple-800 duration-300 transition ease-in-out font-mono antialiased font-semibold text-md"
                >
                  Customizable Data Types
                </a>
                
              </div>
              <p className="text-gray-700 mb-6">
              Recognizing the importance of detailed customization in mock responses, the plugin will offer the ability to customize each data type individually. 
              </p>
            </div>
          </div>
        </li>
      </ol>
    </div>
  );
};

export default AddOns;

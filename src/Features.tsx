import { forwardRef } from "react";

const Features = forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>((props, ref) => {
  return (
    <div ref = {ref} className="container bg-gray-900 mx-auto w-screen h-full">
      <h1 className="text-center text-6xl text-blue-500 text-shadow-lg font-heading mt-12 font-semibold">Built-in Features</h1>
      <div className="relative wrap overflow-hidden p-10 h-full">
        <div
          className="border-2 border-gray-700 border-opacity-20 h-full absolute"
          style={{ left: "50%" }}
        ></div>

        {/* <!-- right timeline --> */}
        <div className="mb-8 flex justify-between items-center w-full right-timeline">
          <div className="order-1 w-5/12"></div>
          <div className="z-20 flex items-center order-1 bg-gray-800 shadow-xl w-8 h-8 rounded-full">
            <h1 className="mx-auto font-semibold text-lg text-white">1</h1>
          </div>
          <div className="order-1 bg-gray-900 rounded-xl shadow-xl w-5/12 px-6 py-4">
            <div className="hover:scale-110 transition-transform max-w-md rounded-3xl p-px bg-gradient-to-b from-blue-300 to-pink-300 dark:from-blue-800 dark:to-purple-800 ">
              <div className="rounded-[calc(1.5rem-1px)] p-10 bg-white dark:bg-gray-900">
                <p className="text-gray-700 dark:text-gray-300">
                The primary role of the plugin will be to monitor and capture any GraphQL requests made by the browser. 
                </p>

                <div className="mt-8 flex gap-4 items-center">
                  
                    <h3 className="text-lg font-medium text-gray-700 dark:text-white">
                    GraphQL Request Interception
                    </h3>
                    
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* <!-- left timeline --> */}
        <div className="mb-8 flex justify-between flex-row-reverse items-center w-full left-timeline">
          <div className="order-1 w-5/12"></div>
          <div className="z-20 flex items-center order-1 bg-gray-800 shadow-xl w-8 h-8 rounded-full">
            <h1 className="mx-auto text-white font-semibold text-lg">2</h1>
          </div>
          <div className="flex flex-row-reverse order-1 bg-gray-900 rounded-xl shadow-xl w-5/12 px-6 py-4">
            <div className="hover:scale-110 transition-transform max-w-md rounded-3xl shadow-xl p-px bg-gradient-to-b from-blue-300 to-pink-300 dark:from-blue-800 dark:to-purple-800 ">
              <div className="rounded-[calc(1.5rem-1px)] p-10 bg-white dark:bg-gray-900">
                <p className="text-gray-700 dark:text-gray-300">
                The plugin will host a user-friendly interface where developers can configure their preferred mock responses for each captured GraphQL query. 
                </p>

                <div className="mt-8 flex gap-4 items-center">

                    <h3 className="text-lg font-medium text-gray-700 dark:text-white">
                    Mock Response Configuration
                    </h3>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* <!-- right timeline --> */}
        <div className="mb-8 flex justify-between items-center w-full right-timeline">
          <div className="order-1 w-5/12"></div>
          <div className="z-20 flex items-center order-1 bg-gray-800 shadow-xl w-8 h-8 rounded-full">
            <h1 className="mx-auto font-semibold text-lg text-white">3</h1>
          </div>
          <div className="order-1 bg-gray-900 rounded-xl shadow-xl w-5/12 px-6 py-4">
            {/* Card Inserted */}
            <div className="hover:scale-110 transition-transform max-w-md rounded-3xl p-px bg-gradient-to-b from-blue-300 to-pink-300 dark:from-blue-800 dark:to-purple-800 ">
              <div className="rounded-[calc(1.5rem-1px)] p-10 bg-white dark:bg-gray-900">
                <p className="text-gray-700 dark:text-gray-300">
                In addition to static responses, the plugin will generate dynamic mock responses. 
                </p>

                <div className="mt-8 flex gap-4 items-center">
                  <div>
                    <h3 className="text-lg font-medium text-gray-700 dark:text-white">
                    Dynamic Response Generation
                    </h3>
                    
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* <!-- left timeline --> */}
        <div className="mb-8 flex justify-between flex-row-reverse items-center w-full left-timeline">
          <div className="order-1 w-5/12"></div>
          <div className="z-20 flex items-center order-1 bg-gray-800 shadow-xl w-8 h-8 rounded-full">
            <h1 className="mx-auto text-white font-semibold text-lg">4</h1>
          </div>
          <div className="flex flex-row-reverse order-1 bg-gray-900 rounded-xl shadow-xl w-5/12 px-6 py-4">
            <div className="hover:scale-110 transition-transform max-w-md rounded-3xl p-px bg-gradient-to-b from-blue-300 to-pink-300 dark:from-blue-800 dark:to-purple-800 ">
              <div className="rounded-[calc(1.5rem-1px)] p-10 bg-white dark:bg-gray-900">
                <p className="text-gray-700 dark:text-gray-300">
                The plugin will simulate network latency by introducing an adjustable delay before the mock response is returned. 
                </p>
                <div className="mt-8 flex gap-4 items-center">
                  <div>
                    <h3 className="text-lg font-medium text-gray-700 dark:text-white">
                    Response Delay Simulation
                    </h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* <!-- right timeline --> */}
        <div className="mb-8 flex justify-between items-center w-full right-timeline">
          <div className="order-1 w-5/12"></div>
          <div className="z-20 flex items-center order-1 bg-gray-800 shadow-xl w-8 h-8 rounded-full">
            <h1 className="mx-auto font-semibold text-lg text-white">5</h1>
          </div>
          <div className="order-1 bg-gray-900 rounded-xl shadow-xl w-5/12 px-6 py-4">
            {/* Card Inserted */}
            <div className="hover:scale-110 transition-transform max-w-md rounded-3xl p-px bg-gradient-to-b from-blue-300 to-pink-300 dark:from-blue-800 dark:to-purple-800 ">
              <div className="rounded-[calc(1.5rem-1px)] p-10 bg-white dark:bg-gray-900">
                <p className="text-gray-700 dark:text-gray-300">
                This feature will generate random or predefined mock data based on the GraphQL endpoint's schema. 
                </p>

                <div className="mt-8 flex gap-4 items-center">
                  <div>
                    <h3 className="text-lg font-medium text-gray-700 dark:text-white">
                    Mock Data Generation:
                    </h3>
                    
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* <!-- left timeline --> */}
        <div className="mb-8 flex justify-between flex-row-reverse items-center w-full left-timeline">
          <div className="order-1 w-5/12"></div>
          <div className="z-20 flex items-center order-1 bg-gray-800 shadow-xl w-8 h-8 rounded-full">
            <h1 className="mx-auto text-white font-semibold text-lg">6</h1>
          </div>
          <div className="flex flex-row-reverse order-1 bg-gray-900 rounded-xl shadow-xl w-5/12 px-6 py-4">
            <div className="hover:scale-110 transition-transform max-w-md rounded-3xl p-px bg-gradient-to-b from-blue-300 to-pink-300 dark:from-blue-800 dark:to-purple-800 ">
              <div className="rounded-[calc(1.5rem-1px)] p-10 bg-white dark:bg-gray-900">
                <p className="text-gray-700 dark:text-gray-300">
                To accurately mimic real-world situations, the plugin will be capable of handling multiple GraphQL requests simultaneously. 
                </p>
                <div className="mt-8 flex gap-4 items-center">
                  <div>
                    <h3 className="text-lg font-medium text-gray-700 dark:text-white">
                    Concurrent Request Handling
                    </h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* <!-- right timeline --> */}
        <div className="mb-8 flex justify-between items-center w-full right-timeline">
          <div className="order-1 w-5/12"></div>
          <div className="z-20 flex items-center order-1 bg-gray-800 shadow-xl w-8 h-8 rounded-full">
            <h1 className="mx-auto font-semibold text-lg text-white">7</h1>
          </div>
          <div className="order-1 bg-gray-900 rounded-xl shadow-xl w-5/12 px-6 py-4">
            {/* Card Inserted */}
            <div className="hover:scale-110 transition-transform max-w-md rounded-3xl p-px bg-gradient-to-b from-blue-300 to-pink-300 dark:from-blue-800 dark:to-purple-800 ">
              <div className="rounded-[calc(1.5rem-1px)] p-10 bg-white dark:bg-gray-900">
                <p className="text-gray-700 dark:text-gray-300">
                Developers will be allowed to change the HTTP status code returned in the mock response. 
                </p>

                <div className="mt-8 flex gap-4 items-center">
                  <div>
                    <h3 className="text-lg font-medium text-gray-700 dark:text-white">
                    Customizable Response Status Code
                    </h3>
                    
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* <!-- left timeline --> */}
        <div className="mb-8 flex justify-between flex-row-reverse items-center w-full left-timeline">
          <div className="order-1 w-5/12"></div>
          <div className="z-20 flex items-center order-1 bg-gray-800 shadow-xl w-8 h-8 rounded-full">
            <h1 className="mx-auto text-white font-semibold text-lg">8</h1>
          </div>
          <div className="flex flex-row-reverse order-1 bg-gray-900 rounded-xl shadow-xl w-5/12 px-6 py-4">
            <div className="hover:scale-110 transition-transform max-w-md rounded-3xl p-px bg-gradient-to-b from-blue-300 to-pink-300 dark:from-blue-800 dark:to-purple-800 ">
              <div className="rounded-[calc(1.5rem-1px)] p-10 bg-white dark:bg-gray-900">
                <p className="text-gray-700 dark:text-gray-300">
                The plugin will ensure that the dynamically generated responses and the produced mock data align with the GraphQL schema. 
                </p>
                <div className="mt-8 flex gap-4 items-center">
                  <div>
                    <h3 className="text-lg font-medium text-gray-700 dark:text-white">
                    Data Validation
                    </h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mb-8 flex justify-between items-center w-full right-timeline">
          <div className="order-1 w-5/12"></div>
          <div className="z-20 flex items-center order-1 bg-gray-800 shadow-xl w-8 h-8 rounded-full">
            <h1 className="mx-auto font-semibold text-lg text-white">9</h1>
          </div>
          <div className="order-1 bg-gray-900 rounded-xl shadow-xl w-5/12 px-6 py-4">
            {/* Card Inserted */}
            <div className="hover:scale-110 transition-transform max-w-md rounded-3xl p-px bg-gradient-to-b from-blue-300 to-pink-300 dark:from-blue-800 dark:to-purple-800 ">
              <div className="rounded-[calc(1.5rem-1px)] p-10 bg-white dark:bg-gray-900">
                <p className="text-gray-700 dark:text-gray-300">
                Each of these features will be smoothly integrated into the plugin's user interface. 
                </p>

                <div className="mt-8 flex gap-4 items-center">
                  <div>
                    <h3 className="text-lg font-medium text-gray-700 dark:text-white">
                    User Interface Integration
                    </h3>
                    
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
});

Features.displayName = 'Features';

export default Features;

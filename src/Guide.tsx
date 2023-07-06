import React, {forwardRef} from "react";

const Guide = forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>((props, ref) => {
  return (
    <div ref={ref} className="container bg-gray-900 mx-auto w-screen h-full">
        <h1 className="text-center text-5xl mt-20 text-blue-400 text-shadow-lg font-heading font-semibold">Starter's Guide</h1>
      <div className="relative wrap overflow-hidden p-10 h-full">
        <div
          className="border-2  border-gray-400 border-opacity-20 h-full absolute"
          style={{ left: "50%" }}
        ></div>

        {/* <!-- right timeline --> */}
        <div className="mb-8 flex justify-between items-center w-full right-timeline">
          <div className="order-1 w-5/12"></div>
          <div className="z-20 flex items-center order-1 bg-gray-800 shadow-xl w-8 h-8 rounded-full">
            <h1 className="mx-auto font-semibold text-lg text-white">1</h1>
          </div>
          <div className="order-1 bg-gray-900 rounded-xl shadow-xl w-5/12 px-6 py-4">
            <div className="hover:scale-110 transition-transform max-w-md rounded-3xl p-px bg-gradient-to-b from-blue-800 to-purple-800 ">
              <div className="rounded-[calc(1.5rem-1px)] p-10 bg-gray-900">
                <p className="text-gray-300">
                  Install our GraphQL Mocker plugin from the chrome web store and activate it.
                </p>

                <div className="mt-8 flex gap-4 items-center">
                  <h3 className="text-lg font-medium text-white">
                    Installation 
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
            <div className="hover:scale-110 transition-transform max-w-md rounded-3xl shadow-xl p-px bg-gradient-to-b from-blue-800 to-purple-800 ">
              <div className="rounded-[calc(1.5rem-1px)] p-10 bg-gray-900">
                <p className="text-gray-300">
                  Once installed, go to chrome devtools panel to see a new tab 'GraphQL Mocker'
                </p>

                <div className="mt-8 flex gap-4 items-center">
                  <h3 className="text-lg font-medium text-white">
                    Devtools
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
            <div className="hover:scale-110 transition-transform max-w-md rounded-3xl p-px bg-gradient-to-b from-blue-800 to-purple-800 ">
              <div className="rounded-[calc(1.5rem-1px)] p-10 bg-gray-900">
                <p className="text-gray-300">
                        Click on the plus button to create a new operation and specify the operation type and operation name.
                </p>

                <div className="mt-8 flex gap-4 items-center">
                  <div>
                    <h3 className="text-lg font-medium text-white">
                      Create new operation
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
            <div className="hover:scale-110 transition-transform max-w-md rounded-3xl p-px bg-gradient-to-b from-blue-800 to-purple-800 ">
              <div className="rounded-[calc(1.5rem-1px)] p-10 bg-gray-900">
                <p className="text-gray-300">
                  Set dynamic rules involving variables (objects, arrays, primitives linked by logical operators). You can also provide a wild card (*) to make the rule always true. 
                </p>
                <div className="mt-8 flex gap-4 items-center">
                  <div>
                    <h3 className="text-lg font-medium text-white">
                      Set dynamic rule
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
            <div className="hover:scale-110 transition-transform max-w-md rounded-3xl p-px bg-gradient-to-b from-blue-800 to-purple-800 ">
              <div className="rounded-[calc(1.5rem-1px)] p-10 bg-gray-900">
                <p className="text-gray-300">
                You can set the Delay (ms) you want before the response. Moreover, can also customise Status Code in the returned response.
                </p>

                <div className="mt-8 flex gap-4 items-center">
                  <div>
                    <h3 className="text-lg font-medium text-white">
                      Set response delay and status code
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
            <div className="hover:scale-110 transition-transform max-w-md rounded-3xl p-px bg-gradient-to-b from-blue-800 to-purple-800 ">
              <div className="rounded-[calc(1.5rem-1px)] p-10 bg-gray-900">
                <p className="text-gray-300">
                  You have to option to set mock response or to generate random response based on the schema of the interceptted request.
                </p>
                <div className="mt-8 flex gap-4 items-center">
                  <div>
                    <h3 className="text-lg font-medium text-white">
                      Set Mock response or Randomize it
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

Guide.displayName = 'Guide';

export default Guide;

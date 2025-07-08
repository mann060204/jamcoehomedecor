import React from "react";
import { MdCloudUpload } from "react-icons/md";

const MyAccount = () => {
  return (
    <section className="py-10 w-full">
      <div className="container flex items-center gap-5">
        <div className="col1 w-[20%]">
          <div className="card bg-white shadow-md rounded-md p-5">
            <div className="w-full p-3 flex items-center justify-center flex-col">
              <div className="w-[110px] h-[110px] rounded-full overflow-hidden mb-4 relative">
                <img
                  src="https://media.licdn.com/dms/image/v2/D4D03AQFChbM09OHueQ/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1718257964816?e=1757548800&v=beta&t=dWBzwJ1PazozIoE8ZKFAllgfdg2FfIfIjEJXy76ca1w"
                  className="w-full h-full object-cover"
                />
                <div className="overlay w-full h-full absolute top-0 left-0 z-40 bg-[rgba(0,0,0,0.5)] flex items-center justify-center">
                  <MdCloudUpload className="text-white text-[25px] pointer-events-none" />
                  {/* Add z-50 and cursor-pointer here */}
                  <input
                    type="file"
                    className="absolute top-0 left-0 w-full h-full opacity-0 cursor-pointer z-50"
                  />
                </div>
              </div>

              <h3>Mann Monpra</h3>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MyAccount;

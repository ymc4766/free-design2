import React from "react";

const Pricing = () => {
  return (
    <div className="w-full py-10 bg-blue-600 px-4 py-10">
      <div className="max-w-[1000px]  mx-auto h-full flex flex-col ">
        <div className="my-4 text-center ">
          <h3 className="text-4xl  text-white  font-extrabold mb-4">
            Best Website Packages
          </h3>
        </div>
        <div className="grid md:grid-cols-3 gap-2">
          <div className="bg-white text-center w-full px-3 font-semibold drop-shadow-md h-full rounded-md  ">
            <div>
              <h4 className="text-3xl font-bold my-2 mt-2 text-blue-900">
                Basic Websites
              </h4>
            </div>
            <div className="flex flex-col items-center py-4 ml-2">
              <h6 className="text-2xl font-bold text-black text-blue-900">
                $ 1800{" "}
              </h6>
              <p className="p-3 text-sm ">5 page Website </p>
              <p className="p-3 text-sm ">responsive Design</p>
              <p className="p-3 text-sm ">Standard Websites</p>
              <p className="p-3 text-sm ">Contact Us Form</p>
              <p className="p-3 text-sm ">1 month free maintenance</p>
              <p className="p-3 text-sm ">Domain name</p>
              <p className="p-3 text-sm ">Hosting</p>
            </div>
          </div>
          <div className="bg-white text-center w-full px-3 font-semibold drop-shadow-md h-full rounded-md  ">
            <div>
              <h4 className="text-3xl font-bold my-2 mt-2 text-blue-900">
                Dynamic Websites
              </h4>
            </div>
            <div className="flex flex-col items-center py-4 ml-2">
              <h6 className="text-2xl font-bold text-black text-blue-900">
                $ 42000 ++{" "}
              </h6>
              <p className="p-3 text-sm ">5 page Website </p>
              <p className="p-3 text-sm ">responsive Design</p>
              <p className="p-3 text-sm ">Standard Websites</p>
              <p className="p-3 text-sm ">Contact Us Form</p>
              <p className="p-3 text-sm ">1 month free maintenance</p>
              <p className="p-3 text-sm ">Domain name</p>
              <p className="p-3 text-sm ">Hosting</p>
            </div>
          </div>{" "}
          <div className="bg-white text-center w-full px-3 font-semibold drop-shadow-md h-full rounded-md  ">
            <div>
              <h4 className="text-3xl font-bold my-2 mt-2 text-blue-900">
                Custom Systems
              </h4>
            </div>
            <div className="flex flex-col items-center py-4 ml-2">
              <h6 className="text-2xl font-bold text-black text-blue-900">
                ${" "}
              </h6>
              <p className="p-3 text-sm ">
                Price depends on the type of app and add{" "}
              </p>
              <p className="p-3 text-sm ">ons like websites.</p>
              <p className="p-3 text-sm ">Desktop Apps</p>
              <p className="p-3 text-sm ">CCustom Websites</p>
              <p className="p-3 text-sm ">Schools Management systesm</p>
              <p className="p-3 text-sm ">Hospitals Systemse</p>
              <p className="p-3 text-sm ">Customer Management Systems</p>
            </div>
            <button className="px-3  mb-4">Get Quote</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pricing;

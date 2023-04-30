import React from "react";

const Landing = () => {
  return (
    <div className="bg-white w-full m-auto  py-12  items-center">
      <div className="w-full h-full max-w-[1240px] mx-auto px-4 mt-[100px] items-center">
        <div>
          <h3 className="text-center text-3xl text-slate-800 font-bold pb-4 my-4">
            Free Website Design
          </h3>
          <div className="grid md:grid-cols-2 gap-2">
            <img
              className="w-[85%] rounded-md mt-[-10px] ml-4"
              src="https://images.pexels.com/photos/2041627/pexels-photo-2041627.jpeg?auto=compress&cs=tinysrgb&w=600"
              alt="/"
            />
            <div>
              <h3 className="text-3xl font-bold px-2">
                Responsive Website Design
              </h3>
              <p className="max-w-2xl font-bold py-3 ">
                more-or-less normal distribution of letters, as opposed to using
                'Content here, content here', making it look like readable
                English. Many desktop normal distribution of letters, as opposed
                to using 'Content here, content here', making it look like
                readable English. Many publishing packages and web page editors
                now use Lore
              </p>
              <button className="px-2 bg-blue-700 text-gray-400 hover:bg-transparent">
                Contact Us
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Landing;

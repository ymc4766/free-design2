import React from "react";

const info = [
  { perc: "100 % ", text: "Completion Projects" },
  { perc: " 24 / 7 ", text: "ready Team" },
  { perc: "100 % ", text: "Trusted Employees" },
];

const About = () => {
  return (
    <div className="w-full px-3 py-10 ">
      <div className="max-w-[1000px] mx-auto h-full flex flex-col">
        <div className="flex flex-col px-3">
          <h3 className="text-4xl text-center py-3 text-gray-700">
            Trusted All Over The Globe .
          </h3>
          <p className="w-3xl text-center h-full text-lg py-2">
            {" "}
            a more-or-less normal distribution of letters, as opposed to using
            'Content here, content here', making it look like readable English.
            a more-or-less normal distribution of letters, as opposed to using
            'Content here, content here', making it look like readable English.
            Many Many
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-4 py-4">
          {/* <div className="bg-white py-3 text-center drop-shadow-lg  rounded-lg">
            <div className="flex flex-col">
              <h3 className="text-3xl font-bold  text-purple-700">100 %</h3>
              <p className="text-1xl py-3  font-semibold">
                {" "}
                Completion Projects
              </p>
            </div>
          </div> */}

          {info.map((cur, i) => {
            return (
              <div
                key={i}
                className="bg-white py-3 text-center drop-shadow-lg  rounded-lg"
              >
                <div className="flex flex-col">
                  <h3 className="text-3xl font-bold  text-purple-700">
                    {cur.perc}
                  </h3>
                  <p className="text-1xl py-3  font-semibold"> {cur.text}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default About;

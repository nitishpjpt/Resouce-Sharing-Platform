import axios from "axios";
import React, { useEffect, useState } from "react";
import Footer from "./Footer";

const Notes = () => {
  const [user, setUser] = useState([]);

  useEffect(() => {
    const fetchDetails = async () => {
      const response = await axios.post(
        "https://resouce-sharing-platform.vercel.app/api/v1/user/Notes"
      );
      setUser(response.data.data.notes);
      console.log(response.data.data.notes);
    };

    fetchDetails();
  }, []);

  return (
    <>
   
      <div className="px-5 pb-10 lg:pt-[7rem]  grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-3 gap-8 place-items-center">
        {user.map((item, index) => (
          <div
            key={index}
            className="relative flex  flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md"
          >
            <div className="relative  mx-4 mt-4 md:h-[32vh] md:w-[25vw]  bg-inherit overflow-hidden rounded-xl  bg-clip-border text-gray-700">
              <img
                src="https://img.freepik.com/free-vector/image-upload-concept-landing-page_23-2148298503.jpg?ga=GA1.1.671655325.1715182066&semt=ais_hybrid"
                className="h-full w-full object-fit"
                alt={item.title}
              />
            </div>
            <div className="p-6">
              <div className="mb-2 flex items-center justify-between">
                <p className="block font-sans text-base font-medium leading-relaxed text-blue-gray-900 antialiased">
                  {item.title}
                </p>
                <p className="flex font-sans text-base font-medium leading-relaxed text-blue-gray-900 antialiased">
                  <h6 className="text-gray-700 ">sem:</h6>
                  {item.semester}
                </p>
              </div>
              <p className="block font-sans text-sm font-normal leading-normal text-gray-700 antialiased opacity-75">
                {item.description}
              </p>
            </div>
            <div className="p-6 pt-0">
              <button className="block bg-[#336AEA] text-white w-full select-none rounded-lg bg-blue-gray-900/10 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-blue-gray-900 transition-all hover:scale-105 focus:scale-105 focus:opacity-[0.85] active:scale-100 active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none">
                <a
                  href={`http://localhost:8000/temp/${item.Files}`} // Ensure the correct backend URL
                  download={item.Files} // Set the download name dynamically
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ textDecoration: "none", color: "inherit" }}
                >
                  Download
                </a>
              </button>
            </div>
          </div>
        ))}
      </div>
      <Footer />
    </>
  );
};

export default Notes;

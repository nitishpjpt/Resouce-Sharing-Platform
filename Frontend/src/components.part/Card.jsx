import React from "react";
import { FcFlashOn } from "react-icons/fc";
import { FcVideoCall } from "react-icons/fc";
import { BsFillChatFill } from "react-icons/bs";
import { GiNotebook } from "react-icons/gi";
import { FaRobot } from "react-icons/fa";

const Card = () => {
  return (
    <>
      <div className="bg-[#17153B] pt-[4rem] w-full h-full p-5 text-center block  justify-center items-center">
        <h2 className="text-white text-5xl flex justify-center items-center">
          Features <FcFlashOn />
        </h2>
        <section class=" flex justify-center items-center dark:bg-dark pb-10 lg:pt-[120px] lg:pb-20">
          <div class="container mx-auto">
            <div class="flex flex-wrap">
              <div class="w-full  md:w-1/2 xl:w-1/3">
                <div class="mb-10 overflow-hidden duration-300 bg-white rounded-lg dark:bg-dark-2 shadow-1 hover:shadow-3 dark:shadow-card dark:hover:shadow-3">
                  <img
                    src="https://i.pinimg.com/564x/3b/07/42/3b0742ad981e131c3625fbe27f649481.jpg"
                    alt="image"
                    class="w-full"
                  />
                  <div class="p-8 text-center sm:p-9 md:p-7 xl:p-9">
                    <h3>
                      <a
                        href="javascript:void(0)"
                        class="text-dark flex justify-center  items-center gap-2 dark:text-white hover:text-primary mb-4  text-xl font-semibold sm:text-[22px] md:text-xl lg:text-[22px] xl:text-xl 2xl:text-[22px]"
                      >
                        Seamless Video Calls{" "}
                        <FcVideoCall className="text-3xl" />
                      </a>
                    </h3>
                    <p class="text-base leading-relaxed text-body-color dark:text-dark-6 mb-7">
                      Experience effortless communication with our seamless
                      video call feature. Connect face-to-face with teachers and
                      students in real-time, facilitating interactive learning
                      sessions, virtual classrooms, and collaborative
                      discussions
                    </p>
                    <a
                      href="javascript:void(0)"
                      class="inline-block py-2 hover:bg-[#4B70F5] text-base font-medium transition border rounded-full text-body-color bg-[#17153B] hover:border-primary hover:bg-primary border-gray-3 px-7 text-white dark:border-dark-3 dark:text-dark-6"
                    >
                      View Details
                    </a>
                  </div>
                </div>
              </div>
              <div class="w-full px-4 md:w-1/2 xl:w-1/3">
                <div class="mb-10 overflow-hidden duration-300 bg-white rounded-lg dark:bg-dark-2 shadow-1 hover:shadow-3 dark:shadow-card dark:hover:shadow-3">
                  <img
                    src="https://media.licdn.com/dms/image/D5612AQHNqfJqBvEEYQ/article-cover_image-shrink_720_1280/0/1693932095780?e=2147483647&v=beta&t=hROzM7JhCVE55LgJN4FOwjOxurXbHFu3qumXKkoYkT0"
                    alt="image"
                    class="w-full"
                  />
                  <div class="p-8 text-center sm:p-9 md:p-7 xl:p-9">
                    <h3>
                      <a
                        href="javascript:void(0)"
                        class="dark:text-white flex justify-center  items-center gap-2 hover:text-primary mb-4 block text-xl font-semibold sm:text-[22px] md:text-xl lg:text-[22px] xl:text-xl 2xl:text-[22px]"
                      >
                        Ai Chat Assistant{" "}
                        <FaRobot className="text-2xl text-[#4B70F5]" />
                      </a>
                    </h3>
                    <p class="text-base leading-relaxed text-body-color mb-7">
                      Engage in effortless communication with our AI-powered
                      chat feature. Connect instantly with teachers and students
                      in real-time, fostering interactive learning, personalized
                      assistance, and collaborative discussions in a dynamic
                      virtual environment.virtual classrooms, and collaborative
                      discussions making it simple to access 
                      
                    </p>
                    <a
                      href="javascript:void(0)"
                      class="inline-block hover:bg-[#4B70F5] bg-[#17153B] text-white py-2 text-base font-medium transition border rounded-full text-body-color hover:border-primary hover:bg-primary border-gray-3 px-7 hover:text-white dark:border-dark-3 dark:text-dark-6"
                    >
                      View Details
                    </a>
                  </div>
                </div>
              </div>
              <div class="w-full px-4 md:w-1/2 xl:w-1/3 shadow-lg">
                <div class="mb-10 overflow-hidden duration-300 bg-white  rounded-lg dark:bg-dark-2 shadow-1 hover:shadow-3 dark:shadow-card dark:hover:shadow-3">
                  <img
                    src="https://i.pinimg.com/564x/21/68/f2/2168f22101f5fe780394eb73d7a42baf.jpg"
                    alt="image"
                    class="w-full"
                  />
                  <div class="p-8 text-center sm:p-9 md:p-7 xl:p-9">
                    <h3>
                      <a
                        href="javascript:void(0)"
                        class="text-dark flex justify-center  items-center gap-2 dark:text-white hover:text-primary mb-4 block text-xl font-semibold sm:text-[22px] md:text-xl lg:text-[22px] xl:text-xl 2xl:text-[22px]"
                      >
                        Versatile Notes Upload{" "}
                        <GiNotebook className="text-2xl text-[#2BD4C7]" />
                      </a>
                    </h3>
                    <p class="text-base leading-relaxed text-body-color mb-7">
                      Easily upload and share notes in any format, including
                      PDF, PNG, and JPG. Our versatile notes upload feature
                      allows teachers and students to share valuable resources
                      effortlessly, enhancing collaboration and making it simple
                      to access and distribute study
                    </p>
                    <a
                      href="javascript:void(0)"
                      class="inline-block  bg-[#17153B]  text-white hover:bg-[#4B70F5] py-2 text-base font-medium transition border rounded-full text-body-color hover:border-primary hover:bg-primary border-gray-3 px-7 hover:text-white dark:border-dark-3 dark:text-dark-6"
                    >
                      View Details
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Card;

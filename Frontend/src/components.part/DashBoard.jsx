import React, { useEffect, useState } from "react";
import { RiAccountPinCircleFill } from "react-icons/ri";
import axios from "axios";

const DashBoard = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchDetails = async () => {
      try {
        const response = await axios.post(
          "https://resouce-sharing-platform-bakcend.vercel.app/api/v1/user/Dashboard"
        );
        // Assuming response.data.users contains the user array
        setUsers(response.data.data.user);
        console.log(response.data.data.user);
      } catch (error) {
        console.error("Error fetching user data", error);
      }
    };

    fetchDetails();
  }, []);

  return (
    <>
    

      <div className="mx-auto max-w-screen-lg px-4 py-8 sm:px-8 pt-20">
        <div className="flex items-center justify-center pb-6 ">
          <div>
            <span className="text-lg flex justify-center items-center gap-2 text-center text-gray-500">
              <RiAccountPinCircleFill className="text-[#FFD717] text-2xl" />{" "}
              View accounts of registered users and their role
            </span>
          </div>
          <div className="flex items-center justify-between">
            <div className="ml-10 space-x-8 lg:ml-40"></div>
          </div>
        </div>
        <div className="overflow-y-hidden rounded-lg border">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="bg-blue-600 text-left text-xs font-semibold uppercase tracking-widest text-white">
                  <th className="px-5 py-3">ID</th>
                  <th className="px-5 py-3">Avtar and Full Name</th>
                  <th className="px-5 py-3">User Role</th>
                  <th className="px-5 py-3">Created at</th>
                  <th className="px-5 py-3">Status</th>
                </tr>
              </thead>

              <tbody className="text-gray-500">
                {Array.isArray(users) &&
                  users.map((item, index) => (
                    <tr key={index}>
                      <td className="border-b border-gray-200 bg-white px-5 py-5 text-sm">
                        <p className="whitespace-no-wrap">{index + 1}</p>
                      </td>
                      <td className="border-b border-gray-200 bg-white px-5 py-5 text-sm">
                        <div className="flex items-center">
                          <div className="h-10 w-10 flex-shrink-0">
                            <img
                              className="h-full w-full rounded-full"
                              src={item.avtar}
                              alt=""
                            />
                          </div>
                          <div className="ml-3">
                            <p className="whitespace-no-wrap">
                              {item.username}
                            </p>
                          </div>
                        </div>
                      </td>
                      <td className="border-b border-gray-200 bg-white px-5 py-5 text-sm">
                        <p className="whitespace-no-wrap">{item.role}</p>
                      </td>
                      <td className="border-b border-gray-200 bg-white px-5 py-5 text-sm">
                        <p className="whitespace-no-wrap">
                          {new Date(item.createdAt).toLocaleDateString()}
                        </p>
                      </td>
                      <td className="border-b border-gray-200 bg-white px-5 py-5 text-sm">
                        <span className="rounded-full bg-green-200 px-3 py-1 text-xs font-semibold text-green-900">
                          Active
                        </span>
                      </td>
                    </tr>
                  ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
};

export default DashBoard;

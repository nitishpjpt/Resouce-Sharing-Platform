import React, { useState } from "react";
import { useDropzone } from "react-dropzone";
import Footer from "./Footer";
import { IoLogoDropbox } from "react-icons/io";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Teacher = () => {
  const [fileUrl, setFileUrl] = useState([]);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [semester, setSemester] = useState("");

  const onDrop = (acceptedFiles) => {
    setFileUrl(acceptedFiles);
  };

  const { getRootProps, getInputProps } = useDropzone({ onDrop });

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    fileUrl.forEach((Files) => {
      formData.append("Files", Files);
    });
    formData.append("title", title);
    formData.append("description", description);
    formData.append("semester", semester);

    try {
      // Replace with your API endpoint
      const response = await axios.post(
        "api/v1/user/teachers",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      toast.success("File is uploaded successfully!", {
        position: "top-right",
        autoClose: 3000,
      });
      console.log(response.data);
    } catch (error) {
      toast.error("File is not uploaded!", {
        position: "top-right",
        autoClose: 3000,
      });
      console.log("techers notes does not uploded", error);
    }
  };

  return (
    <>
      
      <ToastContainer />
      <div className="max-w-md mx-auto p-[5rem] bg-[#111A2F]">
        <form onSubmit={handleSubmit} className="space-y-6">
          <div
            {...getRootProps({
              className:
                "dropzone border-2 border-dashed border-gray-300 p-6 text-center cursor-pointer",
            })}
          >
            <input {...getInputProps()} name="Files" />
            <p className="text-gray-500 text-center flex justify-center items-center">
              Drag 'n' drop some files here, or click to select files{" "}
              <IoLogoDropbox className="text-center flex justify-center items-center text-[5rem] text-[#4F46E5] " />
            </p>
          </div>
          <div>
            {fileUrl.map((file) => (
              <p key={file.path} className="text-gray-700">
                {file.path} - {file.size} bytes
              </p>
            ))}
          </div>
          <div>
            <label className="block text-md font-medium text-gray-700">
              <h5 className="text-white">Title:</h5>
              <input
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                required
                className="mt-1 block p-2 w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
              />
            </label>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              <h5 className="text-white">Description:</h5>
              <textarea
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                required
                className="mt-1 block p-3 w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
              />
            </label>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              <h5 className="text-white">Semester:</h5>
              <input
                type="number"
                value={semester}
                onChange={(e) => setSemester(e.target.value)}
                required
                className="mt-1 block p-2 w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
              />
            </label>
          </div>
          <button
            type="submit"
            className="w-full py-2 px-4 bg-indigo-600 text-white font-semibold rounded-md shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
          >
            Upload
          </button>
        </form>
      </div>
      <Footer />
    </>
  );
};

export default Teacher;

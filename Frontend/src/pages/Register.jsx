import React, { useState } from "react";
import Footer from "../components.part/Footer";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Register = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("");
  const [avtar, setAvatar] = useState(null);

  const navigate = useNavigate();
  //submit handler
  const submitHandler = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("username", username);
    formData.append("email", email);
    formData.append("password", password);
    formData.append("role", role);
    formData.append("avtar", avtar);

    try {
      const response = await axios.post(
        "http://localhost:8000/api/v1/user/Register",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      console.log(response.data);
      // Store user data in local storage
      localStorage.setItem("user", JSON.stringify(response.data));

      toast.success("User registered successfully!", {
        position: "top-right",
        autoClose: 3000,

        onClose: () => {
          navigate("/login");
        },
      });
    } catch (error) {
      console.log("User registration failed", error);
      toast.error("User registration failed. Please try again.", {
        position: "top-right",
        autoClose: 3000,
      });
    }
  };

  return (
    <>
      <ToastContainer />
      <section className="bg-[#17153B] min-h-screen flex box-border justify-center items-center">
        <div className="bg-[#0059E7] rounded-2xl flex max-w-3xl p-5 items-center">
          <div className="md:block hidden w-1/2 text-white">
            <h2 className="font-bold text-3xl text-white">Register</h2>
            <p className="text-sm text-white">Be a member of our community</p>
            <img
              className="rounded-2xl max-h-[1600px] pt-5"
              src="https://img.freepik.com/free-vector/cyber-data-security-online-concept-illustration-internet-security-information-privacy-protection_1150-37328.jpg?ga=GA1.1.671655325.1715182066&semt=sph"
              alt="login form image"
            />
          </div>
          <div className="md:w-1/2 px-8 border rounded-lg p-5">
            <form onSubmit={submitHandler} className="flex flex-col gap-2">
              <input
                className="p-2 mt-8 rounded-xl border"
                type="text"
                name="username"
                placeholder="Username"
                onChange={(e) => setUsername(e.target.value)}
              />

              <input
                className="p-2 border rounded-lg "
                type="file"
                name="avtar"
                placeholder="Upload your profile"
                onChange={(e) => setAvatar(e.target.files[0])}
              />

              <label className="p-2 flex justify-start gap-4  items-center  rounded-xl border ">
                <select
                  name="role"
                  className="p-1 border rounded-lg m-[2px]"
                  value={role}
                  onChange={(e) => setRole(e.target.value)}
                  required
                >
                  <option className="" value="student">
                    Student
                  </option>
                  <option value="teacher">Teacher</option>
                </select>
                Choose your role
              </label>

              <input
                className="p-2 rounded-xl border"
                type="email"
                name="email"
                placeholder="Email"
                onChange={(e) => setEmail(e.target.value)}
              />
              <div className="relative">
                <input
                  className="p-2 rounded-xl border w-full"
                  type="password"
                  name="password"
                  placeholder="Password"
                  onChange={(e) => setPassword(e.target.value)}
                />
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="gray"
                  className="bi bi-eye absolute top-1/2 right-3 -translate-y-1/2 cursor-pointer z-20 opacity-100"
                  viewBox="0 0 16 16"
                >
                  <path d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8zM1.173 8a13.133 13.133 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.133 13.133 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5c-2.12 0-3.879-1.168-5.168-2.457A13.134 13.134 0 0 1 1.172 8z"></path>
                  <path d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5zM4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0z"></path>
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-eye-slash-fill absolute top-1/2 right-3 -z-1 -translate-y-1/2 cursor-pointer hidden"
                  id="mama"
                  viewBox="0 0 16 16"
                >
                  <path d="m10.79 12.912-1.614-1.615a3.5 3.5 0 0 1-4.474-4.474l-2.06-2.06C.938 6.278 0 8 0 8s3 5.5 8 5.5a7.029 7.029 0 0 0 2.79-.588zM5.21 3.088A7.028 7.028 0 0 1 8 2.5c5 0 8 5.5 8 5.5s-.939 1.721-2.641 3.238l-2.062-2.062a3.5 3.5 0 0 0-4.474-4.474L5.21 3.089z"></path>
                  <path d="M5.525 7.646a2.5 2.5 0 0 0 2.829 2.829l-2.83-2.829zm4.95.708-2.829-2.83a2.5 2.5 0 0 1 2.829 2.829zm3.171 6-12-12 .708-.708 12 12-.708.708z"></path>
                </svg>
              </div>
              <button
                className="bg-[#002D74] text-white py-2 rounded-xl hover:scale-105 duration-300 hover:bg-[#206ab1] font-medium"
                type="submit"
              >
                Register
              </button>
            </form>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Register;

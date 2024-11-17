import React, { useState } from "react";
import axios from "axios";

const Student = () => {
  const [questions, setquestions] = useState("");
  const [answers, setAnswers] = useState("");

  async function generateAnswer() {
    setAnswers("Answer is loading....");
    const response = await axios({
      url: "https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash-latest:generateContent?key=AIzaSyBEFoXdk_I3pWcKjovxaO1miQ7xGtuPOCs",
      method: "post",
      data: {
        contents: [
          {
            parts: [{ text: questions }],
          },
        ],
      },
    });
    setAnswers(
      response["data"]["candidates"][0]["content"]["parts"][0]["text"]
    );
  }

  return (
    <>
      <div className="bg-[#111A2F] justify-around h-auto min-h-screen flex flex-col lg:flex-row items-center pt-[5rem] px-4">
        <div className="w-full lg:w-[30%] mb-6 lg:mb-0 lg:pl-10">
          <img
            className="rounded-lg w-full lg:w-auto"
            src="https://img.freepik.com/free-vector/chat-bot-concept-illustration_114360-8361.jpg?ga=GA1.1.671655325.1715182066&semt=ais_hybrid"
            alt="Chat Bot Illustration"
          />
        </div>
        <div className="text-white font-bold flex flex-col items-center lg:items-start lg:w-[50%]">
          <h1 className="text-3xl lg:text-4xl pb-6 text-center lg:text-left">
            How Can I Help You?
          </h1>
          <textarea
            value={questions}
            onChange={(e) => setquestions(e.target.value)}
            className="w-full lg:w-[27vw] h-[10vh] text-black rounded-md p-2 mb-4"
            placeholder="Type your question here..."
          ></textarea>
          <button
            onClick={generateAnswer}
            className="bg-[#4338CA] text-white w-full lg:w-auto px-6 py-3 rounded-lg hover:bg-[#5753d7] transition-all"
          >
            Generate Answer
          </button>
          <p className="text-white pt-5 w-full lg:w-[50vw] h-[30vh] lg:h-[50vh] overflow-auto bg-gray-800 rounded-md p-4 mt-4">
            {answers}
          </p>
        </div>
      </div>
    </>
  );
};

export default Student;

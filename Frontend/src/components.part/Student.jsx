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
      <div className="bg-[#111A2F]  justify-center h-[100vh] flex pt-[10vw]">
        <div className="w-[30vw] pl-10">
          <img
            className="rounded-lg"
            src="https://img.freepik.com/free-vector/chat-bot-concept-illustration_114360-8361.jpg?ga=GA1.1.671655325.1715182066&semt=ais_hybrid"
          />
        </div>
        <div className="text-white font-bold block items-center text-center">
          <h1 className="text-4xl pb-6">How Can i Help you?</h1>
          <textarea
            value={questions}
            onChange={(e) => setquestions(e.target.value)}
            className="w-[27vw] h-[8vh] text-black  rounded-md p-2"
          ></textarea>
          <button
            onClick={generateAnswer}
            className="block items-center mx-36 bg-[#4338CA] p-3 rounded-lg mt-4"
          >
            Generate Answer
          </button>
          <p className="text-white pt-5 w-[50vw] h-[50vh] overflow-auto">
            {answers}
          </p>
        </div>
      </div>
    </>
  );
};

export default Student;

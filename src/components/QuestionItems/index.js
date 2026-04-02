import React, { useState } from "react";

const QuestionItems = ({ item }) => {
  const [show, setShow] = useState(false);

  return (
    <div className="bg-white shadow-md rounded-xl p-5 mb-5 border">
      
      {/* Question */}
      <div
        className="text-gray-800 text-lg mb-3"
        dangerouslySetInnerHTML={{ __html: item.question }}
      />

      {/* Toggle Button */}
      <button
        onClick={() => setShow(prev => !prev)}
        className="bg-blue-500 text-white px-4 py-1 rounded-lg hover:bg-blue-600 transition"
      >
        {show ? "Hide Answer" : "Show Answer"}
      </button>

      {/* Answer */}
      {show && (
        <div className="mt-4 text-green-600">
          <strong>Answer: </strong>
          <span
            dangerouslySetInnerHTML={{ __html: item.correct_answer }}
          />
        </div>
      )}

    </div>
  );
};

export default QuestionItems;
// libs
import { useState } from "react";

// icons
import {
  IconBuddyAddIcon,
  IconBuddyArrowDownIcon,
  IconBuddyDottedLineIcon,
} from "@/atoms/icons";

const QuestionCreator = (props) => {
  const { createdQuestions, question } = props;

  const [selectedQuestionType, setSelectedQuestionType] =
    useState("multiple-choice");

  const handleSelectedQuestionType = (e) => {
    setSelectedQuestionType(e.target.value);
  };

  return (
    <div className="flex flex-col items-center px-4 w-full">
      <div className="py-4 px-3 border rounded-md w-full">
        <div className="mb-3 relative w-fit">
          <select
            name="questionType"
            onClick={handleSelectedQuestionType}
            className="border bg-gray-100 p-2 pr-6 outline-none rounded-md appearance-none focus:ring-2 ring-violet-600"
          >
            <option value="multiple-choice">Multiple choice</option>
            <option value="short-long-question">Short/Long question</option>
          </select>
          <IconBuddyArrowDownIcon className="h-3 w-3 absolute right-1 top-1/2 transform -translate-y-1/2" />
        </div>
        <div>
          <input
            className="outline-none border-b focus:border-gray-400 w-4/5 py-2 px-1"
            placeholder="Question title"
          />
          <div className="my-3">
            <div className="flex items-center">
              <button className="ring-violet-700 focus:ring-2 rounded-full flex items-center justify-center me-1">
                <IconBuddyAddIcon className="text-violet-800 me-0" />
              </button>
              <input
                className="outline-none border-b focus:border-gray-400 py-2 px-1 "
                placeholder="Option"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="flex-col justify-center items-center">
        {question.id !== createdQuestions.length && (
          <IconBuddyDottedLineIcon className="rotate-90 block" />
        )}
      </div>
    </div>
  );
};

export default QuestionCreator;
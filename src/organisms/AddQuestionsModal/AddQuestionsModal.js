// libs
import { useState } from "react";

// components
import Button from "@/atoms/Button";
import QuestionCreator from "@/molecules/QuestionCreator/QuestionCreator";
import { IconBuddyAddIcon, IconBuddyDottedLineIcon } from "@/atoms/icons";

// utils
import {
  multipleChoiceTemplate,
  shortLongQuestionTemplate,
} from "@/utils/questions.template";

const AddQuestionsModal = (props) => {
  const { handleIsAddQuestionModalOpen } = props;
  const [createdQuestions, setCreatedQuestions] = useState([
    multipleChoiceTemplate,
  ]);

  const handleModalClose = () => {
    handleIsAddQuestionModalOpen((prev) => !prev);
  };

  const handleAddNewQuestion = () => {
    setCreatedQuestions((prev) => [
      ...prev,
      { ...multipleChoiceTemplate, id: prev.length + 1 },
    ]);
  };

  const handleUpdateQuestionType = (id, questionType) => {
    const updatedQuestions = createdQuestions.map((item) => {
      if (item.id === id) {
        if (questionType === "multiple-choice") {
          return { ...multipleChoiceTemplate, id: item.id };
        }

        if (questionType === "short-long-question") {
          return { ...shortLongQuestionTemplate, id: item.id };
        }
      }
      return item;
    });

    setCreatedQuestions(updatedQuestions);
  };

  const handleAddOptions = (id) => {
    const updatedQuestions = createdQuestions.map((item) => {
      if (item.id === id) {
        if (!item.options) {
          return { ...item, options: [""] };
        }
        return { ...item, options: [...item.options, ""] };
      }
      return item;
    });

    setCreatedQuestions(updatedQuestions);
  };

  return (
    <div className="fixed top-0 left-0 bg-modal-rgba w-screen h-screen flex justify-center items-center">
      <div className="mt-14 w-11/12 h-[80vh] bg-white border rounded-xl shadow-lg md:w-6/12 md:mt-20">
        <div className="flex flex-col justify-between h-full">
          <div className="pt-8 pb-9 flex flex-col items-center overflow-y-auto">
            {createdQuestions.map((question, i) => (
              <QuestionCreator
                key={`${question}-${i}`}
                createdQuestions={createdQuestions}
                question={question}
                setCreatedQuestions={setCreatedQuestions}
                handleAddOptions={handleAddOptions}
                handleUpdateQuestionType={handleUpdateQuestionType}
              />
            ))}
            <div className="">
              <IconBuddyDottedLineIcon className="rotate-90 block" />
              <button
                className="ring-violet-700 focus:ring-2 rounded-full flex items-center justify-center"
                onClick={handleAddNewQuestion}
              >
                <IconBuddyAddIcon className="text-violet-700 me-0" />
              </button>
            </div>
          </div>
          <div className="flex justify-end py-3 px-3 bg-slate-100 border-t rounded-b-xl">
            <Button
              className="mx-2 bg-red-500 focus:bg-red-600"
              onClick={handleModalClose}
            >
              Cancel
            </Button>
            <Button className="mx-2">Save</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddQuestionsModal;

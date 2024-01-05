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
        } else if (questionType === "short-long-question") {
          return { ...shortLongQuestionTemplate, id: item.id };
        }
      }
      return item;
    });

    setCreatedQuestions(updatedQuestions);
  };

  const handleAddOptions = (questionId, optionId, value = "") => {
    const question = createdQuestions.filter((item) => item.id === questionId);

    const isOptionExist = question[0].options?.filter(
      (item) => item.id === optionId
    );

    let updatedQuestions;

    // if optionId found then update the options
    if (isOptionExist && isOptionExist.length >= 1) {
      const updatedOption = question[0].options?.map((item) => {
        if (item.id === optionId) {
          return { ...item, option: value };
        }
        return item;
      });

      updatedQuestions = createdQuestions.map((item) => {
        if (item.id == questionId) {
          return { ...item, options: updatedOption };
        }
        return item;
      });
    } else {
      // if optionId not found then create an empty question
      updatedQuestions = createdQuestions.map((item) => {
        if (item.id === questionId) {
          return {
            ...item,
            options: [
              ...item.options,
              { id: item.options.length + 1, option: value },
            ],
          };
        }
        return item;
      });
    }

    setCreatedQuestions(updatedQuestions);
  };

  const handleInputAnswer = (id, value) => {
    const updatedQuestions = createdQuestions.map((item) => {
      if (item.id === id) {
        return { ...item, answers: [value] };
      }
      return item;
    });

    setCreatedQuestions(updatedQuestions);
  };

  const handleInputQuestionTitle = (questionId, value) => {
    const updatedQuestions = createdQuestions.map((item) => {
      if (item.id === questionId) {
        return { ...item, question_title: value };
      }
      return item;
    });

    setCreatedQuestions(updatedQuestions);
  };

  const handleInputQuestionMark = (questionId, value) => {
    const updatedQuestions = createdQuestions.map((item) => {
      if (item.id === questionId) {
        return { ...item, mark: value };
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
                handleInputQuestionTitle={handleInputQuestionTitle}
                handleAddOptions={handleAddOptions}
                handleInputAnswer={handleInputAnswer}
                handleUpdateQuestionType={handleUpdateQuestionType}
                handleInputQuestionMark={handleInputQuestionMark}
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

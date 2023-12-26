// libs
import { useEffect, useState } from "react";
import { useRouter } from "next/router";

// components
import FilterTab from "@/molecules/FilterTab/FilterTab";
import Button from "@/atoms/Button";
import EmptyMessageBox from "@/molecules/EmptyMessageBox/EmptyMessageBox";
import AddQuestionsModal from "@/organisms/AddQuestionsModal/AddQuestionsModal";

// utils
import cn from "@/utils/cn";
import { questionPageFilterTab } from "@/utils/constants";

const QuestionsTemplate = () => {
  const [isAddQuestionModalOpen, setAddQuestionModalOpen] = useState(false);

  const handleIsAddQuestionModalOpen = () => {
    setAddQuestionModalOpen((prev) => !prev);
  };

  return (
    <section className="mt-2">
      <div className="flex flex-col justify-between md:flex-row md:items-center">
        <FilterTab tabs={questionPageFilterTab} />
        <Button
          className="text-white w-fit bg-indigo-600 focus:bg-indigo-600 hover:bg-indigo-700 px-3 mt-2 md:mt-0"
          onClick={handleIsAddQuestionModalOpen}
        >
          Add questions
        </Button>
      </div>
      <div className="custom-height flex justify-center items-center">
        <EmptyMessageBox message="Looks like you haven't created any questions." />
      </div>

      {isAddQuestionModalOpen && <AddQuestionsModal />}
    </section>
  );
};

export default QuestionsTemplate;

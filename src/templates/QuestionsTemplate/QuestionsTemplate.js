// libs
import { useEffect, useState } from "react";
import { useRouter } from "next/router";

// components
import FilterTab from "@/molecules/FilterTab/FilterTab";
import Button from "@/atoms/Button";

// utils
import cn from "@/utils/cn";
import { questionPageFilterTab } from "@/utils/constants";

const QuestionsTemplate = () => {
  return (
    <section className="mt-2">
      <div className="flex flex-col justify-between md:flex-row md:items-center">
        <FilterTab tabs={questionPageFilterTab} />
        <Button className="text-white w-fit bg-indigo-700 focus:bg-indigo-700 px-3 mt-2 md:mt-0">
          Add questions
        </Button>
      </div>
    </section>
  );
};

export default QuestionsTemplate;

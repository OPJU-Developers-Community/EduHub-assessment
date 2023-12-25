// libs
import { useEffect, useState } from "react";
import { useRouter } from "next/router";

// utils
import cn from "@/utils/cn";

const QuestionsTemplate = () => {
  const [tab, setTab] = useState("questions");
  const router = useRouter();

  useEffect(() => {
    router.push({ query: { tab: tab } });
  }, [tab]);

  const handleCurrentTab = (selectedTab) => {
    setTab(selectedTab);
  };

  return (
    <section className="mt-2">
      <p className="text-3xl font-medium">Questions</p>
      <ul className="mt-8 flex bg-gray-100 w-fit p-2 rounded-md">
        <li className="px-1">
          <button
            className={cn("p-2 rounded-md font-normal", {
              "bg-purple-600 text-white": tab === "questions",
            })}
            onClick={() => handleCurrentTab("questions")}
          >
            Questions
          </button>
        </li>
        <li className="px-1">
          <button
            className={cn("p-2 rounded-md font-normal", {
              "bg-purple-600 text-white": tab === "questions-set",
            })}
            onClick={() => handleCurrentTab("questions-set")}
          >
            Questions set
          </button>
        </li>
      </ul>
    </section>
  );
};

export default QuestionsTemplate;

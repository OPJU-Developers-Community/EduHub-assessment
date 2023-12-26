// libs
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

// utils
import cn from "@/utils/cn";

const FilterTab = (props) => {
  const { tabs } = props;
  const [selectedTab, setSelectedTab] = useState(tabs[0].query);

  const router = useRouter();

  useEffect(() => {
    router.push({ query: { tab: selectedTab } });
  }, [selectedTab]);

  const handleCurrentTab = (selectedTab) => {
    setSelectedTab(selectedTab);
  };

  return (
    <ul className="flex bg-gray-100 w-fit p-2 rounded-md">
      {tabs.map((tab, i) => (
        <li className="px-1" key={`${tab}-${i}`}>
          <button
            className={cn("p-2 rounded-md text-sm font-medium", {
              "bg-gray-800 text-white": tab.query === selectedTab,
            })}
            onClick={() => handleCurrentTab(tab.query)}
          >
            {tab.name}
          </button>
        </li>
      ))}
    </ul>
  );
};

export default FilterTab;

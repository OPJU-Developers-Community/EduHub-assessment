import cn from "@/utils/cn";

export const AddIcon = (props) => {
  const { className } = props;
  return (
    <svg
      className={cn("inline w-4 h-4 me-1", className)}
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M12 12H5Z" fill="currentColor" />
      <path
        d="M12 5V12M12 12V19M12 12H19M12 12H5"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};

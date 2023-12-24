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

export const IconBuddyMenuIcon = (props) => {
  const { className } = props;
  return (
    <svg
      className={cn("inline w-4 h-4 me-1", className)}
      viewBox="-5 -7 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fill="currentColor"
        d="M1 0h5a1 1 0 1 1 0 2H1a1 1 0 1 1 0-2m7 8h5a1 1 0 0 1 0 2H8a1 1 0 1 1 0-2M1 4h12a1 1 0 0 1 0 2H1a1 1 0 1 1 0-2"
      />
    </svg>
  );
};

export const IconBuddyArrowCloseIcon = (props) => {
  const { className } = props;
  return (
    <svg
      className={cn("inline w-4 h-4 me-1", className)}
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fill="currentColor"
        d="M13.83 19a1 1 0 0 1-.78-.37l-4.83-6a1 1 0 0 1 0-1.27l5-6a1 1 0 0 1 1.54 1.28L10.29 12l4.32 5.36a1 1 0 0 1-.78 1.64"
      />
    </svg>
  );
};

export const IconBuddyDashboardIcon = (props) => {
  const { className } = props;
  return (
    <svg
      className={cn(
        "inline w-5 h-5 me-1 text-gray-500 group-[.is-selected]:text-white",
        className
      )}
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fill="currentColor"
        d="M14.5 10.33h6.67A.83.83 0 0 0 22 9.5A7.5 7.5 0 0 0 14.5 2a.83.83 0 0 0-.83.83V9.5a.83.83 0 0 0 .83.83"
      />
      <path
        fill="currentColor"
        d="M21.08 12h-8.15a.91.91 0 0 1-.91-.91V2.92A.92.92 0 0 0 11 2a10 10 0 1 0 11 11a.92.92 0 0 0-.92-1"
      />
    </svg>
  );
};

export const IconBuddyExamsIcon = (props) => {
  const { className } = props;
  return (
    <svg
      className={cn(
        "inline w-5 h-5 me-1 text-gray-500 group-[.is-selected]:text-white",
        className
      )}
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fill="currentColor"
        d="M6.615 21q-.69 0-1.152-.462Q5 20.075 5 19.385V4.615q0-.69.463-1.152Q5.925 3 6.615 3H14.5L19 7.5v3.404q-.498.067-.93.304q-.433.236-.8.604l-6 5.975V21zm7.039 0v-2.21l5.333-5.307q.148-.13.307-.19q.16-.062.32-.062q.165 0 .334.064q.17.065.298.193l.925.945q.123.148.188.307q.064.16.064.32t-.061.322q-.062.162-.19.31L15.862 21zm5.96-4.985l.924-.955l-.925-.945l-.95.95zM14 8h4l-4-4l4 4l-4-4z"
      />
    </svg>
  );
};

export const IconBuddyQuestionsIcon = (props) => {
  const { className } = props;
  return (
    <svg
      className={cn(
        "inline w-5 h-5 me-1 text-gray-500 group-[.is-selected]:text-white",
        className
      )}
      viewBox="0 0 512 512"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fill="currentColor"
        d="M428 224H288a48 48 0 0 1-48-48V36a4 4 0 0 0-4-4h-92a64 64 0 0 0-64 64v320a64 64 0 0 0 64 64h224a64 64 0 0 0 64-64V228a4 4 0 0 0-4-4"
      />
      <path
        fill="currentColor"
        d="M419.22 188.59L275.41 44.78a2 2 0 0 0-3.41 1.41V176a16 16 0 0 0 16 16h129.81a2 2 0 0 0 1.41-3.41"
      />
    </svg>
  );
};

export const IconBuddyEvaluationIcon = (props) => {
  const { className } = props;
  return (
    <svg
      className={cn(
        "inline w-5 h-5 me-1 text-gray-500 group-[.is-selected]:text-white",
        className
      )}
      viewBox="0 0 32 32"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fill="currentColor"
        d="M26 30h-2v-3a5.006 5.006 0 0 0-5-5h-6a5.006 5.006 0 0 0-5 5v3H6v-3a7.008 7.008 0 0 1 7-7h6a7.008 7.008 0 0 1 7 7zM5 6a1 1 0 0 0-1 1v9h2V7a1 1 0 0 0-1-1"
      />
      <path
        fill="currentColor"
        d="M4 2v2h5v7a7 7 0 0 0 14 0V4h5V2Zm7 2h10v3H11Zm5 12a5 5 0 0 1-5-5V9h10v2a5 5 0 0 1-5 5"
      />
    </svg>
  );
};

export const IconBuddyLogoutIcon = (props) => {
  const { className } = props;
  return (
    <svg
      className={cn("inline w-5 h-5 me-1 text-red-500", className)}
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fill="currentColor"
        d="m21.207 11.293l-3-3a1 1 0 1 0-1.414 1.415L18.086 11H12.5a1 1 0 0 0 0 2h5.586l-1.293 1.293a1 1 0 1 0 1.414 1.414l3-3a1 1 0 0 0 0-1.415Z"
      />
      <path
        fill="currentColor"
        d="M12.5 13a1 1 0 0 1 0-2h4V5a3.003 3.003 0 0 0-3-3h-8a3.003 3.003 0 0 0-3 3v14a3.003 3.003 0 0 0 3 3h8a3.003 3.003 0 0 0 3-3v-6Z"
        opacity=".5"
      />
    </svg>
  );
};

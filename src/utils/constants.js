import {
  IconBuddyDashboardIcon,
  IconBuddyEvaluationIcon,
  IconBuddyExamsIcon,
  IconBuddyQuestionsIcon,
} from "@/atoms/icons";

export const defaultProfilePic =
  "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjJ8fHByb2ZpbGV8ZW58MHx8MHx8fDA%3D";

export const navLinks = [
  {
    name: "Dashboard",
    path: "/",
    icon: <IconBuddyDashboardIcon />,
  },
  {
    name: "Exams",
    path: "/exams",
    icon: <IconBuddyExamsIcon />,
  },
  {
    name: "Questions",
    path: "/questions",
    icon: <IconBuddyQuestionsIcon />,
  },
  {
    name: "Mark evaluation",
    path: "/mark-evaluation",
    icon: <IconBuddyEvaluationIcon />,
  },
];

export const questionPageFilterTab = [
  {
    name: "Questions",
    query: "questions",
  },
  {
    name: "Questions sets",
    query: "questions-sets",
  },
];

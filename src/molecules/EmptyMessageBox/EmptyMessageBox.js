import { EmptyBoxIcon } from "@/atoms/icons";

const EmptyMessageBox = (props) => {
  const { message } = props;
  return (
    <div className="flex flex-col items-center justify-center">
      <EmptyBoxIcon className="w-48 h-36" />
      <p className="text-center text-lg text-gray-700">{message}</p>
    </div>
  );
};

export default EmptyMessageBox;

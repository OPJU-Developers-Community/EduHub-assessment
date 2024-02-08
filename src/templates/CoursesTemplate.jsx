import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const CoursesTemplate = () => {
  return (
    <div>
      <h1 className="text-2xl font-medium">Interactive Courses</h1>
      <p className="mt-1">
        View and edit the interactive courses you have created
      </p>

      <div className="flex flex-col justify-between mt-5 sm:flex-row sm:items-center">
        {/* search bar */}
        <Input
          placeholder="Search course by name..."
          className="min-w-[200px] max-w-[500px] mr-5"
        />
        <Button
          className="bg-indigo-600 text-gray-50 font-medium hover:bg-indigo-700 mt-3 sm:mt-0"
          asChild
        >
          <Link href="/course-manager/new">Create a new course</Link>
        </Button>
      </div>

      {/* list of created courses */}
    </div>
  );
};

export default CoursesTemplate;

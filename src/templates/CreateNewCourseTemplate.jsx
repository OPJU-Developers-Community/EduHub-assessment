import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { useForm } from "react-hook-form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader } from "@/components/ui/card";

const schema = yup.object({
  title: yup.string().required("Please add a course title"),
  category: yup.string().required("Please add a category"),
});

const CreateNewCourseTemplate = () => {
  const form = useForm({
    resolver: yupResolver(schema),
    defaultValues: {
      title: "",
      subtitle: "",
      description: "",
      category: "",
    },
  });

  const handleSaveChanges = (data) => {
    console.log(data);
  };

  return (
    <div className="flex flex-col-reverse lg:flex-row">
      <div className="w-[95%] max-w-[800px] lg:mr-10">
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(handleSaveChanges)}
            className="space-y-5"
          >
            <FormField
              control={form.control}
              name="title"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Title</FormLabel>
                  <FormControl>
                    <Input
                      className="focus-visible:ring-2 focus-visible:ring-indigo-500 py-4"
                      placeholder="Fundamental of web development"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="subtitle"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Subtitle</FormLabel>
                  <FormControl>
                    <Input
                      className="focus-visible:ring-2 focus-visible:ring-indigo-500 py-4"
                      placeholder="A beginners guide to web development"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="description"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Description</FormLabel>
                  <FormControl>
                    <Textarea
                      className="focus-visible:ring-2 focus-visible:ring-indigo-500 py-4"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="category"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Category</FormLabel>
                  <FormControl>
                    <Input
                      className="focus-visible:ring-2 focus-visible:ring-indigo-500 py-4"
                      placeholder="Programming"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <Button
              className="w-fit capitalize bg-indigo-600 mt-5 text-gray-50 font-medium hover:bg-indigo-700"
              type="submit"
            >
              Save changes
            </Button>
          </form>
        </Form>
      </div>

      <div className="w-[20%] min-w-[300px] h-[380px] space-y-2">
        <p className="font-medium">Course Image</p>
        <Card className="shadow-lg">
          <div className="rounded-t-md bg-gray-950 flex flex-col items-center justify-center py-10">
            <img src="/logo.png" className="h-[90px]" />
            <p className="text-gray-200 text-lg font-medium">
              Course Image Missing
            </p>
          </div>
          <CardContent className="mt-3">
            <ul className="list-disc pl-3 text-sm font-medium text-gray-700">
              <li>Minimum size - 1280 x 720</li>
              <li>Maximum size - 2560 x 1440</li>
              <li>.png, .jpg, .jpeg</li>
            </ul>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default CreateNewCourseTemplate;

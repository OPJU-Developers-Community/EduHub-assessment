import axios from "axios";

export const createNewCourseApi = async (payload) => {
  try {
    const response = await axios.post(
      `${process.env.NEXT_PUBLIC_URL}/course/create-new-course`,
      payload
    );
    return response.data;
  } catch (error) {
    throw error;
  }
};

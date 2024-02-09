import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { createNewCourseApi } from "../apis/createNewCourse.api";

export const createNewCourse = createAsyncThunk(
  "createNewCourse",
  async (payload, thunkAPI) => {
    try {
      const response = await createNewCourseApi(payload);
      return response;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);

const initialState = {
  data: null,
  status: "idle",
  message: "",
};

const courseManager = createSlice({
  name: "courseManager",
  initialState,
  reducers: {
    resetState: (state) => {
      state.data = null;
      state.status = "idle";
      state.message = "";
    },
  },
  extraReducers: (builder) => {
    builder.addCase(createNewCourse.pending, (state, _) => {
      state.status = "loading";
    });

    builder.addCase(createNewCourse.fulfilled, (state, action) => {
      state.data = action.payload?.data;
      state.status = "success";
      state.message = action.payload?.message;
    });

    builder.addCase(createNewCourse.rejected, (state, action) => {
      state.status = "failed";
      state.data = null;
      state.message = action.payload?.message;
    });
  },
});

export default courseManager.reducer;

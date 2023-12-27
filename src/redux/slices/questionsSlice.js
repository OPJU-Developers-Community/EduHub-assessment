const { createSlice } = require("@reduxjs/toolkit");

const initialState = {
  data: null,
  status: "idle", // loading | success | failed
  message: "",
};

const questionsSlice = createSlice({
  name: "questions",
  initialState,
  reducer: {},
});

export default questionsSlice.reducer;

import { combineReducers } from "@reduxjs/toolkit";

import examManagerReducer from "./slices/examManager.slice";
import examsReducer from "./slices/exams.slice";
import courseManagerReducer from "./slices/courseManager.slice";

const rootReducer = combineReducers({
  exams: examsReducer,
  examManager: examManagerReducer,
  courseManager: courseManagerReducer,
});

export default rootReducer;

const { combineReducers } = require("@reduxjs/toolkit");

// slices
import questionsReducer from "./slices/questionsSlice";

const rootReducer = combineReducers({
  questions: questionsReducer,
});

export default rootReducer;

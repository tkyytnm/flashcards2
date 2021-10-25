import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { addQuizIdToTopic } from "../topics/topicsSlice";

export const addQuizIdToTopicWhenCreateQuiz = (payload) => {
  return (dispatch) => {
    dispatch(addQuiz(payload));
    dispatch(
      addQuizIdToTopic({
        topicId: payload.topicId,
        quizId: payload.id
      })
    );
  };
};

const quizzesSlice = createSlice({
  name: "quizzes",
  initialState: { quizzes: {} },
  reducers: {
    addQuiz: (state, action) => {
      state.quizzes = {
        ...state.quizzes,
        [action.payload.id]: action.payload
      };
      return state;
    }
  }
});

export const selectQuizzes = (state) => state.quizzes.quizzes;
export const { addQuiz } = quizzesSlice.actions;
export const quizzesReducer = quizzesSlice.reducer;

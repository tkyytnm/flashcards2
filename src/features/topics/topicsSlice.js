import { createSlice } from "@reduxjs/toolkit";

const topicsSlice = createSlice({
  name: "topics",
  initialState: { topics: {} },
  reducers: {
    addTopic: (state, action) => {
      state.topics = {
        ...state.topics,
        [action.payload.id]: {
          ...action.payload,
          quizIds: []
        }
      };
      return state;
    },
    addQuizIdToTopic: (state, action) => {
      state.topics[action.payload.topicId].quizIds.push(action.payload.quizId);
    }
  }
});

export const selectTopics = (state) => state.topics.topics;
export const { addTopic, addQuizIdToTopic } = topicsSlice.actions;
export const topicsReducer = topicsSlice.reducer;

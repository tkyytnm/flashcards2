import { createSlice } from "@reduxjs/toolkit";

const cardsSlice = createSlice({
  name: "cards",
  initialState: { cards: {} },
  reducers: {
    addCard: (state, action) => {
      state.cards = {
        ...state.cards,
        [action.payload.id]: action.payload
      };
      return state;
    }
  }
});

export const selectCards = (state) => state.cards.cards;
export const { addCard } = cardsSlice.actions;
export const cardsReducer = cardsSlice.reducer;
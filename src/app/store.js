import { configureStore } from "@reduxjs/toolkit";
import gameReducer from "./game-slice.js";

export const store = configureStore({
  reducer: {
    game: gameReducer,
  },
});

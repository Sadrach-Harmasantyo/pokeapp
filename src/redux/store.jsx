import { configureStore } from "@reduxjs/toolkit";
import pokeReducer from "./slices/pokemonSlice";

export const store = configureStore({
  reducer: {
    poke: pokeReducer,
  },
});

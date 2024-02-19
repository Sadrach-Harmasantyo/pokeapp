import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  pokemons: [],
  status: "idle",
  error: null,
  searchTerm: "",
};

export const fetchPokemons = createAsyncThunk("pokemons/fetchPokemons", async () => {
  const limit = 1500;
  const response = await axios.get(`https://pokeapi.co/api/v2/pokemon?limit=${limit}`);
  return response.data.results;
});

const pokeSlice = createSlice({
  name: "poke",
  initialState,
  reducers: {
    setSearchTerm: (state, action) => {
      state.searchTerm = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchPokemons.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchPokemons.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.pokemons = action.payload;
        // state.status = "loading";
      })
      .addCase(fetchPokemons.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export const { setSearchTerm } = pokeSlice.actions;
export default pokeSlice.reducer;

export const selectSearchTerm = (state) => state.poke.searchTerm;
export const selectAllPokemons = (state) => state.poke.pokemons;
export const selectPokemonStatus = (state) => state.poke.status;

export const searchPokemons = (searchTerm) => (state) => {
  const pokemons = selectAllPokemons(state);
  if (!searchTerm) {
    return pokemons;
  } else {
    return pokemons.filter((pokemon) => pokemon.name.toLowerCase().includes(searchTerm.toLowerCase()));
  }
};

export const selectTotalPages = (state) => {
  const pokemons = selectAllPokemons(state);
  const pokemonPerPage = 12;
  return Math.ceil(pokemons.length / pokemonPerPage);
};

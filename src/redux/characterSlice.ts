import { Character } from './../generated/graphql';
import { createSlice } from '@reduxjs/toolkit';
import { RootState } from './store';

interface CharacterState {
  favoriteCharacters: Character[];
  favoriteCharactersCount: number;
}

// initial store state
const initialState: CharacterState = {
  favoriteCharacters: [],
  favoriteCharactersCount: 0,
};

export const characterSlice = createSlice({
  name: 'characterSlice',
  initialState,

  // reducer functions in the reducer object
  reducers: {
    addCharacter: (state, action) => {
      state.favoriteCharacters = [...state.favoriteCharacters, action.payload];
    },

    removeCharacter: (state, action) => {
      state.favoriteCharacters = [
        ...state.favoriteCharacters.filter(
          (favoriteCharacter) =>
            favoriteCharacter.id !== (action.payload as Character).id,
        ),
      ];
    },
  },
});

// create and export actions from character slice
export const { addCharacter, removeCharacter } = characterSlice.actions;

// selector for characters
export const selectCharacters = (state: RootState) => state.favoriteCharacters;

// selector for counting number of favorite characters added
export const favoriteCharactersCount = (state: RootState) =>
  state.favoriteCharacters.favoriteCharacters.length;

export default characterSlice.reducer;

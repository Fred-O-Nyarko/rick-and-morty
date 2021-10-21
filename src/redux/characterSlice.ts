import { Character } from './../generated/graphql';
import { createSlice } from '@reduxjs/toolkit';
import { RootState } from './store';

interface CharacterState {
  favoriteCharacters: Character[];
  favoriteCharactersCount: number;
}

const initialState: CharacterState = {
  favoriteCharacters: [],
  favoriteCharactersCount: 0,
};

export const characterSlice = createSlice({
  name: 'characterSlice',
  initialState,

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

export const { addCharacter, removeCharacter } = characterSlice.actions;

export const selectCharacters = (state: RootState) => state.favoriteCharacters;

export const favoriteCharactersCount = (state: RootState) =>
  state.favoriteCharacters.favoriteCharacters.length;

export default characterSlice.reducer;

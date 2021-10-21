import { Character } from './../generated/graphql';
import { createSlice } from '@reduxjs/toolkit';
import { RootState } from './store';

interface CharacterState {
  preferedCharacters: Character[];
}

const initialState: CharacterState = {
  preferedCharacters: [],
};

export const characterSlice = createSlice({
  name: 'characterSlice',
  initialState,

  reducers: {
    addCharacter: (state, action) => {
      state.preferedCharacters = [...state.preferedCharacters, action.payload];
    },

    removeCharacter: (state, action) => {
      state.preferedCharacters = [
        ...state.preferedCharacters.filter(
          (preferedCharacter) =>
            preferedCharacter.id !== (action.payload as Character).id,
        ),
      ];
    },
  },
});

export const { addCharacter, removeCharacter } = characterSlice.actions;

export const selectCharacters = (state: RootState) => state.preferedCharacters;

export default characterSlice.reducer;

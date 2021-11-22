import { Character } from './../generated/graphql';
import { createSlice } from '@reduxjs/toolkit';
import { RootState } from './store';

interface CharacterState {
  favoriteCharacters: Character[];
  favoriteCharactersCount: number;
  characterProfile: Character;
}

// initial store state
const initialState: CharacterState = {
  favoriteCharacters: [],
  favoriteCharactersCount: 0,
  characterProfile: {} as Character,
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

    setCharacterProfile: (state, action) => {
      state.characterProfile = action.payload;
    },
  },
});

// create and export actions from character slice
export const { addCharacter, removeCharacter, setCharacterProfile } =
  characterSlice.actions;

// selector for characters
export const selectCharacters = (state: RootState) => state.characters;

// selector for counting number of favorite characters added
export const favoriteCharactersCount = (state: RootState) =>
  state.characters.favoriteCharacters.length;

// selector for getting character passed in redux

export const characterProfile = (state: RootState) =>
  state.characters.characterProfile;

export default characterSlice.reducer;

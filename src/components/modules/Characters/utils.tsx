import { useAppSelector } from '../../../redux/hooks';
import { Character } from '../../../generated/graphql';

export function isInList(
  favoriteCharacters: Character[],
  character: Character,
) {
  return !!favoriteCharacters.find(
    (favoriteCharacter) => favoriteCharacter.id === character.id,
  );
}

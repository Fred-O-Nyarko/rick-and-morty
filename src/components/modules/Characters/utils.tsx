import { useAppSelector } from '../../../redux/hooks';
import { Character } from '../../../generated/graphql';

export function isInList(
  preferedCharacters: Character[],
  character: Character,
) {
  return !!preferedCharacters.find(
    (preferedCharacter) => preferedCharacter.id === character.id,
  );
}

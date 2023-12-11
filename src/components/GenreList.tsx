import { HStack, List, ListItem,Image, Spinner,Button } from '@chakra-ui/react';
import useGenres, { Genre } from '../hooks/useGenres'
import getCroppedImageUrl from '../services/image-url';

interface Props{
  onSelectedGenre:(genre:Genre) => void
  selectedGenre:Genre | null
}

const GenreList = ({onSelectedGenre,selectedGenre}:Props) => {

  //const { genres, error, isLoading } = useGenres();
  const { data, error, isLoading } = useGenres();

  if (error) return null;
  if (isLoading) return <Spinner />;
  return (
    <List>
    {data.map(genre => (
    <ListItem key={genre.id} padding='5px'>
        <HStack>
         <Image boxSize='32px' borderRadius={8} src={getCroppedImageUrl(genre.image_background)}/>
        <Button 
        onClick={()=> onSelectedGenre(genre)}
        key={genre.id}
        fontSize='lg' 
        variant='link'
        fontWeight={genre.id === selectedGenre?.id? 'bold' : 'normal'}
        >{genre.name}</Button>
        </HStack>
        </ListItem>
    ))}
    </List>
  )
}

export default GenreList
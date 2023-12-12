import { SimpleGrid, Text } from "@chakra-ui/react";
import useGames from "../hooks/useGames";
import GameCard from "./GameCard";
import GameCardSkeleton from "./GameCardSkeleton";
import GameCardContainer from "./GameCardContainer";
import { Genre } from "../hooks/useGenres";
import { Platform } from "../hooks/usePlatformes";
import { GameQuery } from "../App";


interface Props{
  //selectedGenre:Genre | null
  //selectedPlatform:Platform | null
  gameQuery:GameQuery

}
//const GameGrid = ({selectedGenre,selectedPlatform}:Props) => {
  const GameGrid = ({gameQuery}:Props) => {

  //const { data, error, isLoading } = useGames(selectedGenre,selectedPlatform);
  const { data, error, isLoading } = useGames(gameQuery);
  const skeletons = [1, 2, 3, 4, 5, 6];
  
  if(error) return <Text>Error</Text>

  return (
  
      <SimpleGrid
        columns={{ sm: 1, md: 2, lg: 3, xl: 4 }}
        padding="10px"
        spacing={6}
      >
        {isLoading &&
          skeletons.map((skeleton) => (
            <GameCardContainer key={skeleton}>
              <GameCardSkeleton  />
            </GameCardContainer>
          ))}

        {data.map((game) => (
          <GameCardContainer key={game.id}>
            <GameCard  game={game} />
          </GameCardContainer>
        ))}
        
      </SimpleGrid>

  );
};

export default GameGrid;

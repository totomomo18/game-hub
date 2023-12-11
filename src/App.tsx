import { Grid, GridItem,Show } from "@chakra-ui/react";
import NavBar from "./components/NavBar";
import GameGrid from "./components/GameGrid";
import GenreList from "./components/GenreList";
import { useState } from "react";
import { Genre } from "./hooks/useGenres";
import PlatformSelector from "./components/PlatformSelector";
import { Platform } from "./hooks/useGames";

function App() {

   const [selectedGenre,setSelectedGenre]= useState<Genre | null>(null)
   const [selectedPlatform,setSelectedPlatform]= useState<Platform | null>(null)

  return (

<Grid templateAreas={
{
    base:`"nav" "main"`,
    
    md:`"nav nav" "aside main"`
}}

templateColumns={{
    base:'1fr',
    md:'200px 1fr'
 }}

>    
      <GridItem area="nav">
        <NavBar/>
      </GridItem>
     
      <Show above="md">
      <GridItem area="aside" paddingX={5}>
      <GenreList selectedGenre={selectedGenre} onSelectedGenre={(genre)=> setSelectedGenre(genre)}/>
      </GridItem>
      
      </Show>
      
      <GridItem area="main">
        <PlatformSelector selectedPlatform={selectedPlatform} onSelectPlatform={(platform)=>setSelectedPlatform(platform)} />
       <GameGrid selectedGenre={selectedGenre} selectedPlatform={selectedPlatform}/>
      </GridItem>
    </Grid>



  );
}
//onSelectedPlatform={(platform)=> setSelectedPlatform(platform)}
export default App;

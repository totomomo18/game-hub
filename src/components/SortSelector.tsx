import { Menu, MenuButton,Button, MenuList, MenuItem } from '@chakra-ui/react'
import { BsChevronDown } from 'react-icons/bs'
import usePlatforms, { Platform } from '../hooks/usePlatformes';

interface Props{
    //onSelectPlatform:(platform:Platform) => void
    //selectedPlatform:Platform | null
    //{onSelectPlatform,selectedPlatform}:Props
    //{selectedPlatform?.name || 'Platforms'}
}    


const SortSelector = () => {

    const { data, error, isLoading } = usePlatforms();

    if(error) return null
      
  return (
    <Menu>
    <MenuButton as={Button} rightIcon={<BsChevronDown/>}>
     Order by: Relevance
        </MenuButton>
    <MenuList>
    <MenuItem key={1}>Relevance</MenuItem>
    <MenuItem key={2}>Date added</MenuItem>
    <MenuItem key={3}>Name</MenuItem>
    <MenuItem key={4}>Release date</MenuItem>
    <MenuItem key={5}>Populrity</MenuItem>
    <MenuItem key={6}>Average rating</MenuItem>
    </MenuList>
</Menu>
  )
}

export default SortSelector

/*
{data.map((platform) => (   
     <MenuItem key={platform.id}
     onClick={()=> onSelectPlatform(platform)}
     >{platform.name}</MenuItem>
    ))}
*/
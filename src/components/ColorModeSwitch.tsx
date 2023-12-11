import { HStack, Switch, Text, useColorMode } from '@chakra-ui/react'


const ColorModeSwitch = () => {

const { toggleColorMode,colorMode } = useColorMode();


  return (
    <HStack>
<Switch colorScheme='green' isChecked={colorMode === 'light'} onChange={toggleColorMode} />
<Text>{colorMode === 'light'?'VB/Eclipse Mode':'Java/Inteliij Mode'}</Text>
    </HStack>
  )
}

export default ColorModeSwitch
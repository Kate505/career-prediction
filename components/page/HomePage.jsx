'use client';
import {Box, Button, Card, Center, ChakraProvider, Heading, Image, VStack} from "@chakra-ui/react";
import {ArrowForwardIcon} from "@chakra-ui/icons";

export default function Home() {
  return (
    <ChakraProvider>
      <Box className='h-screen relative overflow-hidden'>
        <Card h='full' w='full' className='gradient' direction='row' overflow='hidden' variant='outline'>
          <Image src='./computer.gif' objectFit='cover' className='h-screen'  alt='thinking'/>
          <VStack h='full' w='full' p='10'>
            <Center w='full' h='full'>
              <Heading className='font-mono' as='h1' size='4xl' color='teal.400' >¿Decidiendo a qué dedicarte el resto de tu vida?</Heading>
            </Center>
            <Center w='full' h='full'>
              <Heading as='h2' color='teal.400' size='2xl'>¡No te angusties! ¡Toma nuestro test!</Heading>
            </Center>
            <Center w='full' h='full' display='flex' alignSelf='flex-end' justifyContent='flex-end'>
              <Button rightIcon={<ArrowForwardIcon />} colorScheme='gray' size='lg'>
                Iniciar el Test
              </Button>
            </Center>
          </VStack>
        </Card>
      </Box>
    </ChakraProvider>
  )
}

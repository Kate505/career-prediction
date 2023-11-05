'use client';
import {
  Card, Center, Grid, Heading, Hide, Image, Show, SimpleGrid, VStack
} from "@chakra-ui/react";
import StartButton from "@/components/page/StartButton";

export default function HomePage() {
  return (
    <Card h='full' w='full' direction='row'>
      <SimpleGrid columns={{md: 1, lg: 2}} h='full' w='full'>
        <Show above='lg'>
          <Image src='./computer.gif' objectFit='cover' className='h-screen' alt='thinking'/>
        </Show>
        <VStack h='full' w='full' p='10'>
          <Center w='full' h='full'>
            <Heading w='full' bgGradient='linear(to-r, green.200, pink.500)' bgClip='text' className='font-mono' as='h1' size='4xl'>
              ¿Decidiendo a qué dedicarte el resto de tu vida?
            </Heading>
          </Center>
          <Center w='full' h='full'>
            <Heading as='h2' color='#0d3b66' size='2xl'>¡No te angusties! ¡Toma nuestro test!</Heading>
          </Center>
          <Center w='full' h='full' display='flex' alignSelf='flex-end' justifyContent='flex-end'>
            <StartButton/>
          </Center>
        </VStack>
      </SimpleGrid>
    </Card>
  )
}

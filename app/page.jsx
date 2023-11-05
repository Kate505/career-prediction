'use client';
import { Box, ChakraProvider } from "@chakra-ui/react";
import HomePage from '@/components/page/HomePage'

export default function Home() {
  return (
    <Box className='h-screen overflow-hidden'>
      <HomePage />
    </Box>
  )
}

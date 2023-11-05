import {ArrowForwardIcon} from "@chakra-ui/icons";
import {Box} from "@chakra-ui/react";

export default function StartButton() {
  return (
    <Box
      as='button'
      className='ov-btn-slide-left'
      transition='all 0.2s cubic-bezier(.08,.52,.52,1)'
      bgGradient='linear(to-r, rgba(49, 151, 149, 1), rgba(56, 161, 105, 1))'
      borderColor='#ccd0d5'
      p={4}
      w='md'
      fontSize='xl'
      color='white'
      fontWeight='bold'
      borderRadius='md'
      _active={{
        bgGradient: 'linear(to-r, rgba(49, 151, 149, 0.5), rgba(56, 161, 105, 0.5))',
        transform: 'scale(0.98)',
        borderColor: '#bec3c9',
      }}
      _focus={{
        boxShadow:
          '0 0 1px 2px rgba(49, 151, 149, .75), 0 1px 1px rgba(56, 161, 105, .15)',
      }}
    >
      Iniciar el Test
      <ArrowForwardIcon ps='5' boxSize='12' />
    </Box>
  );
};

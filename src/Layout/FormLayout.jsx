import * as React from 'react';
import { Box, Container } from '@chakra-ui/react';
import Background from '../assets/bg-1.png';

export const FormLayout = ({ children }) => {
  return (
    <>
      <Box
        height='100%'
        display='flex'
        alignItems='center'
        justifyContent='center'
        backgroundBlendMode='darken'
        background={`center linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(${Background}) `}
        backgroundSize='cover'>
        <Container
          width={{
            base: '80%',
            md: '40%',
          }}
          backgroundColor='white'
          padding='7'
          borderRadius='xl'>
          <Box
            color='black'
            position='relative'
            width='100%'
            display='flex'
            justifyContent='center'
            alignItems='center'
            flexDir='column'>
            {children}
          </Box>
        </Container>
      </Box>
    </>
  );
};

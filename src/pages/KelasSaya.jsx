import { Layout } from '../Component/Layout';
import { NavBar } from '../Component/Header/NavBar';
import {
  Box,
  useDisclosure,
  Container,
  SimpleGrid,
  Heading,
  Divider,
} from '@chakra-ui/react';

import { Card } from '../Component/Card';
import { SideBar } from '../Component/Sidebar';

import { useState } from 'react';

export const Kelas = () => {
  const { isOpen, onClose, onOpen } = useDisclosure();
  const [animate, setAnimate] = useState(false);

  return (
    <>
      <Layout
        title='Kelas | Bagussr'
        description='Kelas page to operate main content and classess fron logging user'>
        <NavBar />
        <Box w='100%' h='100%' position='relative'>
          <Box
            position='relative'
            top='0'
            h='auto'
            width='100%'
            p='10'
            onClick={() => {
              onClose(animate === true && setAnimate(!animate));
            }}>
            <Container
              maxWidth='100%'
              w={{ base: '100%', md: '75%' }}
              p={{ md: '5', base: '3.5' }}>
              <Heading as='h1' mb='5'>
                Kelas Saya
              </Heading>
              <Divider mb='5' borderColor='black' />
              <SimpleGrid spacing='10' minChildWidth='15rem'>
                {[1, 2, 3, 4, 5].map(x => (
                  <Card key={x} />
                ))}
              </SimpleGrid>
            </Container>
          </Box>
          <SideBar
            animate={animate}
            onOpen={onOpen}
            isOpen={isOpen}
            setAnimate={setAnimate}
          />
        </Box>
      </Layout>
    </>
  );
};

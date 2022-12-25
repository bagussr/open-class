import {
  Divider,
  Box,
  Heading,
  HStack,
  Container,
  useDisclosure,
  Text,
  Image,
  Stack,
  Flex,
  Icon,
  Button,
} from '@chakra-ui/react';
import { useState } from 'react';
import { BsClockFill } from 'react-icons/bs';
import { FaMedal } from 'react-icons/fa';

import { NavBar } from '../Component/Header/NavBar';
import { Layout } from '../Component/Layout';
import { SideBar } from '../Component/Sidebar';

export const DetailKelas = () => {
  const { isOpen, onClose, onOpen } = useDisclosure();
  const [animate, setAnimate] = useState(false);
  return (
    <>
      <Layout
        title='Kelas Front-End Developer'
        description='Page detail kelas to complete description about kelas'>
        <NavBar />
        <Box w='100%' h='100%' position='relative'>
          <Box
            position='relative'
            top='0'
            h='auto'
            width='100%'
            onClick={() => {
              onClose(animate === true && setAnimate(!animate));
            }}>
            <Container
              maxWidth='100%'
              w={{ base: '100%', md: '90%' }}
              p={{ md: '5', base: '3.5' }}>
              <HStack w='full' spacing='10' p='10'>
                <Image src='https://th.bing.com/th/id/OIP.jfo_cJb62SDLIpTe6xJWTQHaEk?pid=ImgDet&rs=1' />
                <Stack dir='column'>
                  <Heading as='h2' fontSize='xl'>
                    Front-End Developer
                  </Heading>
                  <Divider borderColor='black' />
                  <Flex align='center' gap='3'>
                    <Icon
                      as={BsClockFill}
                      color='brand.primary.100'
                      w='5'
                      h='5'
                    />
                    <Text fontSize={{ md: '2xs', base: '3xs' }}>
                      15 Jam Belajar
                    </Text>
                  </Flex>
                  <Flex align='center' gap='3'>
                    <Icon as={FaMedal} color='brand.primary.100' w='5' h='5' />
                    <Text fontSize={{ md: '2xs', base: '3xs' }}>Pemula</Text>
                  </Flex>
                  <Text>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Explicabo, minima cupiditate, architecto facere iste in
                    optio eum ea exercitationem dolores autem totam voluptates
                    obcaecati quod qui sint, ipsum neque repudiandae.
                  </Text>
                </Stack>
                <Stack w='full' spacing={3}>
                  <Button borderRadius='none' variant='brand'>
                    Mulai Belajar
                  </Button>
                  <Button borderRadius='none' variant='menu'>
                    Lihat Silabus
                  </Button>
                  <Button borderRadius='none' variant='menu'>
                    Informasi Kelas
                  </Button>
                </Stack>
              </HStack>
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

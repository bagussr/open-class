import {
  Flex,
  Heading,
  VStack,
  Image,
  Text,
  Input,
  Button,
  useDisclosure,
  Box,
} from '@chakra-ui/react';
import { useState } from 'react';

import { Layout } from '../Component/Layout';
import { NavBar } from '../Component/Header/NavBar';
import { SideBar } from '../Component/Sidebar';

export const Profile = ({ edit }) => {
  const { isOpen, onClose, onOpen } = useDisclosure();
  const [animate, setAnimate] = useState(false);

  return (
    <>
      <Layout
        title='Profile | Bagussr'
        description='profile page for description user'>
        <NavBar />
        <Box w='100%' h='100%' position='relative' as='main'>
          <Flex
            p='20'
            onClick={() => {
              onClose(animate === true && setAnimate(!animate));
            }}>
            <Image
              borderRadius='50%'
              width='64'
              h='64'
              display={{ base: 'none', md: 'inline' }}
              src='https://cdn.dribbble.com/users/1782018/screenshots/4592002/dribble_shot.jpg'
            />
            <VStack w='50%' align='start' px='20'>
              <Heading>Bagus Sr</Heading>
              <Text color='brand.gray.secondary' fontSize='xl'>
                Mahasiswa Universitas Pendidikan Indonesia
              </Text>
              <Text>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit
                quod placeat culpa quia mollitia nulla. Animi aut sapiente
                molestias, necessitatibus distinctio reprehenderit recusandae
                repellendus, eum voluptatibus eaque at sed assumenda?
              </Text>
            </VStack>
            {edit === true ? (
              <VStack align='start'>
                <Heading as='h3' fontSize='sm' fontWeight='normal'>
                  Informasi Pribadi
                </Heading>
                <VStack
                  as='form'
                  boxShadow='sm'
                  p='8'
                  spacing='5'
                  border='1px'
                  borderColor='gray.100'>
                  <Input
                    type='text'
                    variant='flushed'
                    fontSize='md'
                    placeholder='Nama Lengkap'
                  />
                  <Input
                    type='text'
                    variant='flushed'
                    fontSize='md'
                    placeholder='Deskripsi Diri'
                  />
                  <Input
                    type='text'
                    variant='flushed'
                    fontSize='md'
                    placeholder='Status'
                  />
                  <Button size='sm' variant='brand'>
                    Simpan
                  </Button>
                </VStack>
              </VStack>
            ) : null}
          </Flex>
          <SideBar
            animate={animate}
            isOpen={isOpen}
            onOpen={onOpen}
            setAnimate={setAnimate}
          />
        </Box>
      </Layout>
    </>
  );
};

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
  Skeleton,
} from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { useSelector } from 'react-redux';

import { Layout } from '../Component/Layout';
import { NavBar } from '../Component/Header/NavBar';
import { SideBar } from '../Component/Sidebar';

export const Profile = ({ edit }) => {
  const { isOpen, onClose, onOpen } = useDisclosure();
  const [animate, setAnimate] = useState(false);
  const [user, setUser] = useState();
  const auth = useSelector(state => state.auth);

  const getUsers = async () => {
    await axios
      .get(
        'https://openclass-api-gateway-production.up.railway.app/users/profiles',
        {
          headers: {
            authorization: `Bearer ${auth.key}`,
          },
        }
      )
      .then(res => setUser(res.data.data.user));
  };

  useEffect(() => {
    getUsers();
  }, []);

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
              <Heading>{user?.name}</Heading>
              <Text color='brand.gray.secondary' fontSize='xl'>
                Mahasiswa Universitas Pendidikan Indonesia
              </Text>
              <Text>{user?.email}</Text>
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
            name={user?.name}
          />
        </Box>
      </Layout>
    </>
  );
};

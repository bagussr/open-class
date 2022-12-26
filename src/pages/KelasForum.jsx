import {
  Box,
  Button,
  Container,
  Flex,
  useDisclosure,
  Text,
} from '@chakra-ui/react';
import { useState, useEffect } from 'react';
import { NavBar } from '../Component/Header/NavBar';
import { Layout } from '../Component/Layout';
import { SideBar } from '../Component/Sidebar';
import { useSelector } from 'react-redux';
import axios from 'axios';
import { AiOutlinePlus } from 'react-icons/ai';

export const KelasForum = () => {
  const { isOpen, onClose, onOpen } = useDisclosure();
  const [animate, setAnimate] = useState(false);
  const [forum, setForum] = useState([]);
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
        title='Forum Kelas'
        description='This page for handling kelas and dokumen'>
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
              {forum.length > 0 ? null : (
                <>
                  <Flex align='center' gap='5'>
                    <Text>Tambah Kelas</Text>
                    <Button borderRadius='full' p='0'>
                      <AiOutlinePlus />
                    </Button>
                  </Flex>
                </>
              )}
            </Container>
          </Box>
          <SideBar
            isOpen={isOpen}
            onClose={onClose}
            animate={animate}
            onOpen={onOpen}
            setAnimate={setAnimate}
            name={user?.name}
          />
        </Box>
      </Layout>
    </>
  );
};

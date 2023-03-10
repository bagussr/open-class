import { Layout } from '../Component/Layout';
import { NavBar } from '../Component/Header/NavBar';
import {
  Box,
  useDisclosure,
  Container,
  SimpleGrid,
  Heading,
  Divider,
  Text,
} from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

import { Card } from '../Component/Card';
import { SideBar } from '../Component/Sidebar';
import axios from 'axios';

export const Kelas = () => {
  const { isOpen, onClose, onOpen } = useDisclosure();
  const [animate, setAnimate] = useState(false);
  const [kelas, setKelas] = useState([]);
  const [user, setUser] = useState();
  const auth = useSelector(state => state.auth);

  const getKelas = async id => {
    await axios
      .get(
        `https://openclass-api-gateway-production.up.railway.app/classrooms?owner=${id}`,
        {
          headers: {
            authorization: `Bearer ${auth.key}`,
          },
        }
      )
      .then(res => setKelas(res.data.data.classrooms))
      .catch(err => setKelas([]));
  };

  const getProfile = async () => {
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
    getProfile();
    getKelas(user?.id);
  }, [kelas]);

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
                {kelas.length > 0 ? (
                  kelas.map(x => (
                    <Card
                      key={x.id}
                      name={x.name}
                      level={x.level}
                      description={x.description}
                    />
                  ))
                ) : (
                  <Text>Belum Memiliki Kelas</Text>
                )}
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

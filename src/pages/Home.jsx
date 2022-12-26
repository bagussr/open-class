import {
  Box,
  Divider,
  Heading,
  Image,
  Text,
  Container,
  SimpleGrid,
} from '@chakra-ui/react';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { Layout } from '../Component/Layout';
import { NavBar } from '../Component/Header/NavBar';
import { Card } from '../Component/Card';

export const Home = () => {
  const auth = useSelector(state => state.auth);
  const [kelas, setKelas] = useState([]);

  const getKelas = async () => {
    await axios
      .get(
        'https://openclass-api-gateway-production.up.railway.app/classrooms',
        {
          headers: {
            authorization: `Bearer ${auth.key}`,
          },
        }
      )
      .then(res => setKelas(res.data.data.classrooms));
  };

  useEffect(() => {
    getKelas();
  }, [auth]);
  return (
    <>
      <Layout title='Home | Open Class'>
        <NavBar>
          <Box position='relative' h='52' w='100%'>
            <Image
              src='https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80'
              w='100%'
              h='100%'
              objectFit='cover'
              filter='brightness(70%)'
              alt='header'
              title='cover'
            />
            <Box
              position='absolute'
              top='0'
              left='0'
              p='10'
              w='100vw'
              color='white'>
              <Heading>Open Class</Heading>
              <Text w='80%' mt='8' wordBreak='break-all'>
                Belajar ilmu baru itu sangat menyenangkan, apalagi di aplikasi
                Open Class segala terasa mudah dengan kelas yang diberikan
                gratis
              </Text>
            </Box>
          </Box>
        </NavBar>
        <Container w='100% ' maxW='100%' p='10'>
          <Text>Semua Kelas</Text>
          <SimpleGrid minChildWidth='15rem' spacing='8' p='5' w='100%'>
            {kelas.map(x => (
              <Card
                key={x.id}
                name={x.name}
                description={x.description}
                level={x.level}
                id={x.id}
              />
            ))}
          </SimpleGrid>
        </Container>
      </Layout>
    </>
  );
};

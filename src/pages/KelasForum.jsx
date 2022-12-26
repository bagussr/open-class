import {
  Box,
  Button,
  Container,
  Flex,
  useDisclosure,
  Text,
  Modal,
  ModalBody,
  ModalContent,
  ModalOverlay,
  ModalFooter,
  ModalHeader,
  Input,
  Stack,
  SimpleGrid,
} from '@chakra-ui/react';
import { useState, useEffect } from 'react';
import { NavBar } from '../Component/Header/NavBar';
import { Layout } from '../Component/Layout';
import { SideBar } from '../Component/Sidebar';
import { useSelector } from 'react-redux';
import axios, { AxiosError } from 'axios';
import { AiOutlinePlus } from 'react-icons/ai';
import { useForm } from 'react-hook-form';
import { MdSystemUpdate } from 'react-icons/md';
import { Card } from '../Component/Card';

export const KelasForum = () => {
  const { isOpen, onClose, onOpen } = useDisclosure();
  const [animate, setAnimate] = useState(false);
  const [forum, setForum] = useState([]);
  const [user, setUser] = useState();
  const [modal, setModal] = useState(false);
  const auth = useSelector(state => state.auth);
  const {
    register,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm();

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

  const addKelas = async data => {
    await axios
      .post(
        'https://openclass-api-gateway-production.up.railway.app/classrooms',
        {
          name: data.name,
          level: data.level,
          category: data.category,
          description: data.description,
        },
        {
          headers: {
            authorization: `Bearer ${auth.key}`,
          },
        }
      )
      .then(res => setModal(false));
  };

  const getKelas = async () => {
    await axios
      .get(
        'https://openclass-api-gateway-production.up.railway.app/classrooms/my-created-classrooms',
        {
          headers: {
            authorization: `Bearer ${auth.key}`,
          },
        }
      )
      .then(res => setForum(res.data.data.classrooms));
  };

  useEffect(() => {
    getUsers();
    getKelas();
  }, [modal]);
  return (
    <>
      <Layout
        title='Forum Kelas'
        description='This page for handling kelas and dokumen'>
        <NavBar />
        {forum.length > 0 ? (
          <Button
            position='absolute'
            bottom='10'
            right='14'
            borderRadius='full'
            p='0'
            zIndex='100'
            onClick={() => setModal(true)}>
            <AiOutlinePlus />
          </Button>
        ) : null}
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
              {forum.length > 0 ? (
                <SimpleGrid minChildWidth='15rem' spacing='8' p='5' w='100%'>
                  {forum.map(kelas => (
                    <Card
                      id={kelas.id}
                      key={kelas.id}
                      name={kelas.name}
                      description={kelas.description}
                      level={kelas.level}
                    />
                  ))}
                </SimpleGrid>
              ) : (
                <>
                  <Flex align='center' gap='5'>
                    <Text>Tambah Kelas</Text>
                    <Button
                      borderRadius='full'
                      p='0'
                      onClick={() => setModal(true)}>
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
      <Modal
        isOpen={modal}
        onClose={() => {
          setModal(false);
        }}>
        <ModalOverlay />
        <ModalContent as='form' onSubmit={handleSubmit(addKelas)}>
          <ModalHeader>Membuat Kelas</ModalHeader>
          <ModalBody>
            <Stack direction='column' spacing='6'>
              <Input
                placeholder='Name'
                type='text'
                {...register('name', {
                  required: true,
                })}
              />
              <Input
                placeholder='Level'
                type='text'
                {...register('level', {
                  required: true,
                })}
              />
              <Input
                placeholder='Category'
                type='text'
                {...register('category', {
                  required: true,
                })}
              />
              <Input
                placeholder='Description'
                type='text'
                {...register('description', {
                  required: true,
                })}
              />
            </Stack>
          </ModalBody>
          <ModalFooter>
            <Button variant='brand' type='submit' isLoading={isSubmitting}>
              Tambah
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

import {
  Heading,
  Image,
  Input,
  InputGroup,
  InputLeftElement,
  Stack,
  Icon,
  Text,
  Button,
  Link as ChakraLink,
  FormErrorMessage,
  FormControl,
} from '@chakra-ui/react';
import { Link, useNavigate } from 'react-router-dom';
import { IoPersonCircle } from 'react-icons/io5';
import { AiFillLock } from 'react-icons/ai';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import axios from 'axios';
import Cookies from 'universal-cookie';

import { FormLayout } from '../Layout/FormLayout';
import { Layout } from '../Component/Layout';
import Apps from '../assets/icon.png';
import { login } from '../context/Auth/authSlicer';

export const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const cookie = new Cookies();

  const onSubmit = async data => {
    await axios
      .post(
        'https://openclass-api-gateway-production.up.railway.app/users/auth',
        {
          email: data.email,
          password: data.password,
        }
      )
      .then(res => {
        dispatch(login(res.data.data.token));
        navigate('../');
        cookie.set('key', res.data.data.token);
      })
      .catch(err => console.log(err));
  };

  return (
    <>
      <Layout
        title='Login'
        description='This page for sing in to open class application'>
        <FormLayout>
          <Image src={Apps} width='25%' />
          <Heading>Open Class</Heading>
          <FormControl
            mt='10'
            w={{
              base: '90%',
              md: '70%',
            }}
            isInvalid={errors}>
            <Stack
              as='form'
              onSubmit={handleSubmit(onSubmit)}
              spacing={{
                base: 6,
                md: 8,
              }}>
              <FormControl isInvalid={errors.email}>
                <InputGroup>
                  <InputLeftElement as='label' htmlFor='email'>
                    <Icon as={IoPersonCircle} h={8} w={8} mr='4' />
                  </InputLeftElement>
                  <Input
                    id='email'
                    name='email'
                    placeholder='Email Address'
                    variant='flushed'
                    borderColor='gray.500'
                    type='text'
                    {...register('email', {
                      required: true,
                    })}
                  />
                </InputGroup>
              </FormControl>
              <FormControl isInvalid={errors.password}>
                <InputGroup>
                  <InputLeftElement as='label' htmlFor='password'>
                    <Icon as={AiFillLock} h={8} w={8} mr='4' />
                  </InputLeftElement>
                  <Input
                    id='password'
                    name='password'
                    borderColor='gray.500'
                    placeholder='Password'
                    variant='flushed'
                    type='password'
                    {...register('password', {
                      required: true,
                      minLength: {
                        value: 8,
                        message: 'Password must be at least 8 characters long',
                      },
                    })}
                  />
                </InputGroup>
              </FormControl>
              <FormErrorMessage>
                {errors.email?.message}
                {errors.password?.message}
              </FormErrorMessage>
              <Button variant='brand' type='submit' isLoading={isSubmitting}>
                Sign In
              </Button>
              <Text align='center'>
                Don’t have an account?
                <ChakraLink as={Link} color='brand.secondary' to='../signup'>
                  Sign Up Now!
                </ChakraLink>
              </Text>
            </Stack>
          </FormControl>
        </FormLayout>
      </Layout>
    </>
  );
};

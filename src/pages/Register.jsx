import {
  Button,
  Heading,
  Image,
  Input,
  Stack,
  Text,
  Link as ChakraLink,
  FormErrorMessage,
  FormControl,
} from '@chakra-ui/react';
import { Link, useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import axios from 'axios';

import { Layout } from '../Component/Layout';
import { FormLayout } from '../Layout/FormLayout';
import Apps from '../assets/icon.png';
import { useState } from 'react';

export const Register = () => {
  const [password, setPassword] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm();
  const navigate = useNavigate();

  const onRegister = async data => {
    data.password === data.confirmPassword
      ? await onSubmit(data)
      : setPassword(true);
  };

  const onSubmit = async data => {
    await axios
      .post('https://openclass-api-gateway-production.up.railway.app/users', {
        name: data.name,
        email: data.email,
        password: data.password,
      })
      .then(res => {
        console.log(res);
        setPassword(false);
      })
      .catch(err => {
        console.log(err);
      });
    navigate('../login');
  };

  return (
    <Layout
      title='Register'
      description='This page for register use for open class application'>
      <FormLayout>
        <Image src={Apps} width='25%' />
        <Heading>Open Class</Heading>
        <Stack
          onSubmit={handleSubmit(onRegister)}
          as='form'
          spacing={{
            base: 6,
            md: 8,
          }}
          w={{
            base: '90%',
            md: '70%',
          }}
          mt='10'>
          <Input
            placeholder='Name'
            variant='flushed'
            borderColor='gray.500'
            {...register('name', {
              required: true,
            })}
          />
          <Input
            placeholder='Email'
            variant='flushed'
            borderColor='gray.500'
            {...register('email', {
              required: true,
            })}
          />
          <Input
            placeholder='Password'
            variant='flushed'
            borderColor='gray.500'
            {...register('password', {
              require: true,
              minLength: {
                value: 8,
                message: 'Password must be at least 8 characters long',
              },
            })}
          />
          <Input
            placeholder='Confirm Password'
            variant='flushed'
            borderColor='gray.500'
            {...register('confirmPassword', {
              required: true,
              minLength: {
                value: 8,
                message: 'Password must be at least 8 characters long',
              },
            })}
          />
          <FormControl isInvalid={password}>
            <FormErrorMessage>
              {password && 'password not valid'}
            </FormErrorMessage>
          </FormControl>
          <Button variant='brand' type='submit' isLoading={isSubmitting}>
            Sign Up
          </Button>
          <Text align='center'>
            Already have an account?
            <ChakraLink as={Link} color='brand.secondary' to='../login'>
              Sign In Now!
            </ChakraLink>
          </Text>
        </Stack>
      </FormLayout>
    </Layout>
  );
};

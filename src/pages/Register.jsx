import {
  Button,
  Heading,
  Image,
  Input,
  Stack,
  Text,
  Link as ChakraLink,
} from '@chakra-ui/react';
import { Link } from 'react-router-dom';

import { Layout } from '../Component/Layout';
import { FormLayout } from '../Layout/FormLayout';
import Apps from '../assets/icon.png';

export const Register = () => {
  return (
    <Layout
      title='Register'
      description='This page for register use for open class application'>
      <FormLayout>
        <Image src={Apps} width='25%' />
        <Heading>Open Class</Heading>
        <Stack
          as='form'
          spacing={{
            base: 6,
            md: 10,
          }}
          w={{
            base: '90%',
            md: '70%',
          }}
          mt='10'>
          <Input
            placeholder='Username'
            variant='flushed'
            borderColor='gray.500'
          />
          <Input
            placeholder='Password'
            variant='flushed'
            borderColor='gray.500'
          />
          <Input
            placeholder='Confirm Password'
            variant='flushed'
            borderColor='gray.500'
          />
          <Button variant='brand'>Sign Up</Button>
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

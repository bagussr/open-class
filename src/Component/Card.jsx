import {
  Card as ChakraCard,
  CardBody,
  CardHeader,
  Stack,
  Icon,
  Heading,
  Text,
  Flex,
  Divider,
  Image,
} from '@chakra-ui/react';

import { BsClockFill } from 'react-icons/bs';
import { FaMedal } from 'react-icons/fa';

export const Card = ({ name, description, level }) => {
  return (
    <>
      <ChakraCard
        maxW='sm'
        size='sm'
        w={{ md: '100%', base: '11rem' }}
        as='article'>
        <CardHeader w='100%' position='relative' p='0'>
          <Image
            src='https://th.bing.com/th/id/OIP.jfo_cJb62SDLIpTe6xJWTQHaEk?pid=ImgDet&rs=1'
            h='20'
            w='100%'
            objectFit='cover'
            borderRadius='0.375rem 0.375rem 0 0'
            filter='brightness(50%)'
          />
          <Stack
            direction='column'
            position='absolute'
            w={{ md: '16rem', base: '10rem' }}
            top='25%'
            left='50%'
            transform='translate(-50%,50%)'
            align='center'>
            <Heading fontSize={{ md: 'lg', base: 'sm' }} as='h2' color='white'>
              {name}
            </Heading>
            <Divider borderColor='white' />
          </Stack>
        </CardHeader>
        <CardBody p='5'>
          <Stack spacing='4'>
            <Flex align='center' gap='3'>
              <Icon as={BsClockFill} color='brand.primary.100' w='5' h='5' />
              <Text fontSize={{ md: '2xs', base: '3xs' }}>15 Jam Belajar</Text>
            </Flex>
            <Flex align='center' gap='3'>
              <Icon as={FaMedal} color='brand.primary.100' w='5' h='5' />
              <Text fontSize={{ md: '2xs', base: '3xs' }}>{level}</Text>
            </Flex>
            <Text
              fontSize={{ md: 'xs', base: '2xs' }}
              // height='10'
              wordBreak='break-all'
              textOverflow='clip'
              overflow='hidden'>
              {description}
            </Text>
          </Stack>
        </CardBody>
      </ChakraCard>
    </>
  );
};

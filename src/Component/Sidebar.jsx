import { Box, Text, IconButton, Icon, Flex } from '@chakra-ui/react';

import { TfiBookmarkAlt } from 'react-icons/tfi';
import { ImPencil } from 'react-icons/im';
import { MdOutlineDocumentScanner } from 'react-icons/md';
import { FiChevronRight } from 'react-icons/fi';

export const SideBar = ({ animate, onOpen, isOpen, setAnimate }) => {
  return (
    <>
      <Box
        width={isOpen ? { base: 36, md: 44 } : { base: 12, md: 16 }}
        top='0'
        position='absolute'
        transition='ease 0.3s'
        h='100%'>
        <Flex
          zIndex='10'
          direction='column'
          position='relative'
          justify='center'
          align='start'
          p='2'
          boxShadow='1.5px 0.3px 2px 0px rgb(0,0,0,0.3)'
          borderRadius='0 0 10px 0'
          bg='white'
          rowGap='3'
          transition='ease 0.3s'>
          <Flex
            align='center'
            mt='8'
            columnGap='3'
            role='group'
            px='1.5'
            cursor='pointer'
            borderRadius='md'
            _hover={{
              bg: 'brand.gray.secondary',
            }}>
            <IconButton
              variant='menu'
              icon={<TfiBookmarkAlt />}
              width={{ md: '10', base: '6' }}
              height={{ md: '10', base: '6' }}
              minW='0'
            />
            <Text
              display={animate ? 'inline' : 'none'}
              w={{ md: '24', base: '20' }}
              fontSize={{ md: 'sm', base: '2xs' }}>
              Kelas Saya
            </Text>
          </Flex>
          <Flex
            align='center'
            columnGap='3'
            role='group'
            px='1.5'
            cursor='pointer'
            borderRadius='md'
            _hover={{
              bg: 'brand.gray.secondary',
            }}>
            <IconButton
              variant='menu'
              icon={<ImPencil />}
              width={{ md: '10', base: '6' }}
              height={{ md: '10', base: '6' }}
              minW='0'
            />
            <Text
              display={animate ? 'inline' : 'none'}
              w={{ md: '24', base: '20' }}
              fontSize={{ md: 'sm', base: '2xs' }}>
              Bangun Kelas
            </Text>
          </Flex>
          <Flex
            align='center'
            columnGap='3'
            role='group'
            px='1.5'
            cursor='pointer'
            borderRadius='md'
            _hover={{
              bg: 'brand.gray.secondary',
            }}>
            <IconButton
              variant='menu'
              icon={<MdOutlineDocumentScanner />}
              width={{ md: '10', base: '6' }}
              height={{ md: '10', base: '6' }}
              minW='0'
            />
            <Text
              display={animate ? 'inline' : 'none'}
              w={{ md: '24', base: '20' }}
              fontSize={{ md: 'sm', base: '2xs' }}>
              Dokumen
            </Text>
          </Flex>
        </Flex>
        <Icon
          bg='brand.gray.primary'
          borderRadius='full'
          variant='menu'
          as={FiChevronRight}
          zIndex='10'
          position='absolute'
          top='3'
          right='-3'
          fontSize='xl'
          cursor='pointer'
          onClick={() => {
            onOpen(
              animate === false &&
                setTimeout(() => {
                  setAnimate(!animate);
                }, 300)
            );
          }}
        />
      </Box>
    </>
  );
};

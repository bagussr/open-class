import {
  Box,
  Flex,
  Image,
  Text,
  InputGroup,
  Input,
  InputLeftElement,
  Avatar,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
} from '@chakra-ui/react';
import App from '../../assets/icon.png';
import { AiOutlineSearch } from 'react-icons/ai';
import { BsChevronDown } from 'react-icons/bs';
import { Link } from 'react-router-dom';

export const NavBar = ({ children }) => {
  return (
    <>
      <Box bg='brand.gray.primary' px='3' py='2' boxShadow='sm' as='header'>
        <Flex justify='space-between' as='nav'>
          <Flex align='center' columnGap='3'>
            <Link to='/'>
              <Image src={App} height={{ md: '14', base: '10' }} />
            </Link>
            <Text display={{ base: 'none', md: 'inline' }} mt='2'>
              Hello, Bagus
            </Text>
          </Flex>
          <Flex columnGap='3' align='center'>
            <InputGroup h='auto'>
              <InputLeftElement>
                <AiOutlineSearch />
              </InputLeftElement>
              <Input
                placeholder='Search'
                borderColor='brand.primary.50'
                w={{
                  base: '32',
                  md: 'md',
                }}
              />
            </InputGroup>
            <Avatar
              as={Link}
              display={{ base: 'none', md: 'inline' }}
              src='https://cdn.dribbble.com/users/1782018/screenshots/4592002/dribble_shot.jpg'
              to='/profile/asdasd'
            />
            <Menu zIndex='100'>
              <MenuButton as='button'>
                <BsChevronDown />
              </MenuButton>
              <MenuList>
                <MenuItem
                  justifyContent='space-around'
                  alignItems='center'
                  display={{ base: 'flex', md: 'none' }}>
                  <Avatar src='https://cdn.dribbble.com/users/1782018/screenshots/4592002/dribble_shot.jpg' />
                  <Text>Hello, Bagus</Text>
                </MenuItem>
                <MenuItem as={Link}>Edit Profile</MenuItem>
                <MenuItem>Logout</MenuItem>
              </MenuList>
            </Menu>
          </Flex>
        </Flex>
      </Box>
      {children}
    </>
  );
};
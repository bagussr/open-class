import { extendTheme } from '@chakra-ui/react';

export const theme = extendTheme({
  components: {
    Button: {
      variants: {
        brand: {
          backgroundColor: 'brand.primary.100',
          color: 'gray.50',
          _hover: {
            backgroundColor: 'brand.secondary',
            color: 'white',
          },
          _active: {
            backgroundColor: 'brand.primary',
          },
        },
        menu: {
          backgroundColor: 'brand.gray.primary',
          color: 'brand.primary.100',
          _groupHover: {
            bg: 'brand.gray.secondary',
          },
          _active: {
            bg: 'brand.gray.secondary',
          },
          _hover: {
            bg: 'brand.gray.secondary',
          },
        },
      },
    },
  },
  colors: {
    brand: {
      primary: {
        100: '#263669',
        50: '#54628B',
      },
      secondary: '#5774BA',
      red: '#E1395F',
      ternary: '#819EE5',
      gray: {
        primary: '#DEE8F2',
        secondary: '#D0CED0',
      },
    },
  },
  fonts: {
    body: '"Poppins", sans-serif',
    heading: '"Poppins", sans-serif',
  },
});

import { Box } from '@chakra-ui/react';
import { Head } from './Head';

export const Layout = ({ children, title, description, image }) => {
  return (
    <>
      <Head title={title} description={description} image={image} />
      <Box w='100%' minH='100vh' overflowX='hidden'>
        {children}
      </Box>
    </>
  );
};

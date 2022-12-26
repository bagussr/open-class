import { Box } from '@chakra-ui/react';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Head } from './Head';

export const Layout = ({ children, title, description, image }) => {
  const auth = useSelector(state => state.auth);
  useEffect(() => {}, [auth]);
  return (
    <>
      <Head title={title} description={description} image={image} />
      <Box w='100%' h='100vh' overflowX='hidden'>
        {children}
      </Box>
    </>
  );
};

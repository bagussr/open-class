import { Helmet } from 'react-helmet-async';

export const Head = ({ title, description, image }) => (
  <Helmet>
    <title>{title}</title>
    <meta name='description' content={description} />
    {image && <meta name='og:image' content={image} />}
    <meta name='og:card' content={description} />
  </Helmet>
);

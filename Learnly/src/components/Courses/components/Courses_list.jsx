
import ImgMediaCard from '../widget/Card';
import { Typography, Container, Box } from '@mui/material';

const Courses_list = () => {
  return (
    <Container sx={{ paddingTop: '2rem' }}>
      {/* Titre principal */}
      <Typography variant="h3" sx={{ fontWeight: 'bold', textAlign: 'center', marginBottom: '2rem' }} className='blue_gradient'>
        Explore Our Courses
      </Typography>

      {/* Liste des cours */}
      <Box sx={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '2rem' }}>
        <ImgMediaCard />
      </Box>

   
    </Container>
  );
}

export default Courses_list;

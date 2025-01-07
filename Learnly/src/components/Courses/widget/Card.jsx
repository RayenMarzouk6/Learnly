import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import Chip from '@mui/material/Chip';
import Avatar from '@mui/material/Avatar';
import { Link } from 'react-router-dom';
import NavigationIcon from '@mui/icons-material/Navigation';
import FormControl from '@mui/material/FormControl';
import { InputLabel, MenuItem, OutlinedInput, Select, TextField, Skeleton } from '@mui/material';
import { useTheme } from '@mui/material/styles'; // Import ajouté

export default function ImgMediaCard() {
  const theme = useTheme();
  const [courses, setCourses] = React.useState([]); // État pour les cours récupérés depuis l'API
  const [coursCategory, setCoursCategory] = React.useState([]); // État pour les catégories sélectionnées
  const [coursLanguage, setCoursLanguage] = React.useState([]); // État pour les langues sélectionnées
  const [searchQuery, setSearchQuery] = React.useState(''); // État pour la recherche par nom de cours
  const [filteredCourses, setFilteredCourses] = React.useState([]); // Liste des cours filtrés
  const [loading, setLoading] = React.useState(true); // État pour le statut de chargement

  // Fonction pour appliquer des styles aux éléments
  function getStyles(name, selectedCategory, theme) {
    return {
      fontWeight: selectedCategory.includes(name)
        ? theme.typography.fontWeightMedium
        : theme.typography.fontWeightRegular,
    };
  }

  // Fonction de gestion des changements dans le select des catégories
  const handleCategoryChange = (event) => {
    const { value } = event.target;
    setCoursCategory(typeof value === 'string' ? value.split(',') : value);
  };

  // Fonction de gestion des changements dans le select des langues
  const handleLanguageChange = (event) => {
    const { value } = event.target;
    setCoursLanguage(typeof value === 'string' ? value.split(',') : value);
  };

  // Fonction de gestion de la recherche par nom de cours
  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  // Mise à jour des cours filtrés lorsque les filtres changent
  React.useEffect(() => {
    const filtered = courses.filter((course) => {
      const matchesCategory = coursCategory.length === 0 || coursCategory.includes(course.category);
      const matchesLanguage = coursLanguage.length === 0 || coursLanguage.includes(course.language);
      const matchesSearch = course.name.toLowerCase().includes(searchQuery.toLowerCase());

      return matchesCategory && matchesLanguage && matchesSearch;
    });
    setFilteredCourses(filtered);
  }, [coursCategory, coursLanguage, searchQuery, courses]);

  // Récupération des catégories uniques des cours
  const categories = Array.from(new Set(courses.map((course) => course.category)));

  // Récupération des langues uniques des cours
  const languages = Array.from(new Set(courses.map((course) => course.language)));

  // Fetching the courses data from the API when the component mounts
  React.useEffect(() => {
    fetch('https://courses-api-qnvw.onrender.com/courses')
      .then((response) => response.json())
      .then((data) => {
        setCourses(data);
        setLoading(false); // Set loading to false once data is fetched
      })
      .catch((error) => console.error('Error fetching courses:', error));
  }, []);

  return (
    <>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', marginBottom: '20px' }}>
        {/* Sélecteur de catégories */}
        <FormControl sx={{ m: 1, width: 300 }}>
          <InputLabel id="category-select-label">Catégories</InputLabel>
          <Select
            labelId="category-select-label"
            id="category-select"
            multiple
            value={coursCategory}
            onChange={handleCategoryChange}
            input={<OutlinedInput label="Catégories" />}
          >
            {categories.map((category) => (
              <MenuItem key={category} value={category} style={getStyles(category, coursCategory, theme)}>
                {category}
              </MenuItem>
            ))}
          </Select>
        </FormControl>

        {/* Sélecteur de langues */}
        <FormControl sx={{ m: 1, width: 300 }}>
          <InputLabel id="language-select-label">Langue</InputLabel>
          <Select
            labelId="language-select-label"
            id="language-select"
            multiple
            value={coursLanguage}
            onChange={handleLanguageChange}
            input={<OutlinedInput label="Langue" />}
          >
            {languages.map((language) => (
              <MenuItem key={language} value={language} style={getStyles(language, coursLanguage, theme)}>
                {language}
              </MenuItem>
            ))}
          </Select>
        </FormControl>

        {/* Champ de recherche par nom de cours */}
        <TextField
          label="Rechercher par nom de cours"
          variant="outlined"
          value={searchQuery}
          onChange={handleSearchChange}
          sx={{ width: 300 }}
        />
      </div>

      {/* Affichage des cartes filtrées ou Skeleton loader */}
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '16px', justifyContent: 'center' }}>
        {loading
          ? Array.from({ length: 6 }).map((_, index) => (
              <Skeleton key={index} variant="rectangular" width={345} height={250} sx={{ borderRadius: 2 }} />
            ))
          : filteredCourses.map((course) => (
              <Card
                key={course.id}
                sx={{
                  maxWidth: 345,
                  border: '1px solid #e0e0e0',
                  borderRadius: '8px',
                  boxShadow: 2,
                  transition: 'transform 0.3s',
                  '&:hover': { transform: 'scale(1.05)' },
                }}
              >
                <CardMedia component="img" alt={course.name} height="140" image={course.image} />
                <CardContent sx={{ paddingBottom: '16px' }}>
                  <Typography gutterBottom variant="h6" component="div" sx={{ fontWeight: 'bold' }}>
                    {course.name}
                  </Typography>

                  {/* Affichage des informations minimisées */}
                  <Typography variant="body2" sx={{ color: 'text.secondary', marginBottom: '8px' }}>
                    {course.description.length > 100 ? `${course.description.slice(0, 100)}...` : course.description}
                  </Typography>

                  {/* Affichage de l'instructeur */}
                  <Stack direction="row" spacing={1} sx={{ paddingTop: '8px' }}>
                    <Chip
                      avatar={<Avatar alt={course.instructor.name} src={course.instructor.avatar} />}
                      label={course.instructor.name}
                      variant="outlined"
                      size="small"
                    />
                  </Stack>
                </CardContent>

                <CardActions sx={{ paddingTop: 0 }}>
                  <Button size="small">
                    <Link to={`/coursedetails/${course.id}`} style={{ textDecoration: 'none', color: 'inherit' }}>
                      <NavigationIcon sx={{ mr: 1 }} />
                      Learn More
                    </Link>
                  </Button>
                </CardActions>
              </Card>
            ))}
      </div>
    </>
  );
}

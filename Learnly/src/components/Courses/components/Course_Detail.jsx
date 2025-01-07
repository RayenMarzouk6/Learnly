import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { Box, Typography, Button, Card, CardMedia, CardContent, Avatar, Grid, Chip } from "@mui/material";
import { Star } from "@mui/icons-material";
import { CircularProgress } from "@mui/material";

const CourseDetail = () => {
  const { id } = useParams(); // Récupération de l'ID à partir de l'URL
  const [course, setCourse] = useState(null); // État pour stocker les détails du cours
  const [isLoading, setIsLoading] = useState(true); // État pour indiquer si les données sont en cours de chargement

  // Fetch the course data from the API
  useEffect(() => {
    setIsLoading(true);
    fetch(`https://courses-api-qnvw.onrender.com/courses/${id}`)
      .then((response) => response.json())
      .then((data) => {
        setCourse(data); // Stocke les détails du cours
        setIsLoading(false); // Fin du chargement
      })
      .catch((error) => {
        console.error("Erreur lors de la récupération du cours:", error);
        setIsLoading(false); // Fin du chargement même en cas d'erreur
      });
  }, [id]); // La dépendance à `id` garantit que le hook est exécuté lors du changement d'ID

  if (isLoading) {
    return (
      <Box sx={{ display: "flex", justifyContent: "center", marginTop: "2rem" }}>
        <CircularProgress />
      </Box>
    );
  }

  if (!course) {
    return (
      <Typography variant="h6" color="error" align="center" mt={5}>
        Cours non trouvé
      </Typography>
    );
  }

  return (
    <Box maxWidth="md" mx="auto" mt={5} p={3}>
      <Card>
        <Grid container spacing={2}>
          {/* Image Section */}
          <Grid item xs={12} md={4}>
            <CardMedia
              component="img"
              image={course.image}
              alt={course.name}
              sx={{ borderRadius: 1, maxHeight: 250 }}
            />
          </Grid>

          {/* Details Section */}
          <Grid item xs={12} md={8}>
            <CardContent>
              <Typography variant="h4" gutterBottom>
                {course.name}
              </Typography>
              <Typography variant="body1" color="text.secondary" gutterBottom>
                {course.description}
              </Typography>
              <Box mt={2}>
                <Typography variant="body2">
                  <strong>Durée :</strong> {course.duration}
                </Typography>
                <Typography variant="body2">
                  <strong>Niveau :</strong> {course.level}
                </Typography>
                <Typography variant="body2">
                  <strong>Catégorie :</strong> {course.category}
                </Typography>
                <Typography variant="body2">
                  <strong>Langue :</strong> {course.language}
                </Typography>
                <Typography variant="body2">
                  <strong>Prix :</strong>{" "}
                  <Typography component="span" color="success.main" fontWeight="bold">
                    ${course.price}
                  </Typography>
                </Typography>
                <Typography variant="body2">
                  <strong>Instructeur :</strong> {course.instructor.name} -{" "}
                  <Typography component="span" fontStyle="italic">
                    {course.instructor.bio}
                  </Typography>
                </Typography>
                <Typography variant="body2">
                  <strong>Inscrits :</strong> {course.enrollment_count}
                </Typography>
                <Box display="flex" alignItems="center" mt={1}>
                  <Star sx={{ color: "yellow", mr: 0.5 }} />
                  <Typography variant="body2">
                    {course.ratings}
                  </Typography>
                </Box>
              </Box>
              <Box mt={3}>
                <Button
                  variant="contained"
                  color="primary"
                  href={course.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  sx={{ mr: 2 }}
                >
                  Commencer le cours
                </Button>
                <Button variant="outlined" component={Link} to="/course">
                  Retour aux cours
                </Button>
              </Box>
            </CardContent>
          </Grid>
        </Grid>
      </Card>
      <Box mt={3} display="flex" alignItems="center">
        <Avatar src={course.instructor.avatar} alt={course.instructor.name} sx={{ width: 56, height: 56, mr: 2 }} />
        <Typography variant="h6">{course.instructor.name}</Typography>
      </Box>
      <Box mt={3} alignItems="center">
        {course.instructor.bio}
      </Box>
    </Box>
  );
};

export default CourseDetail;

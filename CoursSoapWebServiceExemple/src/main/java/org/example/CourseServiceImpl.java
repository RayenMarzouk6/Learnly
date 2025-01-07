package org.example;

import jakarta.jws.WebService;

import java.util.ArrayList;
import java.util.List;

@WebService(endpointInterface = "org.example.CourseService")
public class CourseServiceImpl implements CourseService {

    private static final List<Course> courses = new ArrayList<>();

    static {
        // Initialize some mock data
        Course course1 = new Course();
        course1.setId(1);
        course1.setName("Apprendre JavaScript");
        course1.setDescription("Un cours complet sur les bases du JavaScript pour les débutants.");
        course1.setDuration("4 heures");
        course1.setLevel("Débutant");
        course1.setCategory("Développement Web");
        course1.setImage("https://th.bing.com/th/id/OIP.zGtB9WyPaKOzVKsxzI_NlAHaEo?rs=1&pid=ImgDetMain");
        course1.setLink("https://some-link.com");
        course1.setLanguage("Spanish");
        course1.setPrice(24.99);
        course1.setEnrollmentCount(1800);
        course1.setRatings(4.6);
        courses.add(course1);

        Course course2 = new Course();
        course2.setId(2);
        course2.setName("Introduction à Python");
        course2.setDescription("Apprenez les bases de la programmation Python pour les débutants.");
        course2.setDuration("6 heures");
        course2.setLevel("Débutant");
        course2.setCategory("Programmation");
        course2.setImage("https://th.bing.com/th/id/OIP.ZjJSNGlKzDaVMPA6iU8b6QHaEo?pid=ImgDet&rs=1");
        course2.setLink("https://another-link.com");
        course2.setLanguage("French");
        course2.setPrice(19.99);
        course2.setEnrollmentCount(2300);
        course2.setRatings(4.8);
        courses.add(course2);

        Course course3 = new Course();
        course3.setId(3);
        course3.setName("Mastering CSS");
        course3.setDescription("A comprehensive guide to mastering CSS for advanced styling techniques.");
        course3.setDuration("8 hours");
        course3.setLevel("Intermediate");
        course3.setCategory("Web Design");
        course3.setImage("https://th.bing.com/th/id/OIP.UhjcKZj04f_h1BIV6iAFLQHaEK?pid=ImgDet&rs=1");
        course3.setLink("https://css-link.com");
        course3.setLanguage("English");
        course3.setPrice(34.99);
        course3.setEnrollmentCount(3200);
        course3.setRatings(4.9);
        courses.add(course3);

        Course course4 = new Course();
        course4.setId(4);
        course4.setName("React pour les développeurs web");
        course4.setDescription("Apprenez à créer des applications web dynamiques avec React.");
        course4.setDuration("10 heures");
        course4.setLevel("Intermédiaire");
        course4.setCategory("Développement Web");
        course4.setImage("https://th.bing.com/th/id/OIP.-c8aOVtrFdeTC6JJ_PusjwHaEK?pid=ImgDet&rs=1");
        course4.setLink("https://react-link.com");
        course4.setLanguage("French");
        course4.setPrice(49.99);
        course4.setEnrollmentCount(1500);
        course4.setRatings(4.7);
        courses.add(course4);

        Course course5 = new Course();
        course5.setId(5);
        course5.setName("Data Science with R");
        course5.setDescription("An introduction to data science using the R programming language.");
        course5.setDuration("12 hours");
        course5.setLevel("Advanced");
        course5.setCategory("Data Science");
        course5.setImage("https://th.bing.com/th/id/OIP.tEj2Nn0L8LXl5QFVPMbPyAHaEo?pid=ImgDet&rs=1");
        course5.setLink("https://data-science-link.com");
        course5.setLanguage("English");
        course5.setPrice(59.99);
        course5.setEnrollmentCount(2500);
        course5.setRatings(4.5);
        courses.add(course5);
    }

    @Override
    public List<Course> getAllCourses() {
        return courses;
    }

    @Override
    public Course getCourseById(int id) {
        return courses.stream()
                .filter(course -> course.getId() == id)
                .findFirst()
                .orElse(null);
    }
}

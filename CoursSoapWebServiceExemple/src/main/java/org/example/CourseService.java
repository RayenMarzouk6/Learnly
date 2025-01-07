package org.example;


import jakarta.jws.WebMethod;
import jakarta.jws.WebService;

import java.util.List;

@WebService
public interface CourseService {
    @WebMethod
    List<Course> getAllCourses();

    @WebMethod
    Course getCourseById(int id);
}

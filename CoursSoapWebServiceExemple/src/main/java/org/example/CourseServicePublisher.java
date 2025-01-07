package org.example;

import jakarta.xml.ws.Endpoint;



import jakarta.xml.ws.Endpoint;

public class CourseServicePublisher {
    public static void main(String[] args) {
        CourseServiceImpl courseService = new CourseServiceImpl();
        String url = "http://localhost:8081/ws/courses";
        Endpoint.publish(url, courseService);
        System.out.println("Service is running at: " + url);
    }
}

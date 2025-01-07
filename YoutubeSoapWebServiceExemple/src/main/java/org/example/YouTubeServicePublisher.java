package org.example;

import jakarta.xml.ws.Endpoint;

public class YouTubeServicePublisher {
    public static void main(String[] args) {
        Endpoint.publish("http://localhost:8082/YouTubeService", new YouTubeServiceImpl());
        System.out.println("YouTube Service is published at http://localhost:8082/YouTubeService");
    }
}

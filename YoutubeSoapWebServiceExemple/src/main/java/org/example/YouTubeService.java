package org.example;

import jakarta.jws.WebService;
import java.util.List;

@WebService
public interface YouTubeService {
    List<YouTubeResult> search(String query);
}

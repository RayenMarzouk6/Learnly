package org.example;

import jakarta.jws.WebService;
import org.json.JSONArray;
import org.json.JSONObject;

import java.io.BufferedReader;
import java.io.InputStreamReader;
import java.net.HttpURLConnection;
import java.net.URL;
import java.util.ArrayList;
import java.util.List;

@WebService(endpointInterface = "org.example.YouTubeService")
public class YouTubeServiceImpl implements YouTubeService {

    private static final String RAPIDAPI_KEY = "9e6f65d86fmsh33c2f7055c60659p14caf2jsn21cc38d4002b"; // Your RapidAPI key
    private static final String RAPIDAPI_HOST = "youtube-search-and-download.p.rapidapi.com";
    private static final String RAPIDAPI_URL = "https://youtube-search-and-download.p.rapidapi.com/search";

    @Override
    public List<YouTubeResult> search(String query) {
        System.out.println("Search query received: " + query); // Debugging: Print the query
        List<YouTubeResult> results = new ArrayList<>();
        try {
            String urlStr = RAPIDAPI_URL + "?query=" + query;
            System.out.println("RapidAPI URL: " + urlStr); // Debugging: Print the API URL
            URL url = new URL(urlStr);
            HttpURLConnection conn = (HttpURLConnection) url.openConnection();
            conn.setRequestMethod("GET");
            conn.setRequestProperty("X-RapidAPI-Key", RAPIDAPI_KEY);
            conn.setRequestProperty("X-RapidAPI-Host", RAPIDAPI_HOST);

            // Debugging: Print the response code
            int responseCode = conn.getResponseCode();
            System.out.println("Response Code: " + responseCode);

            BufferedReader reader;
            if (responseCode == HttpURLConnection.HTTP_OK) { // Success
                reader = new BufferedReader(new InputStreamReader(conn.getInputStream()));
            } else { // Error
                reader = new BufferedReader(new InputStreamReader(conn.getErrorStream()));
            }

            StringBuilder response = new StringBuilder();
            String line;
            while ((line = reader.readLine()) != null) {
                response.append(line);
            }
            reader.close();

            System.out.println("RapidAPI Response: " + response.toString()); // Debugging: Print the API response

            if (responseCode == HttpURLConnection.HTTP_OK) {
                JSONObject jsonResponse = new JSONObject(response.toString());
                JSONArray contents = jsonResponse.getJSONArray("contents");

                for (int i = 0; i < contents.length(); i++) {
                    JSONObject item = contents.getJSONObject(i);
                    JSONObject video = item.getJSONObject("video");

                    YouTubeResult result = new YouTubeResult();
                    result.setId(video.getString("videoId"));
                    result.setTitle(video.getString("title"));
                    result.setDescription(video.getString("description"));

                    // Handle thumbnails as a JSONArray
                    JSONArray thumbnails = video.getJSONArray("thumbnails");
                    if (thumbnails.length() > 0) {
                        JSONObject firstThumbnail = thumbnails.getJSONObject(0); // Use the first thumbnail
                        result.setThumbnailUrl(firstThumbnail.getString("url"));
                    } else {
                        result.setThumbnailUrl(""); // Set a default value if no thumbnail is available
                    }

                    result.setLink("https://www.youtube.com/watch?v=" + result.getId());
                    result.setChannelTitle(video.getString("channelName"));

                    results.add(result);
                }
            } else {
                System.err.println("Error from RapidAPI: " + response.toString());
            }

        } catch (Exception e) {
            e.printStackTrace(); // Debugging: Print any errors
        }
        System.out.println("Results: " + results); // Debugging: Print the results
        return results;
    }
}
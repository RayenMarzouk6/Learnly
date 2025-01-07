package org.example;

public class Course {
    private int id;
    private String name;
    private String description;
    private String duration;
    private String level;
    private String category;
    private String image;
    private String link;
    private String language;
    private double price;
    private int enrollmentCount;
    private double ratings;

    // Getters and setters
    public int getId() { return id; }
    public void setId(int id) { this.id = id; }

    public String getName() { return name; }
    public void setName(String name) { this.name = name; }

    public String getDescription() { return description; }
    public void setDescription(String description) { this.description = description; }

    public String getDuration() { return duration; }
    public void setDuration(String duration) { this.duration = duration; }

    public String getLevel() { return level; }
    public void setLevel(String level) { this.level = level; }

    public String getCategory() { return category; }
    public void setCategory(String category) { this.category = category; }

    public String getImage() { return image; }
    public void setImage(String image) { this.image = image; }

    public String getLink() { return link; }
    public void setLink(String link) { this.link = link; }

    public String getLanguage() { return language; }
    public void setLanguage(String language) { this.language = language; }

    public double getPrice() { return price; }
    public void setPrice(double price) { this.price = price; }

    public int getEnrollmentCount() { return enrollmentCount; }
    public void setEnrollmentCount(int enrollmentCount) { this.enrollmentCount = enrollmentCount; }

    public double getRatings() { return ratings; }
    public void setRatings(double ratings) { this.ratings = ratings; }
}

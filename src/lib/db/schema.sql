CREATE TABLE users (
    id SERIAL PRIMARY KEY, -- Unique identifier for each user
    fullname VARCHAR(255) NOT NULL, -- Full name of the user
    email VARCHAR(255) UNIQUE NOT NULL, -- Email address of the user
    phone VARCHAR(20) NOT NULL, -- Phone number of the user
    password VARCHAR(255) NOT NULL, -- Password (hashed)
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP -- Timestamp for when the user was created
);

-- Updated table to store intellectual properties
CREATE TABLE IntellectualProperties (
    PropertyID SERIAL PRIMARY KEY, -- Unique identifier for each property
    PropertyName VARCHAR(100) NOT NULL, -- Name of the intellectual property
    Description TEXT, -- Description of the intellectual property
    OwnerID INT NOT NULL, -- ID of the owner (user)
    FOREIGN KEY (OwnerID) REFERENCES users(id) -- Reference to the users table
);

-- Table to store categories of intellectual properties
CREATE TABLE PropertyCategories (
    CategoryID INT PRIMARY KEY,
    CategoryName VARCHAR(50) NOT NULL
);

-- Table to associate properties with categories (many-to-many relationship)
CREATE TABLE PropertyCategoryMapping (
    PropertyID INT,
    CategoryID INT,
    PRIMARY KEY (PropertyID, CategoryID),
    FOREIGN KEY (PropertyID) REFERENCES IntellectualProperties(PropertyID),
    FOREIGN KEY (CategoryID) REFERENCES PropertyCategories(CategoryID)
);

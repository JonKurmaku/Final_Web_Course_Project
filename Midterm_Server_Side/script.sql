CREATE DATABASE IF NOT EXISTS midterm_database;

USE midterm_database;

CREATE TABLE IF NOT EXISTS contact(
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    surname VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL,
    message TEXT
);

CREATE TABLE IF NOT EXISTS tray_service (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    surname VARCHAR(255) NOT NULL,
    shipment_date DATE NOT NULL,
    load_type VARCHAR(100) NOT NULL
);

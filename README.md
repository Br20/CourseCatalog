# Course Catalog Web App

This project is a course catalog web application developed in Angular, with a simulated API server using json-server.

## Installation

To get started, make sure you have Node.js installed on your machine. Then, follow these steps:

1. Clone this repository to your local machine:

   ```bash
   https://github.com/Br20/CourseCatalog.git

2. Clone this repository to your local machine:

   ```bash
   cd course-catalog
   
3. Clone this repository to your local machine:

   ```bash
   npm install
   
   
## Usage

To run the application, follow these steps:

1. **Start json-server**: This step simulates the API server required for course data. 
    
    ```bash
    npm run db

The command will start json-server on port 3050, using the db.json file for data.
this provides two endpoints:
   
   - `/categories`: Provides all the categories in which the courses are distributed.
   - `/courses`: Provides information about each course in the catalog.


2. **Start the Angular application**: Once json-server is running, open another terminal and execute:
    
    ```bash
    ng serve
    
This will start the Angular development server at http://localhost:4200/. You can open this link in your browser to view the application.

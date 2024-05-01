# Kasa - Frontend Project

Welcome to the Kasa project, a frontend project for the OpenClassrooms training program. Kasa is a fictional French apartment rental service aiming for a complete website redesign.

## Project Overview

The goal of this project is to create a modern, responsive React application. The project involves building a new application from scratch, with a focus on creating responsive components, routes, and layouts.

### Frontend

- **React Framework**: The project started with Create React App but has since been migrated to Vite for maintenance purposes.
- **Routing**: React Router is used for application navigation.
- **Styling**: The application uses CSS for responsive design.
- **Functional Components**: React components are functional for improved code structure.
- **Testing**: React Testing Library is used for frontend testing.

### Backend

- **No Backend Support**: Backend is not currently available.
- **Mocked Data**: Data comes from a JSON file retrieved from [here](https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/Front-End+V2/P9+React+1/logements.json).
- **CORS Proxy**: A CORS proxy had to be added to access the data since the project assessment.

## Prerequisites

- **Node.js v20.12.0**: Ensure Node.js is installed. Check with `node --version`.
- **Vite**: This project was initially set up with Create React App but has since been migrated to Vite.

## Installation and Setup

To install and run the project locally, follow these steps:

1. **Clone the Repository**:
   ```bash
   git clone https://github.com/SyMelin/MelinSylvie_11_30052022.git
   ```

2. **Navigate to the Project Directory**:
    ```bash
    cd kasa-project
    ```

3. **Install Dependencies**:
    ```bash
    npm install
    ```

4. **Launch the Development Server**:
    ```bash
    npm run start
    ```

5. **Access the Application**:

The app runs locally on port 5173. Open your browser and go to http://localhost:5173.

## License

This project is licensed under the MIT License. See the LICENSE file for more information.
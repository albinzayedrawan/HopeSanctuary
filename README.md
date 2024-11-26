# Hope Sanctuary

A MERN stack pet adoption website that aims to simplify the process of finding homes for animals that are present in adoption organizations and shelters.

## Instructions:

1. **Clone the Repository**  
   ```bash
   git clone https://github.com/albinzayedrawan/hopesanctuary.git
   cd hope-sanctuary
   ```

2. **Install Dependencies**  
   Navigate to the frontend and backend folders to install dependencies.  
   - **Frontend** (React):  
     ```bash
     cd frontend
     npm install
     ```
   - **Backend** (Node.js/Express):  
     ```bash
     cd ../backend
     npm install
     ```

3. **Set Up Environment Variables**  
   Create a `.env` file in the `server` directory with the following variables:  
   ```env
   PORT=5000
   MONGO_URI=your_mongo_db_connection_string
   JWT_SECRET=your_jwt_secret
   ```

4. **Run the Application**  
   Open two terminals to run both client and server:  
   - **Client**:  
     ```bash
     cd frontend
     npm start
     ```
   - **Server**:  
     ```bash
     cd backend
     node index.js
     ```

5. **Access the Application**  
   Open your browser and navigate to `http://localhost:3000` to view the application.

## Features:

- **User Authentication**: Register and login securely with JWT.
- **Animal Listings**: View all available pets for adoption.
- **Search and Filters**: Easily find pets based on species, breed, age, and location.
- **Responsive Design**: Accessible on all devices.
- **Admin Dashboard**: Manage animal listings and adoption requests.

## Technologies Used:

- **Frontend**: React.js, Redux, Bootstrap
- **Backend**: Node.js, Express.js
- **Database**: MongoDB
- **Authentication**: JWT
- **Version Control**: Git and GitHub

## Project Structure:

```plaintext
hopesanctuary/
├── frontend/           # Frontend application
├── backend/            # Backend API
├── .gitignore          # Files to ignore in Git
├── LICENSE             # Project License
├── README.md           # Project documentation
```

## Contributing:

We welcome contributions! See the [CONTRIBUTING](CONTRIBUTING) file for details.

## License:

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

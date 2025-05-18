# Hope Sanctuary

A MERN stack pet adoption website that aims to simplify the process of finding homes for animals that are present in adoption organizations and shelters.

## Prototype ([Click here to view prototype](https://www.figma.com/proto/yzr3Eu2ofZpj0sE7i9X94T/Prototype?node-id=22-5&node-type=canvas&t=eDp9Pvd3tUS5nhLi-1&scaling=contain&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=22%3A5))

![Prototype](https://github.com/user-attachments/assets/e1104c54-df27-429f-b82e-50aa7982f2d4)

## Instructions

1. **Clone the Repository & Install Axios**  

   ```bash
   git clone https://github.com/albinzayedrawan/hopesanctuary.git
   cd hopesanctuary
   npm install
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
   Create a `.env` file in the `backend` directory with the following variables:  

   ```env
   PORT=5000
   DB_URI=your_mongo_db_connection_string
   JWT_SECRET=your_jwt_secret
   ```

4. **Run the Application**  
   Open two terminals to run both frontend and backend:  
   - **Frontend**:

     ```bash
     cd frontend
     npm start
     ```

   - **Backend**:  
  
     ```bash
     cd backend
     node index.js
     ```

5. **Access the Application**  
   Open your browser and navigate to `http://localhost:3000` to view the application.

## Features

- **User Authentication**: Register and login securely with JWT.
- **Animal Listings**: View all available pets for adoption.
- **Search and Filters**: Easily find pets based on species, breed, age, and location.
- **Responsive Design**: Accessible on all devices.
- **Admin Dashboard**: Manage animal listings and adoption requests.

## Technologies Used

- **Frontend**: ![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB) ![Bootstrap](https://img.shields.io/badge/Bootstrap-7952B3?style=for-the-badge&logo=bootstrap&logoColor=white)
- **Backend**: ![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white) ![Express.js](https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB)
- **Database**: ![MongoDB](https://img.shields.io/badge/MongoDB-%234ea94b.svg?style=for-the-badge&logo=mongodb&logoColor=white)
- **Authentication**: ![JWT](https://img.shields.io/badge/JWT-black?style=for-the-badge&logo=JSON%20web%20tokens)
- **Version Control**: ![Git](https://img.shields.io/badge/Git-F05032?style=for-the-badge&logo=git&logoColor=white) ![GitHub](https://img.shields.io/badge/GitHub-181717?style=for-the-badge&logo=github&logoColor=white)

## Project Structure

```plaintext
hopesanctuary/
├── backend/            # Backend API
├── docs/               # Project Documentation
├── frontend/           # Frontend Application
├── CONTRIBUTING        # Project Contribution Instructions
├── LICENSE             # Project License
├── README.md           # Project Documentation
```

## Contributing

We welcome contributions! See the [CONTRIBUTING](CONTRIBUTING) file for details.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

const express = require("express");
const userRoute = require("./routes/userRoutes");
const petRoute = require("./routes/petRoutes");
const adoptionFormRoute = require("./routes/adoptionFormRoutes");
const contactFormRoute = require("./routes/contactFormRoutes");
const connectDb = require('./Configuration/connectDb');
const cors = require('cors');
const dotenv = require("dotenv");
dotenv.config();
const port = process.env.PORT || 5000;

// Connect to the database
connectDb();

const app = express();
app.use(cors());
app.use(express.json());

// Routes
app.use("/api/users", userRoute);
app.use("/api/pets", petRoute);
app.use("/api/adoption-forms", adoptionFormRoute);
app.use("/api/contact-forms", contactFormRoute);

app.listen(port, (er) => {
    if (er) {
        console.log(er);
    } else {
        console.log(`Server is running on port ${port}`);
    }
});
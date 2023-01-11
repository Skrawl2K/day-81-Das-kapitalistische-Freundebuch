//! IMPORTS
import express from 'express';
import cors from 'cors';
import './config/config.js';

//! VARIABLES
const PORT = 9095;
const app = express();

//! APP.USE
app.use(cors());
app.use(express.json());

//! ROUTES
app.get()
app.post()
app.put()
app.delete()


app.listen(PORT, () => console.log("server is running on port", PORT));
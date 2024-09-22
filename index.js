
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');


const ticketRouter = require('./Router/Ticketroutes'); 

dotenv.config(); 

const app = express();


app.use(cors());


app.use(express.json()); 
app.use(express.urlencoded({ extended: true }));


app.use('/tickets', ticketRouter);


const mongoURI = process.env.MONGO_URI;
mongoose.connect(mongoURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(() => console.log('MongoDB connected successfully'))
.catch((err) => console.error('MongoDB connection error:', err));


const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});

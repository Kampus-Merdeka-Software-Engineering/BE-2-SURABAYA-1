require('dotenv').config();
const express = require('express');
const cors = require('cors')

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended:true}));

const userRoute = require('./routes/userRoute')
const contactRoute = require('./routes/contactRoute')
const orderRoute = require('./routes/orderRoute')

app.use(userRoute)
app.use(contactRoute)
app.use(orderRoute)

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server berjalan di http://localhost:${PORT}`);
});
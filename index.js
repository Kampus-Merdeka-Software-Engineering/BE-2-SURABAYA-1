require('dotenv').config();
const express = require('express');
const cors = require('cors')

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended:true}));

const userRoute = require('./routes/userRoute')

app.use(userRoute)

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server berjalan di http://localhost:${PORT}`);
});
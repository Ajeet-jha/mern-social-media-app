import express from 'express';
// import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';


import postRoutes from './routes/posts.js'
const app = express();

app.use(express.json({limit: "30mb", extended: true}));
app.use(express.urlencoded({limit: "30mb", extended: true}));
app.use(cors());

app.use('/posts', postRoutes);

const CONNECTION_URL = 'mongodb+srv://ajeetjha:frvvEkXRJLPJBMd1@cluster0.kbego.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';
const PORT = process.env.PORT || 5000;

// app.listen(5000, 
//     () => console.log(`Server Running on Port: http://localhost:${PORT}`)
// )
mongoose.connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => app.listen(PORT, () => console.log(`Server Running on Port: http://localhost:${PORT}`)))
  .catch((error) => console.log(`${error} did not connect`));

mongoose.set('useFindAndModify', false);

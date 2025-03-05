import dotenv from "dotenv";
dotenv.config();
import express from "express";
const app = express();
const port = process.env.PORT || 3000;
import cors from "cors";
import cookieParser from "cookie-parser";
import contactRoutes from "./routes/contactRoutes.js";
import orderRoutes from "./routes/orderRoutes.js";

// MIDDLEWARES
app.use(
    cors({
        origin: [process.env.CLIENT_URL, process.env.CLIENT_URL_WWW],
        credentials: true,
    })
);

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cookieParser());

// ROUTES
// contact routes
app.use(contactRoutes);
// order routes
app.use(orderRoutes);


// route for getting ping req to stay wake app
app.get('/health', (req, res) => {
    res.status(200).send('OK');
});


// ERROR HANDLING MIDDLEWARE
app.use((err, req, res, next) => {
    res.status(err.status || 400).json({ error: err.message });
    console.log(err.message);
});

app.listen(port, () => {
    console.log(`App is listening to port: ${port}!`);
});
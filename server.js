const express = require('express');
const routes = require('./routes');

const app = express();
const PORT = process.env.PORT || 3001;

// Using middleware to parse JSON and urlencoded request bodies
app.use((req, res, next) => {
    console.log(`${req.method} request to ${req.url}`);
    next();
});

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(routes);

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});

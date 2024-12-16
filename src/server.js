
const express = require("express");
const cors = require("cors");

//route
const campus_routes = require("./routes/campus_routes")

const app = express();
const port = 5000;

// Enable CORS 
app.use(cors({ origin: 'http://localhost:3000' }));
app.use("/api/campus",campus_routes)

// Start server
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});

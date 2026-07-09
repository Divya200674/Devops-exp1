const express = require("express");
const fs = require("fs");
const path = require("path");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

app.post("/register", (req, res) => {

    const user = req.body;

    const filePath = path.join(__dirname, "data", "users.json");

    let users = [];

    if (fs.existsSync(filePath)) {
        users = JSON.parse(fs.readFileSync(filePath));
    }

    users.push(user);

    fs.writeFileSync(
        filePath,
        JSON.stringify(users, null, 2)
    );

    res.json({
        message: "Registration Successful"
    });

});

app.listen(3000, () => {
    console.log("Server running on port 3000");
});
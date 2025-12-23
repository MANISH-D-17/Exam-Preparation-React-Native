const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

let schedules = []; // Temporary memory

app.get("/schedules", (req, res) => {
  res.json(schedules);
});

app.post("/schedules", (req, res) => {
  schedules.push(req.body);
  res.json({ message: "Schedule added" });
});

const PORT = 5000;
app.listen(PORT, () => {
  console.log("Backend running on port 5000");
});

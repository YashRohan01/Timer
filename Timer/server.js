import express from "express";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const app = express();
const port = process.env.PORT || 3000;

// Serve static files (HTML, CSS, JS, images, etc.)
app.use(express.static(path.join(__dirname, 'public')));

// Route to serve index.html
app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});
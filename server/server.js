import "dotenv/config";
import http from "http";
import app from "./src/app.js";
import connectDB from "./src/config/database.js";

const port = process.env.PORT || 4000;

const server = http.createServer(app);

await connectDB();

server.listen(port, () => {
  console.log(`Server is up and running on http://localhost:${port}`);
});

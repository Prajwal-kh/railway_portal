import express, { json } from "express";
import cors from "cors";
import railwayRoutes from "./routes/railwayRoutes.mjs";

const app = express();
const port = 4000;

app.use(cors());
app.use(express.json());
app.use(railwayRoutes);

app.listen(port, () => {
  console.log("Connected to server");
});

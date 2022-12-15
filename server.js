import express from "express";
import postgres from "postgres";
import dotenv from "dotenv";

dotenv.config();

const sql = postgres(process.env.DATABASE_URL);

const app = express();

app.use(express.json());

app.use(express.static("./client"));

app.get("/meals", (req, res) => {
  sql`SELECT * FROM meal`.then((result) => {
    res.json(result);
  });
});

app.post("/meals", (req, res) => {
  const { kind, calories } = req.body;
  sql`INSERT INTO meal (kind, calories) VALUES (${kind}, ${calories}) RETURNING *`.then(
    (result) => {
      res.send(result[0]);
    }
  );
});

app.listen(process.env.PORT);

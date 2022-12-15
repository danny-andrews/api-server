import express from "express";
import postgres from "postgres";

const sql = postgres(
  "postgres://calorie_tracker_user:aRpBEWJAcR5OV8iS9XC4BAJZngOLeIx9@dpg-cedlbb82i3mr7lhb5arg-a.oregon-postgres.render.com/calorie_tracker?ssl=true"
);

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

app.listen(3000);

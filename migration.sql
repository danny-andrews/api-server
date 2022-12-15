DROP TABLE IF EXISTS eater;
DROP TABLE IF EXISTS meal;

CREATE TABLE eater (
  id SERIAL,
  name TEXT
);

CREATE TABLE meal (
  id SERIAL,
  kind TEXT,
  calories INTEGER,
  eater_id INTEGER
);

INSERT INTO eater (name) VALUES ('Danny');
INSERT INTO eater (name) VALUES ('Mary');

INSERT INTO meal (kind, calories, eater_id) VALUES ('breakfast', 1200, 1);
INSERT INTO meal (kind, calories, eater_id) VALUES ('lunch', 500, 1);
INSERT INTO meal (kind, calories, eater_id) VALUES ('dinner', 100, 2);

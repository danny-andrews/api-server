SELECT eater.name, meal.kind, meal.calories
FROM eater
INNER JOIN meal ON eater.id = meal.eater_id;

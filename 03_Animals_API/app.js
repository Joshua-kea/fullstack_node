const express = require("express");
const app = express();

app.use(express.json());

const animals = [
  { id: 1, name: "Parrot", age: 34 },
  {
    id: 2,
    name: "Pelican",
    url: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cd/Pelecanus_Conspillatus%2C_Torrens_River%2C_Adelaide_2014.jpg/250px-Pelecanus_Conspillatus%2C_Torrens_River%2C_Adelaide_2014.jpg?utm_source=en.wikipedia.org&utm_campaign=parser&utm_content=thumbnail",
  },
];

let nextId = 3;

app.get("/animals", (req, res) => {
  res.send({ data: animals });
});

app.get("/animals/:id", (req, res) => {
  const providedId = Number(req.params.id);
  const foundAnimal = animals.find((animal) => animal.id === providedId);

  if (!foundAnimal) {
    res
      .status(404)
      .send({ errorMessage: `No animal found by id ${providedId}` });
  } else {
    res.send({ data: foundAnimal });
  }
});

app.post("/animals", (req, res) => {
  const providedAnimal = req.body;

  providedAnimal.id = nextId++;

  animals.push(providedAnimal);

  res.send({ data: providedAnimal });
});

//  const labrador = {
//     color: "brown",
//     color: "white",
//     color: "multi",
//     energyLevel: 9.4
//  };

//  const chihuahua = {
//     energyLevel: 10.0,
//     isScaredOfAnything: false
//  };

//  console.log({...labrador, ...chihuahua });

app.patch("/animals/:id", (req, res) => {
  const providedId = Number(req.params.id);
  const foundAnimalIndex = animals.findIndex(
    (animal) => animal.id === providedId,
  );

  if (foundAnimalIndex === -1) {
    return res
      .status(404)
      .send({ errorMessage: `No animal found by id ${providedId}` });
  }

  const providedAnimal = req.body;
  const foundAnimal = animals[foundAnimalIndex];

  const animalToCreate = { ...providedAnimal, ...foundAnimal, id: providedId };

  animals[foundAnimalIndex] = animalToCreate;

  res.send({ data: animalToCreate });
});

app.delete("/animals/:id", (req, res) => {
  const providedId = Number(req.params.id);
  const foundAnimalIndex = animals.findIndex(
    (animal) => animal.id === providedId,
  );

  if (foundAnimalIndex === -1) {
    return res
      .status(404)
      .send({ errorMessage: `No animal found by id ${providedId}` });
  }

  animals.splice(foundAnimalIndex, 1);

  res.status(204).send();
});

app.listen(8080, (error) => {
  if (error) {
    console.log("Error running the server", error);
    return;
  }

  console.log("Server is running on port", 8080);
});

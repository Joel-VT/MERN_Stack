const express = require("express");
const app = express();
const port = 8000;

app.use( express.json() );
app.use( express.urlencoded({ extended: true }) );

const users = [
  { firstName: "Reimu",  lastName: "Hakurei"    },
  { firstName: "Marisa", lastName: "Kirisame"   },
  { firstName: "Sanae",  lastName: "Kochiya"    },
  { firstName: "Sakuya", lastName: "Izayoi"     },
  { firstName: "Momiji", lastName: "Inubashiri" }
];

// req is short for request
// res is short for response
app.get("/api", (req, res) => {
  res.json({message: 'Hello from the server'});
});

app.get("/api/users", (req, res) => {
  res.json( users )
})

app.post("/api/users", (req, res) => {
  console.log(req.body);

  users.push(req.body);

  res.json( { status: "ok" });
})

app.get("/api/users/:id", (req, res) => {
  res.json(users[req.params.id]);
})

app.put("/api/users/:id", (req, res) => {
  const id = req.params.id;
  users[id] = req.body;
  res.json( { status: "ok" } );
})

app.delete("/api/users/:id", (req, res) => {
  users.splice(req.params.id, 1);
  res.json({status: "ok"});
})

const server = app.listen(port, () =>
  console.log(`Server is locked and loaded on port ${port}!`)
);

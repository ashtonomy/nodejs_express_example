const express = require("express");
const app = express();
app.use(express.json());
const importData = require("./userData.json");
let port = process.env.PORT || 3000;

app.get("/users", (req, res) => {
	res.status(200).send(importData);
});

/*
app.post("/users", (req, res) => {

	const newUser = req.body;
	userList.push(newUser);
	res.json(userData.json);
});

app.put("/users", (req, res) => {
	const newName = req.body.newName;

	for (let i = 0; i < userList.length; i++) {
		userList[i].name = newName;
	}

	res.json(userList);
});

app.delete("/users/:id", (req, res) => {
	const id = req.params.id;
	for (let i = 0; i < userList.length; i++) {
		if (userList[i].id == id) {
			userList.splice(i, 1);
			foundId = true;
		}
	}

	if (!foundId) {
		res.status(400).json({ error: "User Id not found" });
	}
	res.json(userList);
});
*/

app.listen(port, () => {
	console.log(`App listening on port http://localhost:${port}`);
});
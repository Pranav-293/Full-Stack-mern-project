const express = require("express"); 
const db=require("./configs/db.config");
const activeItems = require("./models/activeItems");
const completedItems = require("./models/completedItem");
const PORT = process.env.PORT||4000;
const app = express();
app.use(express.json());
app.use(express.static('build'));

app.get("/api/allTodo", async (req, res) => {
  try {
    const result = {
      activeList: await activeItems.find(),
      completedList: await completedItems.find(),
    };
    res.send(result);
  } catch (e) {
    res.send(e.message);
  }
});

app.post("/api/addTodo", async (req, res) => {
  try {
    const newTodo = await new activeItems({
      text: req.body.text,
    });
    await newTodo.save();
    res.send(newTodo);
  } catch (e) {
    res.send(e.message);
  }
});

app.put("/api/completeTodo/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const todo = await activeItems.findByIdAndDelete(id);
    const newTodo = await new completedItems({
      text: todo.text,
    });
    await newTodo.save();
    res.send(newTodo);
  } catch (e) {
    res.send(e.message);
  }
});

app.delete("/api/deleteTodo/:id", async (req, res) => {
  try {
    const id = req.params.id;
  const todo = await completedItems.findByIdAndDelete(id);
  res.send(todo);
  } catch (e) {
    res.send(e.message);
  }
});

app.listen(PORT, () => {
  console.log("Server is running on port " + PORT);
});

app.use("*", (req, res) => {
  res.send("Route not found");
});

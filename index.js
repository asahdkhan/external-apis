import express from "express";
import fetch from "node-fetch";

const app = express();
const router = express.Router();
const PORT = 9211;

// parse JSON request body
app.use(express.json());

// external api url
const baseURL = "https://jsonplaceholder.typicode.com";

const getTodos = async (req, res) => {
  const { url } = req;
  try {
    // call external api
    const response = await fetch(baseURL + url);
    const data = await response.json();
    return res.status(200).send(data);
  } catch (error) {
    console.log("error", error);
    return res.status(500).send("Internal server error");
  }
};

const postTodos = async (req, res) => {
  const { url, body = {} } = req;
  try {
    // post external api
    const response = await fetch(baseURL + url, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    });
    const data = await response.json();
    return res.status(200).send(data);
  } catch (error) {
    console.log("error", error);
    return res.status(500).send("Internal server error");
  }
};

// routes
// NOTE: node api end-points and external api end-points are same.
router.get("/todos", getTodos);
router.get("/todos/:id", getTodos);
router.post("/posts", postTodos);

// base url
app.use("/api", router);

const server = app.listen(PORT, () => console.log(`Listening on port ${PORT}`));
server.timeout = 300000;

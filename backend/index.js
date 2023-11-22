const express = require("express");
const cors = require("cors");
const axios = require("axios");
const app = express();
app.use(express.json());
app.use(cors({ origin: true }));

app.post("/authenticate", async (req, res) => {
  const { username } = req.body;
  try {
    const r = await axios.put(
      "https://api.chatengine.io/users/",
      { username: username, secret: username },
      { headers: { "Private-Key": "47d674f1-859e-4ad4-ac84-080b110a8fb1" } }
    );
    return res.status(r.status).json(r.data);
  } catch (e) {
    console.log(e, "asdfasdfsdf");
    return res.status(e.response.status).json(e.response.data);
  }
});

app.listen(3001);

const bcrypt = require("bcrypt");
const pool = require("../config/db");
const jwtGenerator = require("../utils/jwtGenerator");


exports.getRegister = async (req, res) => {
    const { username, password } = req.body;
    console.log( username, password)

    try {
      const user = await pool.query("SELECT * FROM users WHERE Users = $1", [
        username
      ]);
  
      if (user.rows.length > 0) {
        return res.status(401).json("User already exist!");
      }
  
      const salt = await bcrypt.genSalt(10);
      const bcryptPassword = await bcrypt.hash(password, salt);
  
      let newUser = await pool.query(
        "INSERT INTO users (user_name, user_password) VALUES ($1, $2,) RETURNING *",
        [JSON.stringify(username, bcryptPassword)]
      );
  
      const jwtToken = jwtGenerator(newUser.rows[0].user_id);
  
      return res.json({ jwtToken });
    } catch (err) {
      console.error(err.message);
      res.status(500).send("Server error");
    }
  }

exports.getLogin = async (req, res) => {
    const { email, password } = req.body;

  try {
    const user = await pool.query("SELECT * FROM users WHERE user_email = $1", [
      email
    ]);

    if (user.rows.length === 0) {
      return res.status(401).json("Invalid Credential");
    }

    const validPassword = await bcrypt.compare(
      password,
      user.rows[0].user_password
    );

    if (!validPassword) {
      return res.status(401).json("Invalid Credential");
    }
    const jwtToken = jwtGenerator(user.rows[0].user_id);
    return res.json({ jwtToken });
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server error");
  }
};


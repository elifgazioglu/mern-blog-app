const router = require("express").Router();
const User = require("../models/User");
const bcrypt = require("bcrypt");

//Register

router.post("/register", async (req, res) => {
  try {
    const salt = await bcrypt.genSalt(10);
    const hashedPass = await bcrypt.hash(req.body.password, salt);
    const newUser = new User({
      username: req.body.username,
      email: req.body.email,
      password: hashedPass,
    });

    const user = await newUser.save();
    res.status(200).json(user);
  } catch (err) {
    res.status(500).json(err);
  }
});

//Login
router.post("/login", async (req, res) => {
  try {
    const user = await User.findOne({ email: req.body.email });
    if (!user) {
      console.log("bu e-posta adresiyle kayıtlı bir kullanıcı yok");
      return res.status(400).json("Wrong credentials");
    }

    const validated = await bcrypt.compare(req.body.password, user.password);
    if (!validated) {
      console.log("parola bu e-posta adresi ile eslesmiyor");
      return res.status(400).json("Wrong credentials");
    }

    res.status(200).json(user);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

router.get('/email/:email', async (req, res) => {
  try {
    const user = await User.findOne({ email: req.params.email });
    res.json({ user });
  } catch (err) {
    console.error(err);
    res.status(500).send('Server Error');
  }
});

module.exports = router;

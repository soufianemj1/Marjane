const RayonAdmin = require("../Models/AdminRayon");
const jwt = require("jsonwebtoken");
const sendMail = require("../../utils/mail");

const getAllAdmins = async (req, res) => {
  try {
    const Admins = await RayonAdmin.getAll();
    res.json(Admins);
  } catch (error) {
    res.json({
      message: error.message,
    });
  }
};

const getRayonAdminById = async (req, res) => {
  try {
    const Admins = await RayonAdmin.getAll();
    const AdminById = Admins.find((e) => e.id == req.params.id);
    if (!AdminById) {
      res.json({
        message: "Center Admin Not Found",
      });
    }
    res.json(AdminById);
  } catch (error) {
    res.json({
      message: error.message,
    });
  }
};

const createAdminRayon = async (req, res) => {
  try {
    // Get user input
    const { firstName, lastName, email, password, rayon } =
      req.body;

    // Validate user input
    if (!(email && password)) {
      res.status(400).send("All inputs are required");
    }

    

    
    // Create user in our database
    const admin = await RayonAdmin.createRayonAdmin({
      firstName,
      lastName,
      rayon,
      email: email.toLowerCase(), // sanitize: convert email to lowercase
      password: password,
    
    });

    // Create token

    res.json(admin);
    // return new user
    res.status(201).json(admin);
  } catch (err) {
    console.log(err);
  }
};

const updateRayonAdmin = async (req, res) => {
  try {
    
    await RayonAdmin.update(req.body, req.params.id);
    res.json({
      message: "well updated",
    });
  } catch (error) {
    res.json({
      message: error.message,
    });
  }
};

const deleteRayonAdmin = async (req, res) => {
  try {
    await RayonAdmin.destroy(req.params.id);
    res.json({ message: "well deleted" });
  } catch (error) {
    res.json({ message: error.message });
  }
};

const EmailLogin = async (req, res) => {
  try {
    const Admins = await RayonAdmin.getAll();

    const { email, password } = req.body;

    // validate user creds
    if (!(email && password)) {
      res.status(400).send("All input is required");
    }

    // validate if user exist in our database
    const CAdmin = Admins.find((admin) => admin.email == req.body.email);

    if (CAdmin) {
      await sendMail.sendMail(email, CAdmin.password);
      res.json({
        message: "Email has been send with your password",
      });
    }

    // create token
  } catch (error) {
    res.json({
      message: error.message,
    });
  }
};

const login = async (req, res) => {
  try {
    const Admins = await RayonAdmin.getAll();

    const { email, password } = req.body;

    // validate user creds
    if (!(email && password)) {
      res.status(400).send("All input is required");
    }

    // validate if user exist in our database
    const RAdmin = Admins.find(
      (admin) =>
        admin.email == req.body.email && admin.password == req.body.password
    );

    if (RAdmin) {
      const RAtoken = jwt.sign(
        {
          id: RAdmin.id,
          role:'rayon'
        },
        `${process.env.JWT_SECRET_KEY}`,
        {
          expiresIn: "2h",
        }
      );

      // const { firstName, lastName, email, rayon, password, token } = RAdmin;

      // save the new token
      // RAdmin.token = RAtoken;

      // await RayonAdmin.update(RAdmin, RAdmin.id);

      res.status(200).json(RAtoken);
    }
    res.status(400).send("Invalid Credentials");
    // create token
  } catch (error) {
    res.json({
      message: error.message,
    });
  }
};
module.exports = {
  getAllAdmins,
  getRayonAdminById,
  updateRayonAdmin,
  createAdminRayon,
  deleteRayonAdmin,
  EmailLogin,
  login,
};

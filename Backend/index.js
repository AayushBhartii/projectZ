const dotEnv = require("dotenv");
dotEnv.config();

const express = require("express");
const app = express();
const vendorRoutes = require("./routes/vendorRoutes");
const bodyParser = require("body-parser");
const firmRoutes = require("./routes/firmRoutes");
const productRoutes = require("./routes/productsRoutes");
const claimRoutes = require("./routes/claimRoutes");
const path = require("path");
const cors = require("cors");
const swaggerUi = require("swagger-ui-express");
const swaggerJsDoc = require("swagger-jsdoc");
const helmet = require("helmet");
const passport = require("passport");
const session = require("express-session");
const googleAuthConfig = require("./config/google.config");
const routeConfig = require("./config/route.config");

//from .env file
const PORT = process.env.PORT || 4040;

const Auth = require("./routes/auth");
const otpRoutes = require("./routes/otp");
const connectDB = require("./config/database.config");
const { default: mongoose } = require("mongoose");

const swaggerOptions = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Olcademy API",
      version: "1.0.0",
      description: "API documentation for Olcademy project-z",
    },
    tags: [
      { name: "Products", description: "APIs related to products" },
      { name: "Firms", description: "APIs related to firms" },
      { name: "Vendors", description: "APIs related to vendors" },
      { name: "Claim Restaurant", description: "APIs related to Claims" },
    ],
    servers: [{ url: "https://olcademybackend-eob7.onrender.com" }],
  },
  apis: ["./routes/*.js"],
};

const swaggerDocs = swaggerJsDoc(swaggerOptions);
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocs));

app.use(cors());
app.use(bodyParser.json());

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("Connected Successfully");
  })
  .catch((error) => {
    console.log(error);
  });

app.use(
  session({
    secret: "3f3d9a6b5a1b4fce905c8a3e79f21a65b1228cb02899469c4da4f23b5dc03798",
    resave: true,
    saveUninitialized: true,
    cookie: { secure: false }, // Set `secure: true` if using HTTPS
  })
);
// Initialize passport after session middleware
// app.use(passport.initialize());
// app.use(passport.session());

// Passport configuration
// googleAuthConfig(passport);
// routeConfig(passport);

// app.use("/auth", Auth);
// app.use("/api", otpRoutes);
app.use("/claim", claimRoutes);
app.use("/vendor", vendorRoutes);
app.use("/firm", firmRoutes);
app.use("/products", productRoutes);
app.use("/uploads", express.static("uploads"));

app.use("/", (req, res) => {
  res.send("<h1>This is Olcademy project</h1>");
});

// Start the server
const startServer = async () => {
  app.listen(PORT, () => {
    console.log(`Server is up and running at port ${PORT}`);
    console.log(
      `API documentation available at http://localhost:${PORT}/api-docs`
    );
  });
};

startServer();

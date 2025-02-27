// const express = require("express");
// const http = require("http");
// const cors = require("cors");
// const { Server } = require("socket.io");

// const connectToMongoDB = require("./db");
// const MenuRoutes = require("./routes/MenuRouter");
// const OrderRoutes = require("./routes/OrderRoutes/Order");
// const ManageStatusRoutes = require("./routes/OrderRoutes/ManageOrdersStatus");
// const AnalyticsRoutes = require("./routes/AnalyticRoutes");
// const TaxesAndChargesRoutes = require("./routes/Taxes&ChargesFotTiffinsRoutes");
// const Offers = require ("./routes/Offer");

// const allowedOrigins = [`${process.env.FRONTEND_URL}`];
// const app = express();
// const server = http.createServer(app); // Use HTTP server to attach Socket.IO
// const io = new Server(server, {
//   cors: {
//     origin: allowedOrigins, // Or use your specific frontend URL if in production
//     methods: ["GET", "POST", "DELETE", "PUT"],
//   },
// });

// io.on("connection", (socket) => {
//   // console.log(`Client connected: ${socket.id}`);

//   // Emit a test event
//   socket.emit("testEvent", { message: "Hello from the server!" });

//   socket.on("disconnect", () => {
//     // console.log(`Client disconnected: ${socket.id}`);
//   });
// });

// app.use(express.json());

// app.use(cors({
//   origin: `${process.env.FRONTEND_URL}`,
//   methods: ["GET", "POST", "DELETE", "PUT","PATCH"],
//   allowedHeaders: [
//     "Content-Type",
//     "Authorization",
//     "Cache-Control",
//     "Expires",
//     "Pragma"
//   ],
//   credentials: true,
// }));
// app.use(express.json());

// app.use("/api", MenuRoutes);
// app.use("/api", OrderRoutes);
// app.use("/api", AnalyticsRoutes);
// app.use("/api", TaxesAndChargesRoutes);
// app.use("/api", Offers);
// app.use("/api", ManageStatusRoutes(io));
// connectToMongoDB();

// // Start the server
// const PORT = 3000;
// server.listen(PORT, () => {
//   console.log(`Server is running on http://localhost:${PORT}`);
// });

const express = require("express");
const http = require("http");
const cors = require("cors");
const { Server } = require("socket.io");

const connectToMongoDB = require("./db");
const MenuRoutes = require("./routes/MenuRouter");
const OrderRoutes = require("./routes/OrderRoutes/Order");
const ManageStatusRoutes = require("./routes/OrderRoutes/ManageOrdersStatus");
const AnalyticsRoutes = require("./routes/AnalyticRoutes");
const TaxesAndChargesRoutes = require("./routes/Taxes&ChargesFotTiffinsRoutes");
const Offers = require ("./routes/Offer");

// const app = express();
const vendorRoutes = require("./routes/vendorRoutes");
const bodyParser = require("body-parser");
const firmRoutes = require("./routes/firmRoutes");
const productRoutes = require("./routes/productsRoutes");
const claimRoutes = require("./routes/claimRoutes");
const path = require("path");
const swaggerUi = require("swagger-ui-express");
const swaggerJsDoc = require("swagger-jsdoc");
const helmet = require("helmet");
const passport = require("passport");
const session = require("express-session");
const googleAuthConfig = require("./config/google.config");
const routeConfig = require("./config/route.config");

//from .env file
// const PORT = process.env.PORT || 4040;

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


const allowedOrigins = [`${process.env.FRONTEND_URL}`];
const app = express();
const server = http.createServer(app); // Use HTTP server to attach Socket.IO
const io = new Server(server, {
  cors: {
    origin: allowedOrigins, // Or use your specific frontend URL if in production
    methods: ["GET", "POST", "DELETE", "PUT"],
  },
});

io.on("connection", (socket) => {
  // console.log(`Client connected: ${socket.id}`);

  // Emit a test event
  socket.emit("testEvent", { message: "Hello from the server!" });

  socket.on("disconnect", () => {
    // console.log(`Client disconnected: ${socket.id}`);
  });
});

app.use(express.json());

app.use(cors({
  origin: `${process.env.FRONTEND_URL}`,
  methods: ["GET", "POST", "DELETE", "PUT","PATCH"],
  allowedHeaders: [
    "Content-Type",
    "Authorization",
    "Cache-Control",
    "Expires",
    "Pragma"
  ],
  credentials: true,
}));
app.use(express.json());

const swaggerDocs = swaggerJsDoc(swaggerOptions);
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocs));

app.use("/api", MenuRoutes);
app.use("/api", OrderRoutes);
app.use("/api", AnalyticsRoutes);
app.use("/api", TaxesAndChargesRoutes);
app.use("/api", Offers);
app.use("/api", ManageStatusRoutes(io));

app.use("/claim", claimRoutes);
app.use("/vendor", vendorRoutes);
app.use("/firm", firmRoutes);
app.use("/products", productRoutes);
app.use("/uploads", express.static("uploads"));

app.use("/", (req, res) => {
  res.send("<h1>This is Olcademy project</h1>");
});

connectToMongoDB();

// Start the server
const PORT = 3000;
server.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

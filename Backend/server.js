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

app.use("/api", MenuRoutes);
app.use("/api", OrderRoutes);
app.use("/api", AnalyticsRoutes);
app.use("/api", TaxesAndChargesRoutes);
app.use("/api", Offers);
app.use("/api", ManageStatusRoutes(io));
connectToMongoDB();

// Start the server
const PORT = 3000;
server.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

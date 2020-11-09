const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
const stripe = require("stripe")(
  "sk_test_51HlPYyLyVaFzAszhfXD2OiopcAr48vpnpYla9D3F2Bj1Y0xoSkVAyNIQELAK13mSb6SAYn6K4tDl7dG2a74nri5800226RMtpB"
);

// App config
const app = express();

// Middlewares
app.use(cors({ origin: true }));
app.use(express.json());

// API routes
app.get("/", (request, response) => response.status(200).send("hello world"));

app.post("/payments/create", async (request, response) => {
  const total = request.query.total;

  const paymentIntent = await stripe.paymentIntents.create({
    amount: total, // subunits of currency
    currency: "usd",
  });

  // created
  response.status(201).send({
    clientSecret: paymentIntent.client_secret,
  });
});

// Listen command
exports.api = functions.https.onRequest(app);

// endpoint example
// http://localhost:5001/clone-d613f/us-central1/api

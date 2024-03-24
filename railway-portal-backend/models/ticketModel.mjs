import { Schema, connect, model } from "mongoose";

let url =
  "mongodb+srv://prajwalkharode18:<password>@railway-inquiry-cluster.p56onlr.mongodb.net/?retryWrites=true&w=majority&appName=railway-inquiry-cluster";
connect(url)
  .then(() => console.log("Connected to MongoDB Atlas"))
  .catch((err) => console.error("Error connecting to MongoDB Atlas:", err));

const TicketSchema = new Schema({
  gender: {
    type: String,
  },
  animalDescription: {
    type: String,
  },
  incidentType: {
    type: String,
    required: true,
  },
  incidentDescription: {
    type: String,
  },
  incidentDescriptionItems: {
    type: String,
  },
  incidentDescriptionAmount: {
    type: String,
  },
  incidentLocation: {
    type: String,
    required: true,
  },
  trainDetails: {
    type: String,
  },
  platformDetails: {
    type: String,
  },
});

const IncidentTicket = model("Ticket", TicketSchema);

export default IncidentTicket;

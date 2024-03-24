import { Router } from "express";
const router = Router();
import IncidentTicket from "../models/ticketModel.mjs";

router.get("/tickets", async (req, res) => {
  try {
    const tickets = await IncidentTicket.find();
    res.send(tickets);
  } catch (err) {
    res.status(500).send(err);
  }
});

router.post("/tickets/new", async (req, res) => {
  try {
    const ticketDetails = new IncidentTicket(req.body);
    await ticketDetails.save();
    res.status(201).send(ticketDetails);
  } catch (err) {
    res.status(400).send(err);
  }
});

router.put("/tickets/edit/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const updatedIncident = await IncidentTicket.findByIdAndUpdate(
      id,
      req.body,
      {
        new: true,
      }
    );
    res.status(200).json(updatedIncident);
  } catch (error) {
    console.error("Error updating incident ticket ", error);
    res.status(500).json({ message: "Incident update unsuccessful" });
  }
});

router.delete("/tickets/:id", async (req, res) => {
  try {
    const { id } = req.params;
    await IncidentTicket.findByIdAndDelete(id);
    res.status(200).json({ message: "Incident deleted successfully" });
  } catch (error) {
    console.error("Error deleting incident ticket ", error);
    res.status(500).json({ message: "Incident delete unsuccessful" });
  }
});

export default router;

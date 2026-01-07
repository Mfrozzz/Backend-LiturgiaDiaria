import { Router } from "express";
import {
    getTodaysLiturgy,
    getLiturgyByDate
} from "../services/liturgy.service";

const router = Router();

router.get("/today", async (_, res) => {
    try {
        const liturgia = await getTodaysLiturgy();
        res.json(liturgia);
    } catch {
        res.status(500).json({ error: "Error when searching for liturgy of the day" });
    }
});

router.get("/:day/:month", async (req, res) => {
    try {
        const day = req.params.day;
        const month = req.params.month;

        if (!day || !month) {
            return res
                .status(400)
                .json({ error: "Parameters day and month are required" });
        }

        const liturgy = await getLiturgyByDate(day, month);
        res.json(liturgy);
    } catch {
        res.status(500).json({ error: "Error when searching for liturgy by date" });
    }
});

export default router;
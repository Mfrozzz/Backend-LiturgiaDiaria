import express from "express";
import liturgyRoutes from "./routes/liturgy.routes";
import config from "./config";
import RateLimiter from './middlewares/RateLimiter';

const app = express();
const port = config.port;
const rateLimiter = new RateLimiter();

app.use(express.json());
app.use(rateLimiter.limiter());

app.get("/", (_, res) => {
  res.send("Daily Liturgy app - SDB - BPA 🙏");
});

app.use("/liturgy", liturgyRoutes);

app.listen(port, () => {
  console.log(`🔥 Server is running on http://localhost:${port}`);
});

import express from "express";
import liturgyRoutes from "./routes/liturgy.routes";
import config from "./config";
import RateLimiter from './middlewares/RateLimiter';
// import { getTodaysLiturgy } from "./services/liturgy.service";
// import { formatFullLiturgyToMarkdown, formatLiturgyPrayersToMarkdown, formatLiturgyReadingsToMarkdown } from "./formatters/liturgy.formatter";

const app = express();
const port = config.port;
const rateLimiter = new RateLimiter();

app.use(express.json());
app.use(rateLimiter.limiter());

app.get("/", (_, res) => {
	res.send("Daily Liturgy app - SDB - BPA 🙏");
});

app.use("/liturgy", liturgyRoutes);

// app.get("/test", async (_, res) => {
// 	const liturgy = await getTodaysLiturgy();
// 	const text = formatFullLiturgyToMarkdown(liturgy);
// 	res.send(`<pre>${text}</pre>`);
// });

app.listen(port, () => {
	console.log(`🔥 Server is running on http://localhost:${port}`);
});
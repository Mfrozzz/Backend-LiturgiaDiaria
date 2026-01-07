import rateLimit from "express-rate-limit";

export default class RateLimiter{
    public limiter(){
        return rateLimit({
            windowMs: 3 * 60 * 1000,
            max: 100,
            message: "Too many requests, please try again later."
        });
    }
}
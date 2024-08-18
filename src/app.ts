import express, { Request, Response, NextFunction, Application } from "express";

const app: Application = express();
const PORT = 3000;

app.listen(PORT, () => {
	console.log(`✅ Server started & running on port:`, PORT);
});

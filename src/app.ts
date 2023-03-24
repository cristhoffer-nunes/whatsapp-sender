import Sender from "./sender"
import express, { Request, Response } from "express"

const sender = new Sender()

const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.get("/status", (request: Request, response: Response) => {
	try {
		return response.send({
			qr_code: sender.qrCode,
			connected: sender.isConnected,
		})
	} catch (error) {
		console.error("error", error)
		response.status(500).json({
			status: "error",
			message: error,
		})
	}
})
app.post("/send", async (request: Request, response: Response) => {
	try {
		const { number, message } = request.body

		await sender.sendText(number, message)

		return response.status(200).json()
	} catch (error) {
		console.error("error", error)
		response.status(500).json({
			status: "error",
			message: error,
		})
	}
})

app.listen(5000, () => console.log(`Server is running on port 5000`))

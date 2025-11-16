import axios from "axios";
import AppError from "./AppError.util.js";
import { LOGIN_TEMPLATE } from "./mailTemplates.util.js";

export async function sendLoginEmail(email: string, loginToken: string) {
    const apiKey = process.env.BREVO_API_KEY;
    const senderEmail = process.env.BREVO_SENDER_MAIL;

    if (!apiKey || !senderEmail) {
        throw new AppError(500, "Email service not configured");
    }

    const htmlContent = LOGIN_TEMPLATE.replace("{loginToken}", loginToken);

    try {
        await axios.post(
            "https://api.brevo.com/v3/smtp/email",
            {
                sender: { name: "HaalChaal", email: senderEmail },
                to: [{ email }],
                subject: "Your Login Code",
                htmlContent,
            },
            {
                headers: {
                    "api-key": apiKey,
                    "Content-Type": "application/json",
                },
            }
        );
    } catch (err: any) {
        throw new AppError(500, err);
    }
}

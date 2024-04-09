const express = require("express");
const nodemailer = require("nodemailer");
const router = express.Router();

router.post("/send-email", async (req, res) => {
    const { otp, mail, phone } = req.body;
    const transporter = nodemailer.createTransport({
        host: "smtp.gmail.com",
        port: 465,
        secure: true,
        auth: {
            user: "nguyentrungquang20012001@gmail.com",
            pass: "ljst qrsl xcfb vhas",
        },
    });

    try {
        await transporter.sendMail({
            from: "nguyentrungquang20012001@gmail.com",
            to: mail,
            subject: "Xác nhận OTP",
            text: `Xin chào,
    Số điện thoại của bạn: ${phone}
    Email của bạn: ${mail}
    Đây là mã OTP của bạn: ${otp}

    Trân trọng,
    Nguyễn Trung Quang`,
        });
        res.status(200).json({ data: "Email sent successfully" });
    } catch (error) {
        console.error("Error sending email:", error);
        res.status(500).send("Internal Server Error");
    }
});

module.exports = router;

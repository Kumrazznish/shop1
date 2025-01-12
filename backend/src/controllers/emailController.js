const nodemailer = require('nodemailer');

exports.sendEmail = async (req, res) => {
    const { email, subject, message } = req.body;

    // Create transporter for email
    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: process.env.EMAIL,
            pass: process.env.PASSWORD,
        },
    });

    // Email options
    const mailOptions = {
        from: process.env.EMAIL,
        to: email,
        subject: subject,
        text: message,
    };

    try {
        await transporter.sendMail(mailOptions);
        res.status(200).json({ message: 'Email sent successfully' });
    } catch (error) {
        console.error('Error sending email:', error);
        res.status(500).json({ error: 'Failed to send email' });
    }
};

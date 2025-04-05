let otps = {};

export default function handler(req, res) {
  if (req.method !== "POST") return res.status(405).end();

  const { email, otp } = req.body;

  if (!email || !otp) return res.status(400).json({ error: "Email and OTP are required" });

  if (otps[email] === otp) {
    delete otps[email];
    res.status(200).json({ success: true });
  } else {
    res.status(400).json({ success: false, message: "Invalid OTP" });
  }
}

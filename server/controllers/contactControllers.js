import nodemailer from "nodemailer";

export const sendEmails = async (req, res, next) => {
    try {
        const formData = req.body.formData;
        console.log(formData);
        // Set up Nodemailer transporter
        const transporter = nodemailer.createTransport({
            service: "gmail",
            auth: {
                user: process.env.FROM_EMAIL,
                pass: process.env.FROM_EMAIL_PASS,
            },
        });

        // Email options
        const ownerMailOptions = {
            from: process.env.FROM_EMAIL,
            to: process.env.TO_EMAIL,
            subject: "Contact Form Submission on DirtyDan",
            text: `
                   NAME: ${formData.fullName}

                   EMAIL: ${formData.email}

                   CONTACT NO: +${formData.phone || "Not Provided"}

                   MESSAGE: ${formData.message}
                   `
        };
        const userMailOptions = {
            from: process.env.FROM_EMAIL,
            to: formData.email,
            subject: "Contact Form Submitted on DirtyDan",
            text: `Dear ${formData.fullName}! We've got your query . We'll get back to you soon. Thanks for reaching out!`
        };

        
        // Send email asynchronously
        const ownerInfo = await transporter.sendMail(ownerMailOptions);
        console.log("Email sent successfully to owner:", ownerInfo.response);
        
        // send response before sending email to user for fast submission
        res.json({ success: "Form Submitted Successfully!" });

        // send email to user
        const userInfo = await transporter.sendMail(userMailOptions);
        console.log("Email sent successfully to user:", userInfo.response);

    } catch (err) {
        console.error(err);
        next(err);
    }

}
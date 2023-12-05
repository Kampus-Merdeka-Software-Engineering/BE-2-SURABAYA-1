const prisma = require('../config/prisma');

const contactUs= ('/contact-us', async (req, res) => {
    try {
      const { firstName, lastName, email, mobileNumber, message } = req.body;
  
      const contact = await prisma.contact.create({
        data: {
          firstName,
          lastName,
          email,
          mobileNumber,
          message,
        },
      });
  
      res.status(201).json({ message: 'Contact Us form submitted successfully', contact });
    } catch (error) {
      console.error('Error submitting Contact Us form:', error.message);
      res.status(500).json({ error: 'Failed to submit Contact Us form' });
    }
  });

  module.exports={contactUs}
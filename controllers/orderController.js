const prisma = require('../config/prisma');

const createOrder = ('/order', async (req, res) => {
  try {
    const { name, TlpNumber, email, location, pickupDate, returnDate, pickupTime } = req.body;

    const newOrder = await prisma.appointment.create({
      data: {
        name,
        TlpNumber,
        email,
        location,
        pickupDate,
        returnDate,
        pickupTime,
      },
    });

    res.json(newOrder); // Menggunakan newOrder sebagai respons
  } catch (error) {
    console.error('Error creating order:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

module.exports = { createOrder };
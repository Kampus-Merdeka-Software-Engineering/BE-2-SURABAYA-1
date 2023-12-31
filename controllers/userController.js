const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const prisma = require('../config/prisma');

const register = async (req, res) => {
    try {
      const { email_or_phone, password } = req.body;
      console.log('Password Before Hashing:', password);
      const hashedPassword = await bcrypt.hash(password, 10);
      console.log('Hashed Password:', hashedPassword);
  
      const user = await prisma.user.create({
        data: {
          email_or_phone,
          password: hashedPassword,
        }
      });
  
      res.json({ user, message: 'Registrasi anda berhasil' });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  };

const login = async (req, res) => {
  try {
    const { email_or_phone, password } = req.body;

    const user = await prisma.user.findFirst({
      where: { email_or_phone },
    });

    console.log('Received Password:', password);
    console.log('User Password from Database:', user.password);
    
    if (!user) {
      return res.status(401).json({ error: 'Enter data correctly' });
    }

    const passwordMatch = await bcrypt.compare(password, user.password);

    if (!passwordMatch) {
      return res.status(401).json({ error: 'Your Password is Incorrect' });
    }

    const token = jwt.sign({ userId: user.id }, 'secret_key', { expiresIn: '1h' });

    res.json({ token, message: 'Login Successful' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

module.exports = { register, login };

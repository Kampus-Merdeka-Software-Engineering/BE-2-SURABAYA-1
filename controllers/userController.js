const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const prisma = require('../config/prisma');

const register = async (req, res) => {
    try {
      const { email_or_phone, username, password } = req.body;
      const hashedPassword = await bcrypt.hash(password, 10);
  
      const user = await prisma.user.create({
        data: {
          email_or_phone,
          username,
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
    const { username, password } = req.body;

    const user = await prisma.user.findUnique({
      where: { username },
    });

    if (!user) {
      return res.status(401).json({ error: 'Masukkan data dengan benar' });
    }

    const passwordMatch = await bcrypt.compare(password, user.password);

    if (!passwordMatch) {
      return res.status(401).json({ error: 'Password Anda Salah' });
    }

    const token = jwt.sign({ userId: user.id }, 'secret_key', { expiresIn: '1h' });

    res.json({ token, message: 'Login berhasil' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

module.exports = { register, login };

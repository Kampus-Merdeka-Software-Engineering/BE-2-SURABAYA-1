// const userService = require('../services/userService');

// async function register(req, res) {
//     const { emailOrPhone, username, password } = req.body;

//     try {
//         const result = await userService.register(emailOrPhone, username, password);
//         res.status(201).json({ message: 'Registrasi berhasil', result });
//     } catch (error) {
//         console.error('Error registering user:', error.message);
//         res.status(500).json({ error: 'Gagal melakukan registrasi' });
//     }
// }

// async function login(req, res) {
//     const { emailOrPhone, password } = req.body;

//     try {
//         const result = await userService.login(emailOrPhone, password);
//         res.status(200).json({ message: 'Login berhasil', result });
//     } catch (error) {
//         console.error('Error logging in user:', error.message);
//         res.status(401).json({ error: 'Email/No HP atau password salah' });
//     }
// }

// Controllers/authController.js
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
  
      res.json({ user, message: 'User registered successfully' });
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
      return res.status(401).json({ error: 'Invalid credentials' });
    }

    const passwordMatch = await bcrypt.compare(password, user.password);

    if (!passwordMatch) {
      return res.status(401).json({ error: 'Invalid credentials' });
    }

    const token = jwt.sign({ userId: user.id }, 'secret_key', { expiresIn: '1h' });

    res.json({ token, message: 'Login successful' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

module.exports = { register, login };

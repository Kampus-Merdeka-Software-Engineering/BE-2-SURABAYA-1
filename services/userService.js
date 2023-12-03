// const prisma = require('../config/prisma')

// async function register (emailOrPhone, username,password){
//     try {
//         const response = await prisma.fetch('/register',{
//             method: 'POST',
//             headers:{
//                 'Content-Type' : 'application/json'
//             },
//             body: JSON.stringify({email_or_phone: emailOrPhone, username, password})
//         });

//         if(!response.ok){
//             const data = await response.json();
//             throw new Error(data.error || 'Gagal melakukan registrasi');
//         }
//         return await response.json();
//     }catch (error){
//         console.error('Error registering user:', error.message);
//         throw error;
//     }
// }

// async function login(emailOrPhone, password) {
//     try {
//         const response = await prisma.fetch('/login', {
//             method: 'POST',
//             headers: {
//                 'Content-Type': 'application/json',
//             },
//             body: JSON.stringify({ email_or_phone: emailOrPhone, password }),
//         });

//         if (!response.ok) {
//             const data = await response.json();
//             throw new Error(data.error || 'Gagal melakukan login');
//         }

//         return await response.json();
//     } catch (error) {
//         console.error('Error logging in user:', error.message);
//         throw error;
//     }
// }

// module.exports={
//     register,
//     login
// }
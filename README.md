Untuk kak Aulia dan Ulfi

Udah bisa Masukin shcema databasenya ya semisal
tabel user butuhnya email/nohp, username dan password -> buat kode di file schema.prisma

model user {
    email string
    username @id string
    password
}

Untuk migrate nanti kita cara tempat database terlebih dahulu entah railway atau apa nanti.

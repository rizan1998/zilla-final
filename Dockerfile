# Menggunakan node versi terbaru sebagai base image
FROM node:latest

# Menentukan direktori kerja dalam container
WORKDIR /app

# Menyalin package.json dan package-lock.json ke dalam container
COPY ./app/package*.json /app

# Update paket dan instal dependensi sistem
RUN apt-get update && apt-get install -y \
    # list paket yang ingin diinstal di sini
    && rm -rf /var/lib/apt/lists/*

# Menjalankan perintah yarn install untuk menginstal dependensi aplikasi
RUN yarn global add nodemon
RUN yarn install


# Menyalin seluruh sumber kode aplikasi ke dalam container
COPY ./app/. /app/


CMD ["yarn", "run", "dev"]
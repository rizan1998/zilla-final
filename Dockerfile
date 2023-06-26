# Menggunakan node versi terbaru sebagai base image
# FROM node:16-alpine3.18
FROM node:16.20
# FROM node:20.3.1-bullseye
RUN apt-get update && apt-get install -y python3 gcc

# Menentukan direktori kerja dalam container
WORKDIR /app

# Menyalin package.json dan package-lock.json ke dalam container
COPY ./app/package*.json ./

# Menjalankan perintah yarn install untuk menginstal dependensi aplikasi
RUN yarn global add nodemon
RUN yarn install


# Menyalin seluruh sumber kode aplikasi ke dalam container
COPY ./app/. /app

EXPOSE 3301

CMD ["yarn", "run", "dev"]
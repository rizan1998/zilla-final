# Menggunakan node versi terbaru sebagai base image
# FROM node:16-alpine3.18
FROM node:latest
# FROM node:20.3.1-bullseye
RUN apt-get update && apt-get install -y python3 gcc

RUN apt-get --no-cache ca-certificates
# Menentukan direktori kerja dalam container
WORKDIR /app

# Menyalin package.json dan package-lock.json ke dalam container
COPY ./app/package*.json ./
# COPY ./app/yarn.lock ./

# # Update paket dan instal dependensi sistem
# RUN apt-get update && apt-get install -y \
#     # list paket yang ingin diinstal di sini=
#     build-essential \
#     python3 \
#     && rm -rf /var/lib/apt/lists/*
    


# Menjalankan perintah yarn install untuk menginstal dependensi aplikasi
# RUN yarn global add node-pre-gyp
RUN yarn global add nodemon
RUN yarn install


# Menyalin seluruh sumber kode aplikasi ke dalam container
COPY ./app/. /app

# EXPOSE 8080
EXPOSE 3301

CMD ["yarn", "run", "dev"]
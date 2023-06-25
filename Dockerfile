# Menggunakan node versi terbaru sebagai base image
FROM node:latest
# FROM node:20.3.1-bullseye

# Menentukan direktori kerja dalam container
WORKDIR /app

# Menyalin package.json dan package-lock.json ke dalam container
COPY ./app/package.json /app/
COPY ./app/yarn.lock /app/

# Update paket dan instal dependensi sistem
RUN apt-get update && apt-get install -y \
    # list paket yang ingin diinstal di sini=
    python3 \
    build-essential \
    && rm -rf /var/lib/apt/lists/*
    

# Menjalankan perintah yarn install untuk menginstal dependensi aplikasi
RUN yarn global add nodemon
# RUN yarn global add node-pre-gyp
RUN yarn install --frozen-lockfile


# Menyalin seluruh sumber kode aplikasi ke dalam container
COPY ./app/. /app

# EXPOSE 8080
EXPOSE 3000

CMD ["yarn", "run", "dev"]
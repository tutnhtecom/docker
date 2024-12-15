# Sử dụng Node.js làm base image
FROM node:18-alpine

# Cài đặt thư mục làm việc trong container
WORKDIR /usr/src/app

# Copy file package.json và package-lock.json để cài đặt phụ thuộc
COPY package*.json ./

# Cài đặt các package phụ thuộc
# RUN npm install

# Copy toàn bộ mã nguồn vào container
COPY . .

# Build ứng dụng Nuxt.js
# RUN npm run build

# Khởi chạy ứng dụng ở chế độ production
CMD ["npm", "run", "dev"]

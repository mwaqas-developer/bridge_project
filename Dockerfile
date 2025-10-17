FROM node:22-alpine

WORKDIR /app

COPY package*.json ./

# Force fresh install (Linux-compatible)
RUN npm install --no-optional

COPY . .

EXPOSE 5173
CMD ["npm", "run", "dev", "--", "--host"]

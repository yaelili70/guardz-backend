FROM node:14-alpine as builder

WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

FROM node:14-alpine

WORKDIR /app
COPY package*.json ./
RUN npm install
COPY --from=builder /app/dist ./dist
EXPOSE 8080

CMD ["npm", "run", "start"]
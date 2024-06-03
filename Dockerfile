FROM node:18-alpine

# WORKDIR /app
# COPY package*.json ./
# RUN npm ci --omit dev
# COPY . .

# RUN npm run build
# EXPOSE 4173
# CMD [ "node", "build" ]


RUN mkdir -p /app
WORKDIR /app
COPY package*.json ./
RUN npm install
# RUN npm ci --omit dev

COPY . .
RUN npm run build

CMD ["node", "build"]

EXPOSE 3000
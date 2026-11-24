# syntax=docker/dockerfile:1.7
FROM node:24-alpine AS build
WORKDIR /app
COPY package.json package-lock.json ./
RUN npm ci --no-audit --no-fund
COPY . .
# Optional detailed basemap: docker build --build-arg PUBLIC_MAPBOX_TOKEN=pk.… .
ARG PUBLIC_MAPBOX_TOKEN=""
ENV PUBLIC_MAPBOX_TOKEN=$PUBLIC_MAPBOX_TOKEN
RUN npm run build && npm prune --omit=dev

FROM node:24-alpine AS runtime
ENV NODE_ENV=production PORT=3000
WORKDIR /app
COPY --from=build --chown=node:node /app/build ./build
COPY --from=build --chown=node:node /app/node_modules ./node_modules
COPY --from=build --chown=node:node /app/package.json /app/server.js ./
USER node
EXPOSE 3000
CMD ["node", "server.js"]

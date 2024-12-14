FROM node:20-alpine
ENV NODE_ENV=production
ENV NODE_OPTIONS="--openssl-legacy-provider"
WORKDIR /app
COPY package.json yarn.lock* ./
COPY tsconfig.json ./
COPY next.config.js ./
RUN yarn install
COPY . .
ENV NODE_ENV=production
RUN yarn build
RUN yarn install --production
CMD ["yarn", "start"]
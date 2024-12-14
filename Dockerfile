FROM node:20-alpine
ENV NODE_ENV=production
ENV NODE_OPTIONS="--openssl-legacy-provider"
WORKDIR /app
COPY package.json yarn.lock* ./
RUN yarn install
COPY . .
RUN yarn build
CMD ["yarn", "start"]
FROM node:lts as dependencies
WORKDIR /next-app
COPY package.json ./
RUN yarn install --frozen-lockfile

FROM node:lts as builder
WORKDIR /next-app
COPY . .
COPY --from=dependencies /next-app/node_modules ./node_modules
RUN yarn build

FROM node:lts as runner
WORKDIR /next-app
ENV NODE_ENV production
# If you are using a custom next.config.js file, uncomment this line.
# COPY --from=builder /my-project/next.config.js ./
COPY --from=builder /next-app/public ./public
COPY --from=builder /next-app/.next ./.next
COPY --from=builder /next-app/node_modules ./node_modules
COPY --from=builder /next-app/package.json ./package.json

EXPOSE 3000
CMD ["yarn", "start"]
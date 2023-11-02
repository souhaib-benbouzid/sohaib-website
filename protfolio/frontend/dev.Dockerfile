FROM node:18-alpine

WORKDIR /app
COPY package.json yarn.lock* ./
RUN yarn --frozen-lockfile

COPY . .

ENV NEXT_TELEMETRY_DISABLED 1

CMD yarn dev

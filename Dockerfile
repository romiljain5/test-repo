# Triggers: latest tag, USER root, ARG secrets, COPY .env, HEALTHCHECK NONE
FROM node:latest
WORKDIR /app

# Triggers: secrets as build args
ARG API_KEY
ARG PASSWORD
ARG SECRET_TOKEN

# Triggers: COPY of sensitive files
COPY .env ./
COPY credentials.json ./
COPY app.key ./

RUN npm ci --only=production

# Triggers: running as root
USER root

EXPOSE 3000
CMD ["node", "index.js"]

# Triggers: HEALTHCHECK disabled
HEALTHCHECK NONE

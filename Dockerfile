# L3 fixture: final stage has no USER (non-root) — triggers l3-dockerfile-user
FROM node:20-alpine AS deps
WORKDIR /app
RUN echo "build"

FROM node:20-alpine
WORKDIR /app
COPY --from=deps /app /app
CMD ["node", "-e", "console.log('ok')"]

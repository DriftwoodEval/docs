FROM node:lts-slim AS builder
ENV PNPM_HOME="/pnpm"
ENV PATH="$PNPM_HOME:$PATH"
WORKDIR /app
RUN corepack enable
COPY package.json pnpm-lock.yaml ./
RUN pnpm install --frozen-lockfile
COPY . .
RUN pnpm run build

FROM httpd:2.4 AS runtime
COPY --from=builder /app/dist /usr/local/apache2/htdocs/
EXPOSE 80

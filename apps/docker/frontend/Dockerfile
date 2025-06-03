# apps/docker/frontend/Dockerfile

FROM node:20-slim as base

ARG NEXT_PUBLIC_API_URL

# Create the working directory
WORKDIR /app

# Create the non-root user 'app'
RUN useradd -ms /bin/sh -u 1001 app

# IMPORTANT FIX: Change ownership of the WORKDIR to the 'app' user
# This ensures the 'app' user has full write permissions within /app
RUN chown -R app:app /app

# Switch to the non-root user
USER app

# Copy package.json and package-lock.json first to leverage Docker cache
# Use --chown here as well for consistency, though it's less critical now after chowning /app
COPY --chown=app:app /apps/frontend/package.json /apps/frontend/package-lock.json ./

# Install dependencies - now 'app' user has write permissions to /app
RUN npm ci

# Copy the rest of your application code
COPY --chown=app:app /apps/frontend/ .

FROM base as prod
# If you have a build step, it goes here
RUN npm run build
CMD ["npm", "start", "3000"] # Or CMD ["node", "server.js"] for Next.js output

FROM base as dev
CMD ["npm", "run", "dev"]
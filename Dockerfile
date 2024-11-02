# Use a base image with Bun pre-installed
FROM oven/bun:latest AS builder

# Set the working directory
WORKDIR /app

# Copy the package.json, tsconfig.json, and bun.lockb files to the working directory
COPY ./package.json ./tsconfig.json ./bun.lockb ./

# Install dependencies using Bun
RUN bun install

# Copy the rest of the application code
COPY . .

# Build the NestJS application
RUN bun run build

# Use a lightweight image to serve the application
FROM builder AS production

# Set the working directory in the production image
WORKDIR /app

# Copy built files and .env file from the builder image
COPY --from=builder /app/dist ./dist
COPY --from=builder /app/.env ./

# Copy the package.json, tsconfig.json, and bun.lockb files to the working directory
COPY ./package.json ./tsconfig.json ./bun.lockb ./

# Install only the production dependencies
RUN bun install --frozen-lockfile --production

# Expose the port the app runs on
EXPOSE 5173

# Command to run the NestJS application
CMD ["bun", "run","start"]




# Use the official Bun image as the base
FROM oven/bun:1 AS base

# Set the working directory inside the container
WORKDIR /app

# Copy the package.json, tsconfig.json, and bun.lockb files from the build context to the working directory
COPY ./package.json ./
COPY ./tsconfig.json ./
COPY ./bun.lockb ./

# Install application dependencies using Bun
RUN bun install

# Copy the remaining application files from the build context to the working directory
COPY . .

# Build the application for production
RUN bun run build

ENV VITE_API_URL $VITE_API_URL
ENV VITE_API_KEY $VITE_API_KEY

# Expose the port on which the app will run
EXPOSE 5173

# Define the command to start the built application
CMD ["bun", "run", "start"]

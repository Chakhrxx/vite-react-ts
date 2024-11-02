docker-compose -f docker-compose.yaml -p vite-nginx down --volumes --remove-orphans || true;
bun run dev;

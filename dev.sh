echo "🚀 Starting Arctis Dev Environment..."

# Start docs
(
  cd docs || exit
  echo "📚 Starting Mintlify..."
  mintlify dev
) &

DOCS_PID=$!

# Start web
(
  cd web || exit
  echo "🧪 Starting Next.js..."
  pnpm dev
) &

DEMO_PID=$!

# Graceful shutdown on CTRL+C
trap "echo '🛑 Shutting down...'; kill $DOCS_PID $DEMO_PID; exit" INT

# Wait for both
wait

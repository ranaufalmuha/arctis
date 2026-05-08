# Pixi.js

## Core Rules
- Use Pixi.js for WebGL rendering in React.
- Initialize application in useEffect with cleanup.
- Particles respond to mouse position.
- Keep particle count configurable (default 150).
- Run as non-blocking background layer.
- Use requestAnimationFrame for smooth rendering.

## Avoid
- Excessive particle count (>500)
- Complex physics without throttling
- Blocking the main thread

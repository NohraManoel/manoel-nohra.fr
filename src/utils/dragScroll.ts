// Click-and-drag horizontal scrolling for mouse users (touch already scrolls natively).
// Returns a function telling whether the mouse is currently held down on the track.
export function enableDragScroll(track: HTMLElement, onDrag?: () => void): () => boolean {
  let isDown = false;
  let isDragging = false;
  let startX = 0;
  let scrollLeft = 0;

  track.addEventListener('mousedown', (e) => {
    isDown = true;
    isDragging = false;
    startX = e.pageX - track.offsetLeft;
    scrollLeft = track.scrollLeft;
  });

  track.addEventListener('mouseleave', () => {
    isDown = false;
  });

  track.addEventListener('mouseup', () => {
    isDown = false;
    // Delay clearing isDragging so the capture-phase click handler can intercept it
    setTimeout(() => {
      isDragging = false;
    }, 50);
  });

  track.addEventListener('mousemove', (e) => {
    if (!isDown) return;
    e.preventDefault();
    const walk = (e.pageX - track.offsetLeft - startX) * 2; // scroll speed multiplier
    if (Math.abs(walk) > 5) isDragging = true;
    track.scrollLeft = scrollLeft - walk;
    onDrag?.();
  });

  // Prevent clicks (e.g. opening the lightbox) if we just dragged
  track.addEventListener('click', (e) => {
    if (isDragging) {
      e.preventDefault();
      e.stopPropagation();
    }
  }, true);

  return () => isDown;
}

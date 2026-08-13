export function getFps(duration = 2000) {
  let frames = 0;
  const start = performance.now();
  function loop(now) {
    frames++;
    if (now - start >= duration) {
      const fps = Math.round((frames * 1000) / duration);
      if (fps < 35) {
        document.body.classList.add("no-animation");
      }
      return; 
    }
    requestAnimationFrame(loop);
  }
  requestAnimationFrame(loop);
}

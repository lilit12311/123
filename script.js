// Optional: Tambahkan animasi posisi acak
document.querySelectorAll('.floating-text').forEach((el) => {
  const speed = Math.random() * 5 + 5;
  el.style.animationDuration = `${speed}s`;
});

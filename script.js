'use strict';

const playBtns = document.querySelectorAll('.play-btn');

playBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    const isPlaying = btn.classList.contains('playing');
    if (!isPlaying) {
      btn.classList.add('playing');
      btn.textContent = '▐▐';
    } else {
      btn.classList.remove('playing');
      btn.textContent = '▶';
    }
  });
})
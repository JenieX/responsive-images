let timeoutId;

const imgElement = document.querySelector('.img');
const currentSourceElement = document.querySelector('.current-src');
currentSourceElement.textContent = imgElement.currentSrc.split('/').pop();

window.addEventListener('resize', (event) => {
  if (timeoutId !== undefined) {
    clearTimeout(timeoutId);
  }

  timeoutId = setTimeout(() => {
    currentSourceElement.textContent = imgElement.currentSrc.split('/').pop();
  }, 300);
});

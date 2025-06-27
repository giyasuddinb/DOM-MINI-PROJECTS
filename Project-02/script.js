const generateRGBColor = () => {
  const red = Math.floor(Math.random() * 255);
  const green = Math.floor(Math.random() * 255);
  const blue = Math.floor(Math.random() * 255);

  return `rgb(${red}, ${green}, ${blue})`;
};

const updateColor = () => {
  const color = generateRGBColor();
  const colorBox = document.getElementById('colorBox');
  const colorCode = document.getElementById('colorCode');

  colorBox.style.backgroundColor = color;
  colorCode.innerText = color;
};

const copyColorCode = () => {
  const colorCode = document.getElementById('colorCode');
  const inputTag = document.createElement('input');
  document.body.appendChild(inputTag);
  inputTag.value = colorCode.innerText;

  inputTag.select();
  document.execCommand('copy');
  document.body.removeChild(inputTag);
  alert('Color Code is Copyed!');
};

document.getElementById('colorCodeCopyBtn')?.addEventListener('click', () => {
  copyColorCode();
});

function generateNewColor() {
  updateColor();
}

const { ipcRenderer } = require('electron');

document.getElementById('searchButton').addEventListener('click', () => {
  const searchText = window.getSelection().toString();
  ipcRenderer.send('search', searchText);
});

document.getElementById('insertImage').addEventListener('click', () => {
  const imageUrl = prompt('Введите URL изображения:');
  if (imageUrl) {
    document.execCommand('insertImage', false, imageUrl);
  }
});

document.getElementById('makeLink').addEventListener('click', () => {
  const url = prompt('Введите URL:');
  if (url) {
    document.execCommand('createLink', false, url);
  }
});

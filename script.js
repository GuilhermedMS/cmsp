document.addEventListener('contextmenu', function(e) {
  e.preventDefault();
});

async function copyToClipboard(url) {
  try {
      const response = await fetch(url);

      if (!response.ok) {
          throw new Error('Erro ao buscar o script');
      }

      const code = await response.text();
      await navigator.clipboard.writeText(code);
      alert(' \nScript copiado com sucesso!\n ');

  } catch (error) {
      console.error('Erro:', error);
      alert(' \nErro ao copiar o Script. Tente novamente.\n ');
  }
}

document.getElementById('cmspButton').addEventListener('click', async () => {
  window.open('http://127.0.0.1:3000/src/pages/cmsp/cmsp.html', '_blank');
});

document.getElementById('speakButton').addEventListener('click', async () => {
  await copyToClipboard('https://raw.githubusercontent.com/DarkMod3/CMSP-Plataformas-Hacks/Main/Hacks/SPeak.js');
  window.open('http://127.0.0.1:3000/src/pages/speaksp/speak.html', '_blank');
});

document.getElementById('aluraButton').addEventListener('click', async () => {
  await copyToClipboard('https://raw.githubusercontent.com/DarkMod3/CMSP-Plataformas-Hacks/Main/Hacks/Alura.js');
  window.open('https://github.com/DarkMod3/CMSP-Plataformas-Hacks/blob/Main/Hacks/Alura.md', '_blank');
});


// Lógica para alternar entre temas
const themeToggle = document.getElementById('themeToggle');
themeToggle.addEventListener('click', () => {
  document.body.classList.toggle('dark');
  document.body.classList.toggle('light');
  if (document.body.classList.contains('dark')) {
      themeToggle.innerHTML = '🌙'; // Muda o ícone para lua
  } else {
      themeToggle.innerHTML = '☀️'; // Muda o ícone para sol
  }
});
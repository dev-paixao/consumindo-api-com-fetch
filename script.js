function consumirAPI() {
    const url = 'https://jsonplaceholder.typicode.com/users';
  
    fetch(url)
      .then(response => response.json())
      .then(data => exibirDados(data))
      .catch(error => console.error(error));
  }
  
  function exibirDados(data) {
    const divDadosAPI = document.getElementById('dados-api');
  
    data.forEach(user => {
      const p = document.createElement('p');
      p.textContent = `Nome: ${user.name}, Email: ${user.email}`;
  
      divDadosAPI.appendChild(p);
    });
  }
  
  window.addEventListener('load', consumirAPI);
  
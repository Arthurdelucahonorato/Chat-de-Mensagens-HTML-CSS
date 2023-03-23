function adicionaItem(nomeItem) {
    const novoItem = document.createElement("div");
    novoItem.innerHTML = `<div class="item2">
    <div class="user"><strong>Você diz:</strong></div>
    <div class="chat">${nomeItem}</div>
    </div>`;
  
    const listaCompras = document.querySelector("#tudo");
    listaCompras.appendChild(novoItem);
    setTimeout(() => {
      listaCompras.scroll({ top: listaCompras.scrollHeight, behavior: 'smooth' });
    }, 350);
  }
  
  function formAdiciona(event) {
    event.preventDefault();
    const campoItem = document.querySelector("#men");
    adicionaItem(campoItem.value);
    campoItem.value = "";
  }

  const formAdd = document.querySelector("#forma");
  formAdd.addEventListener("submit",formAdiciona);

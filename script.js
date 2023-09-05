/*
Função "toggleMode()" que significa "Alternar Modo"    

É a função que dará vida ao butão switch 
*/

/*
function toggleMode() {
    const html = document.documentElement
    // if(html.classList.contains("Light")) {
    //     html.classList.remove("Light")
    // } else {
    //     html.classList.add("Light")
    // }   
}
*/

/* As instruções da Função acima podem ser resumidas em duas linhas */
function toggleMode() {
  /*1ª: Pegar ou Localizar a página HTML*/
  const html = document.documentElement

  /*2ª: Fazer a troca das classes*/
  html.classList.toggle("Light")

  /* Agora vamos localizar a tag img da div reservada ao Perfil */
  const img = document.querySelector("#profile img")

  /*Em seguida vamos substituir a img*/
  /* 1º: Se na lista de classes do html contém uma classe nomeada 'Light',
  Então, na propriedade "src", coloque o "endereço da imagem light". */
  if (html.classList.contains("Light")) {
    img.setAttribute("src", "./assets/jane_avatar_light.png")

    /* 2º: Colocar a descrição da imagem no atributo "Alt" para quando a imagem não estiver aparecendo*/
    img.setAttribute(
      "alt",
      "Foto da Joanice sorrindo, uma blusa rosa o cabelo afro, solto e preto e um batom rosa."
    )
  } else {
    /* 1º: Se não tiver, então coloque o endereço da imagem dark na propriedade "src" */
    img.setAttribute("src", "./assets/jane_avatar_dark.png")

    /* 2º Colocar a descrição da imagem no atributo "Alt" para quando a imagem não estiver aparecendo*/
    img.setAttribute(
      "alt",
      "Foto da Joanice sorrindo, usando uma blusa preta e um blaser vermelho."
    )
  }
}

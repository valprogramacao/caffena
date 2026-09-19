/* Lógica de Programação 
[x] Saber quando o usuário clicou no botão
[] Mudar o posicionameto do modal
[] Fazer a mascara ficar visivel
[] Quando clicar na máscara,fechar o modal 
*/
const modal = document.querySelector(".modal")
const mascara = document.querySelector(".mascara")

function mostrarModal() {
    modal.style.left = '50%'
    mascara.style.visibility = 'visible'

}
function esconderModal(){
     modal.style.left = '-34%'
    mascara.style.visibility = 'hidden'

}

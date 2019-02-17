function iniciaModal(modalID){
    const modal = document.getElementById(modalID);
    if(modal) {
        modal.classList.add('mostrar');
        modal.addEventListener('click', function(e){
            if(e.target.id == modalID || e.target.className == 'fechar'){
                modal.classList.remove('mostrar');
            }
        });
    }
}
    const logo = document.querySelectorAll('#iprodutos-modal, #iprodutos-modal-2, #iprodutos-modal-3, #iprodutos-modal-4, #iprodutos-modal-5, #iprodutos-modal-6');
    for (var i = 0; i < logo.length; i++){
        logo[i].addEventListener('click', function() {
        iniciaModal('modal-potion');
} );
    }

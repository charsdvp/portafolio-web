export function sending() {
  const modalText = document.querySelector('.modal-text');
  const iconCheck = document.querySelector('.container-icon');
  const iconMark = document.querySelector('.container-icon-mark');
  const modal = document.querySelector('.modal');
  modal.classList.add('modal-view');
  modalText.textContent = 'Enviando...';

  const serviceID = 'default_service';
  const templateID = 'template_ela3lk2';

  try {
    emailjs.sendForm(serviceID, templateID, this).then(
      () => {
        modalText.textContent = 'Enviado';
        iconMark.style.display = 'none';
        iconCheck.style.display = 'block';
        setTimeout(() => {
          modal.classList.remove('modal-view');
        }, 4000);
      },
      (err) => {
        console.log(err);
      }
    );
  } catch (error) {
    modalText.textContent = 'Ocurrio un error';
    iconMark.style.display = 'block';
    iconCheck.style.display = 'none';
    setTimeout(() => {
      modal.classList.remove('modal-view');
    }, 4000);
  }
}

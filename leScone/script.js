const isOpen = () => {
  const getDate = new Date();
  const day = getDate.getDay();
  const hour = getDate.getHours();
  const funcionamento = document.querySelector('#funcionamento');

  if((day !== 0) && (hour >= 7 && hour < 18)) {
    funcionamento.className = 'aberto';
  } else {
    funcionamento.className = 'fechado';
  }
}
const lblNuevoTicket = document.querySelector('#lblNuevoTicket')
const btnCrear = document.querySelector('button')

// eslint-disable-next-line no-undef
const socket = io()

socket.on('connect', () => {
  btnCrear.disabled = false
})

socket.on('disconnect', () => {
  btnCrear.disabled = true
})

socket.on('ultimo-ticket', (ultimo) => {
  lblNuevoTicket.innerText = 'Ticket ' + ultimo
})

btnCrear.addEventListener('click', () => {
  socket.emit('siguiente-ticket', null, (ticket) => {
    lblNuevoTicket.innerText = ticket
  })
})

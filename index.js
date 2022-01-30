let ticketGroup = document.getElementById('ticketGroup')

let ticketList = ["Ticket 1","Ticket 2","Ticket 3"]

let ticket = (x) =>{
    return `<li class="list-group-item d-flex justify-content-between align-items-left border border-light rounded-0">
    <div class="align-flex-center px-5 py-1 fs-5 fw-bolder">${x}</div>
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#16aa9c" class="bi bi-x-lg align-self-center" viewBox="0 0 16 16">
      <path fill-rule="evenodd" d="M13.854 2.146a.5.5 0 0 1 0 .708l-11 11a.5.5 0 0 1-.708-.708l11-11a.5.5 0 0 1 .708 0Z"/>
      <path fill-rule="evenodd" d="M2.146 2.146a.5.5 0 0 0 0 .708l11 11a.5.5 0 0 0 .708-.708l-11-11a.5.5 0 0 0-.708 0Z"/>
    </svg>
  </li>`
}




const createTickets = () =>{
    ticketList.forEach((a)={
        ticketGroup.appendChild(ticket(a))}
    )
}

createTickets()
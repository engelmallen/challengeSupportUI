let ticketGroup = document.getElementById('ticketGroup')
let ticketItem = document.getElementsByClassName('ticketItem')

let ticketCurVal= "Ticket 1"


let ticketList = ["Ticket 1","Ticket 2","Ticket 3"]


let ticket = (x,y) =>{
    let currentTicket = `<li id="${x}" class="ticketItem list-group-item d-flex justify-content-between align-items-left border border-0 rounded-0" onclick="">
    <div class="align-flex-center px-5 py-1 fs-5 fw-bolder">${x}</div>
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#16aa9c" class="bi bi-x-lg align-self-center" viewBox="0 0 16 16">
      <path fill-rule="evenodd" d="M13.854 2.146a.5.5 0 0 1 0 .708l-11 11a.5.5 0 0 1-.708-.708l11-11a.5.5 0 0 1 .708 0Z"/>
      <path fill-rule="evenodd" d="M2.146 2.146a.5.5 0 0 0 0 .708l11 11a.5.5 0 0 0 .708-.708l-11-11a.5.5 0 0 0-.708 0Z"/>
    </svg>
  </li>`
  return currentTicket
}

let ticketAdd = () =>{
    let addButton = `<li id="addNew" class="list-group-item d-flex justify-content-between align-items-left float-end border-0 text-light rounded-0">
    <div class="align-flex-center px-5 py-1 fs-5 fw-bolder">Add New</div>
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#ffffff" class="bi bi-plus-lg align-self-center" viewBox="0 0 16 16">
      <path fill-rule="evenodd" d="M8 2a.5.5 0 0 1 .5.5v5h5a.5.5 0 0 1 0 1h-5v5a.5.5 0 0 1-1 0v-5h-5a.5.5 0 0 1 0-1h5v-5A.5.5 0 0 1 8 2Z"/>
    </svg>
  </li>`
  return addButton
}

// let changeIt = (ticketButton) => {
//     console.log(ticketCurVal)
//     ticketCurVal = ticketButton.id;
//     ticketValidation()
//     console.log(ticketCurVal)
// }



let ticketValidation = () => {
    for( i = 0; i < ticketItem.length; i++)
        { 
            if(ticketItem[i].id === ticketCurVal){
                ticketItem[i].style.background = "#f4f8f7";

                } 
            }
    }

let ticketEvent = () => {
    for( i = 0; i < ticketItem.length; i++)
        {   console.log(ticketItem[i].id + " is touched")
            ticketItem[i].addEventListener('click', function(a){
            ticketCurVal = a.target.id;
            console.log(ticketCurVal) 
        })
 
            }
    }


const createTickets = () =>{
    ticketGroup.innerHTML = "";
    ticketList.map((i)=>{
        ticketGroup.innerHTML += ticket(i)
        // if()
    })
    ticketGroup.innerHTML += ticketAdd();
    }
    // ticketGroup.innerHTML += ticket('Hellos darkness my old friend')


let doIt = () => {
    createTickets()
    ticketValidation()
    ticketEvent()
}
doIt()
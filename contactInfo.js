const minusButton = document.getElementsByClassName('minusButton')

let infoBodyContact = () => {
    return `            <div
    id="infoBodyContains"
    class="p-4 pb-5 border border rounded-bottom rounded-end">
      <div id="contactInfo" class="">
        
        <div class="fw-bolder d-flex justify-content-between text-success mb-1">CONTACT
          <svg  xmlns="http://www.w3.org/2000/svg" 
                width="16" 
                height="16" 
                fill="#36404a" 
                class="minusButton bi bi-dash-lg align-self-end" 
                viewBox="0 0 16 16">
            <path fill-rule="evenodd" 
                  d="M2 8a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11A.5.5 0 0 1 2 8Z"/>
          </svg>
        </div>
        
        <table id="contactTable" class="table">
          <tbody>
            <tr>
              <td class="fw-bold">Name</td>
              <td>John Doe</td>
              <td class="fw-bold">Department</td>
              <td>Sales</td>
            </tr>
            <tr>
              <td class="fw-bold">Email</td>
              <td>johndoe@gmail.com</td>
              <td class="fw-bold">Reports To</td>
              <td>Ashley Simmons</td>
            </tr>
            <tr>
              <td class="fw-bold">Phone</td>
              <td>123-456-4567</td>
              <td class="fw-bold">Notify Owner</td>
              <td>No</td>
            </tr>
            <tr>
              <td class="fw-bold">Account</td>
              <td>Deer Funds</td>
              <td class="fw-bold">Modified</td>
              <td>Yesterday</td>
            </tr>
            <tr>
              <td class="fw-bold">Title</td>
              <td>1 Hour</td>
              <td class="fw-bold">Created</td>
              <td>March 02, 2017</td>
            </tr>
          </tbody>
        </table>

        <div id="addressInformation">
          <div class="fw-bolder text-success  d-flex justify-content-between  mb-1">ADDRESS INFORMATION
            <svg  xmlns="http://www.w3.org/2000/svg" 
                width="16" 
                height="16" 
                fill="#36404a" 
                class="minusButton bi bi-dash-lg align-self-end" 
                viewBox="0 0 16 16">
            <path fill-rule="evenodd" 
                  d="M2 8a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11A.5.5 0 0 1 2 8Z"/>
          </svg>
          </div>
          <table id="addressInfoTable" class="table">
            <tbody>
              <tr>
                <td class="fw-bold">Street</td>
                <td>1 Broad Street</td>
                <td class="fw-bold">PO Box</td>
                <td>1300</td>
              </tr>
              <tr>
                <td class="fw-bold">City</td>
                <td>Philadelphia</td>
                <td class="fw-bold">State</td>
                <td>PA</td>
              </tr>
              <tr>
                <td class="fw-bold">Postal COde</td>
                <td>19103</td>
                <td class="fw-bold">Country</td>
                <td>US</td>
              </tr>


            </tbody>
          </table>
        </div>

        <div id="troubleTicketHistory">
        <div class="minusButton fw-bolder text-success mb-1  d-flex justify-content-between ">TROUBLE TICKET HISTORY
          <svg  xmlns="http://www.w3.org/2000/svg" 
                width="16" 
                height="16" 
                fill="#36404a" 
                class="bi bi-dash-lg align-self-end" 
                viewBox="0 0 16 16">
            <path fill-rule="evenodd" 
                  d="M2 8a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11A.5.5 0 0 1 2 8Z"/>
          </svg>
        </div>
          <table id="torubleTicketTable" class="table">
            <thead class="borde border-info">
              <tr class="border-0">
                <th scope="col">Name</th>
                <th scope="col">Status</th>
                <th scope="col">Dare & Time</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Trouble Ticket 1</td>
                <td>Received</td>
                <td>02/12/2021</td>
              </tr>
              <tr>
                <td>Trouble Ticket 2</td>
                <td>Closed</td>
                <td>01/21/2021</td>
              </tr>
              <tr>
                <td>Trouble Ticket 3</td>
                <td>Open</td>
                <td>08/05/2021</td>
              </tr>
              <tr>
                <td>Trouble Ticket 4</td>
                <td>Open</td>
                <td>08/05/2020</td>
              </tr>
              <tr>
                <td>Trouble Ticket 5</td>
                <td>Closed</td>
                <td>12/25/2021</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    
    


  </div>`
}


let infoMessageCall = () => {
    return `<div id="infoBody" class="pt-4 px-5 h-100">
    <ul id="infoBodyTabs" class="nav nav-tabs border-0">
      <li id="infoMessage" class="nav-item infoBodyItems fw-bolder border border-end-0">
        <a class="nav-link active py-3 px-5 text-secondary" href="#">Message</a>
      </li>
      <li id="contactInfo" class="nav-item infoBodyItems fw-bold border">
        <a class="nav-link py-3 px-5 inactive  text-secondary" href="#">Contact Info</a>
      </li>
      <li id="faq" class="nav-item infoBodyItems fw-bold border border-start-0">
        <a class="nav-link py-3 px-5 inactive text-secondary" href="#">FAQ</a>
      </li>
    </ul>
    <div
      id="infoBodyContains "
      class="pt-3 pb-5 px-5 border border rounded-bottom rounded-end" >
      <div
        id="infoMessageHeader p-3"
        class="d-inline-flex justify-content-between w-100"
      >
        <h5 class="text-success fw-bold">
          Help! Issues Logging In
        </h5>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="currentColor"
          class="bi bi-paperclip d-flex-end rotate45"
          viewBox="0 0 16 16"
        >
          <path d="M4.5 3a2.5 2.5 0 0 1 5 0v9a1.5 1.5 0 0 1-3 0V5a.5.5 0 0 1 1 0v7a.5.5 0 0 0 1 0V3a1.5 1.5 0 1 0-3 0v9a2.5 2.5 0 0 0 5 0V5a.5.5 0 0 1 1 0v7a3.5 3.5 0 1 1-7 0V3z"
          />
        </svg>
      </div>

      <div
        id="infoMessageArea"
        class="bg-light p-1 border rounded"
        height="1000"
      >


        <div id="messageWhole" class="form-floating d-flex bd-highlight mb-3 row m-0 ">
          <textarea
            class="w-100 col-12 bg-transparent border-0 d-flex pt-3 mb-2 MotherSecundaryGrayColor fw-bold"
            placeholder="Leave a comment here"
            id="floatingTextarea"
            rows="7"
            cols="50"
            autofocus="autofocus">

        </textarea>
          <label for="floatingTextarea " class="w-100 text-end motherGreyColor">March 08,2017 2:30 PM</label>

          <div id="messageButtons" class="w-100 d-flex justify-content-end">
            <button class="btn mx-1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="#f2f2f2"
                class="bi bi-arrow-return-left"
                viewBox="0 0 16 16"
              >
                <path
                  fill-rule="evenodd"
                  d="M14.5 1.5a.5.5 0 0 1 .5.5v4.8a2.5 2.5 0 0 1-2.5 2.5H2.707l3.347 3.346a.5.5 0 0 1-.708.708l-4.2-4.2a.5.5 0 0 1 0-.708l4-4a.5.5 0 1 1 .708.708L2.707 8.3H12.5A1.5 1.5 0 0 0 14 6.8V2a.5.5 0 0 1 .5-.5z"
                />
              </svg>
            </button>
            <button class="btn mx-1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="#f2f2f2"
                class="bi bi-arrow-right"
                viewBox="0 0 16 16"
              >
                <path
                  fill-rule="evenodd"
                  d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"
                />
              </svg>
            </button>
            <button class="btn mx-1 fw-bold">Comment</button>
          </div>
        </div>
      </div>
    </div>
    <!-- <div
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
      
      


    </div> -->
  </div>`
}
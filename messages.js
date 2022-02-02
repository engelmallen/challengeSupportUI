let infoMessageCall = () => {
    return `        
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
    class="bg-light p-1 mt-2 border rounded"
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
  </div> `
}
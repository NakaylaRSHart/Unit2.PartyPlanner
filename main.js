/*
Get information using API
  -/events
  -/guests

Create a list of events 
Give ability to add/drop or delete
  -add goes to an `attend` box
  -drop gets removed from list

Create a form to create parties
  -
*/

const COHORT = "2402-FTB-ET-WEB-FT!";
const API_URL = `https://fsa-crud-2aa9294fe819.herokuapp.com/api/${COHORT}/events`;

const state = {
  event: [],
};
  

const nameList = document.querySelector(`#nameList .name`);
const dateList = document.querySelector(`#dateList .date`);
const locationList = document.querySelector(`#locationList .location`);
const descriptionList = document.querySelector(`#descriptionList .description`);

const createAPartyForm = document.querySelector(`#addParty`);
//createAPartyForm.addEventListener(`submit`, addParty);

render();



//Sync Data
async function render() {
  await getParty();
  renderParties();
}


async function getParty(){

  try{
    const response = await fetch(API_URL);
    //console.log(response);

    const json = await response.json();
    state.event = json.data;
    //console.log(json.data);
  }

  catch(error){
    console.log(error);
  }
}

function renderParties(){

  const nameListElements = state.event.map((event) =>{
    const li = document.createElement(`li`);
    li.textContent = event.name;
    return li;
  })
  //console.log(nameListElements);
  nameList.replaceChildren(...nameListElements);

  const dateListElements = state.event.map((event) =>{
    const li = document.createElement(`li`);
    li.textContent = event.date;
    return li;
  })
  //console.log(dateListElements);
  dateList.replaceChildren(...dateListElements);

  const locationListElements = state.event.map((event) =>{
    const li = document.createElement(`li`);
    li.textContent = event.location;
    return li;
  })
  //console.log(locationListElements);
  locationList.replaceChildren(...locationListElements);

  const descriptionListElements = state.event.map((event) =>{
    const li = document.createElement(`li`);
    li.textContent = event.description;
    return li;
  })
  //console.log(descriptionListElements);
  descriptionList.replaceChildren(...descriptionListElements);
};


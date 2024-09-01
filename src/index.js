import { companiesData } from "./companies-data";

const before = document.getElementById("before");

// const manipulatedData = companiesData[0];
// const manipulatedData = companiesData.pop(); // removes the last element
const manipulatedData = companiesData.shift(); // removes the first element
//TODO: add the manipulated data array to the 'after' div.
before.innerHTML = JSON.stringify(companiesData, null, 2);
const after = document.getElementById("after");
after.innerHTML = JSON.stringify(manipulatedData, null, 2);
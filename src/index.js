import { companiesData } from "./companies-data";
import { extraRecord } from "./extra-record";
import { filterFunction, mappedFunction, updateEachElement } from "./utils";

const before = document.getElementById("before");

// const manipulatedData = companiesData[0];
// const manipulatedData = companiesData.pop(); // removes the last element
// const manipulatedData = companiesData.shift(); // removes the first element
// const manipulatedData = companiesData.push(extraRecord); // adds an element to the end
// const manipulatedData = companiesData.unshift(extraRecord); // adds an element to the beginning


// companiesData.forEach(updateEachElement);
// const manipulatedData = [...new Set ( companiesData.map ( (e) => { return e.fieldData.State}))].sort(); // removes duplicates. The (...) will append the data to the array. (Set) will remove duplicates.

// Filter function must return an array because the map function needs an array to work.
const manipulatedData = companiesData.filter(filterFunction).map(mappedFunction); // filters the data and apply map with our mappedFunction.

//TODO: add the manipulated data array to the 'after' div.
before.innerHTML = JSON.stringify(companiesData, null, 2);
const after = document.getElementById("after");
after.innerHTML = JSON.stringify(manipulatedData, null, 2);
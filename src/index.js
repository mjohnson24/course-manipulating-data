import { companiesData } from "./companies-data";
import { extraRecord } from "./extra-record";

const before = document.getElementById("before");

// const manipulatedData = companiesData[0];
// const manipulatedData = companiesData.pop(); // removes the last element
// const manipulatedData = companiesData.shift(); // removes the first element
// const manipulatedData = companiesData.push(extraRecord); // adds an element to the end
// const manipulatedData = companiesData.unshift(extraRecord); // adds an element to the beginning

const filterFunction = (company) => {
	console.log(company);
	return company.fieldData.State === "TX";
}
const mappedFunction = function(arg) {
	return {city: arg.fieldData.City, name: arg.fieldData.CompanyName};
};
const manipulatedData = companiesData.map(mappedFunction);

//TODO: add the manipulated data array to the 'after' div.
before.innerHTML = JSON.stringify(companiesData, null, 2);
const after = document.getElementById("after");
after.innerHTML = JSON.stringify(manipulatedData, null, 2);
const filterFunction = (company) => {
	console.log(company);
	return company.fieldData.State === "TX";
}
const mappedFunction = function(arg) {
	return {city: arg.fieldData.City, name: arg.fieldData.CompanyName};
}
const updateEachElement = (company) => {
	company.fieldData.CityState = `${company.fieldData.City}, ${company.fieldData.State}`;
}

export { filterFunction, mappedFunction, updateEachElement };


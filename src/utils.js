const filterFunction = (company) => {
	console.log(company);
	return company.fieldData.State === "TX";
}
const mappedFunction = function(arg) {
	return {name: arg.fieldData.CompanyName, city: arg.fieldData.City, state: arg.fieldData.State, StreetAddress: arg.fieldData.StreetAddress};
}
const updateEachElement = (company) => {
	company.fieldData.CityState = `${company.fieldData.City}, ${company.fieldData.State}`;
}

export { filterFunction, mappedFunction, updateEachElement };


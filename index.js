const data = require("./data.json");

const getNepalMunicipality = (district) => {
  let newDistrict = district.charAt(0).toUpperCase() + district.slice(1);
  let municipality = {};
  for (let i = 0; i < data.length; i++) {
    if (data[i].hasOwnProperty(newDistrict)) {
      municipality = data[i];
    }
  }
  if (Object.keys(municipality).length === 0) {
    return "No district found";
  }
  return municipality;
};

module.exports = getNepalMunicipality;

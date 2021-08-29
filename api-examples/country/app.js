const countryList = () => {
  fetch("https://restcountries.eu/rest/v2/all")
    .then((response) => response.json())
    .then((data) => displayCountry(data));
};
countryList();
const displayCountry = (counties) => {
  //console.log(counties);
  const countryList = document.getElementById("contries");
  counties.forEach((country) => {
    const div = document.createElement("div");
    div.classList.add("single-country");
    div.innerHTML = `
    <h2>Name:${country.name}</h2>
    <p>Language${country.languages[0].name}</p>
    <button onclick="countryLink('${country.name}')">Details</button>
    `;
    countryList.appendChild(div);
  });
};
const countryLink = (cname) => {
  const url = `https://restcountries.eu/rest/v2/name/${cname}`;
  //console.log(url);
  fetch(url)
    .then((response) => response.json())
    .then((data) => countryDetails(data[0]));
};
const countryDetails = (country) => {
  const detailsCountry = document.getElementById("country-details");
  window.scrollTo(0, 40)
  detailsCountry.innerHTML = `
  <h3>Name: ${country.name}</h3>
  <img style="width:15em" src="${country.flag}"/>
  <p>Language:<strong>${country.languages[0].name}</strong></p>
  `;
};

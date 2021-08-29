

const searchFood = () => {
  const searchField = document.getElementById("search-field");
  const searchText = searchField.value;
  searchField.value = ''
  const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchText}`;
  fetch(url)
    .then((res) => res.json())
    .then((data) => updateFoodResult(data.meals));
};

const updateFoodResult = (meals) => {
  const searchFood = document.getElementById("searchresult");
  searchFood.innerHTML = ''
  //console.log(meals);
  meals.forEach((meal) => {
    //console.log(meal);
    const div = document.createElement("div");
    div.classList.add('col')
    div.innerHTML = `
       <img src="${meal.strMealThumb}" class="card-img-top" alt="..." />
            <div class="card-body">
              <h5 class="card-title">${meal.strMeal}</h5>
              <p class="card-text">
                ${meal.strInstructions.slice(0,150)}
              </p>
        </div>
       `;
       searchFood.appendChild(div)

  });
};


document.getElementById("search-field").onkeypress = function(e){
    if(e.keyCode ===13){
        document.getElementById('button-field').click()
    }
}
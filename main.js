const countries = document.querySelector('.countries');
fetch(`https://restcountries.com/v3.1/all`)
  .then((res) => res.json())
  .then((data) => {
    data.forEach(country => {
        // console.log(country)
        const countryCard = document.createElement('a')
        countryCard.classList.add('country')
        countryCard.href = `/country.html?name=${country.name.common}`
        countryCard.innerHTML = `
            <img src=${country.flags.svg} alt="${country.flags.alt}" />
            <div class="card-text">
                <h3 class="title">${country.name.common}</h3>
                <p><b>Population: </b><span>${country.population.toLocaleString('en-IN')}</span></p>
                <p><b>Region: </b><span>${country.region}</span></p>
                <p><b>Capital: </b><span>${country.capital?.[0]}</span></p>
            </div>
    `
    countries.append(countryCard)
    });
  })


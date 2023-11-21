const scientists = [
  {
    name: "Albert",
    surname: "Einstein",
    born: 1879,
    dead: 1955,
    id: 1,
  },
  {
    name: "Isaac",
    surname: "Newton",
    born: 1643,
    dead: 1727,
    id: 2,
  },
  {
    name: "Galileo",
    surname: "Galilei",
    born: 1564,
    dead: 1642,
    id: 3,
  },
  {
    name: "Marie",
    surname: "Curie",
    born: 1867,
    dead: 1934,
    id: 4,
  },
  {
    name: "Johannes",
    surname: "Kepler",
    born: 1571,
    dead: 1630,
    id: 5,
  },
  {
    name: "Nicolaus",
    surname: "Copernicus",
    born: 1473,
    dead: 1543,
    id: 6,
  },
  {
    name: "Max",
    surname: "Planck",
    born: 1858,
    dead: 1947,
    id: 7,
  },
  {
    name: "Katherine",
    surname: "Blodgett",
    born: 1898,
    dead: 1979,
    id: 8,
  },
  {
    name: "Ada",
    surname: "Lovelace",
    born: 1815,
    dead: 1852,
    id: 9,
  },
  {
    name: "Sarah E.",
    surname: "Goode",
    born: 1855,
    dead: 1905,
    id: 10,
  },
  {
    name: "Lise",
    surname: "Meitner",
    born: 1878,
    dead: 1968,
    id: 11,
  },
  {
    name: "Hanna",
    surname: "Hammarström",
    born: 1829,
    dead: 1909,
    id: 12,
  },
];

const buttonstRef = document.querySelectorAll(".scientists-filter__button");
const listRef = document.querySelector(".scientists__list");

function render(arrObj) {
  listRef.textContent = "";
  listRef.classList.remove('animation');
  arrObj.forEach((scientist) => {
    listRef.innerHTML += `<li class="scientists__item">
        <!-- <img src="" alt="" class="scientists__img" /> -->
        <p class="scientists__text">${scientist.name} ${scientist.surname}</p>
        <p class="scientists__birth">${scientist.born}-${scientist.dead}</p>
      </li>`;
  });
  listRef.classList.add('animation');
  listRef.style.animation = 'animation-card 500ms ease'; 
}

// render(scientists);

function bornNineteenthCentury() {
  const filterScientists = scientists.filter(
    (scientist) => scientist.born >= 1801 && scientist.born <= 1900
  );
  render(filterScientists);
}

function sortByAlphabet() {
  const sortScientists = scientists.toSorted(
    (previousScientist, nextScientist) =>
      previousScientist.name.localeCompare(nextScientist.name)
  );
  render(sortScientists);
}

function sortByPassedYears() {
  const sortScientists = scientists.toSorted(
    (previousScientist, nextScientist) =>
      previousScientist.dead -
      previousScientist.born -
      (nextScientist.dead - nextScientist.born)
  );
  render(sortScientists);
}

function biggerBorn() {
  const sortScientists = scientists.toSorted(
    (previousScientist, nextScientist) =>
      previousScientist.born - nextScientist.born
  );
  render([sortScientists[sortScientists.length - 1]]);
}

function searchBornAlbert() {
  const filterScientists = scientists.filter(
    (scientist) =>
      scientist.name === "Albert" && scientist.surname === "Einstein"
  );
  render(filterScientists);
}

function searchBySurnameFirstLetter() {
  const filterScientists = scientists.filter(
    (scientist) => scientist.surname[0] === "C"
  );
  render(filterScientists);
}

function filterScientistsByNameFirstLetter() {
  const filterScientists = scientists.filter(
    (scientist) => scientist.name[0] !== "A"
  );
  render(filterScientists);
}

function searchScientistByShortestLongestPassedYears() {
  const sortScientists = scientists.toSorted(
    (previousScientist, nextScientist) =>
      previousScientist.dead -
      previousScientist.born -
      (nextScientist.dead - nextScientist.born)
  );
  render([sortScientists[0], sortScientists[sortScientists.length - 1]]);
}

const buttons1 = document.querySelector(".test");

buttons1.addEventListener("click", (evt) => {
  if (evt.target.hasAttribute("data-num")) {
    const attributeValue = Number(evt.target.getAttribute("data-num"));
    switch (attributeValue) {
      case 1:
        bornNineteenthCentury();
        break;
      case 2:
        sortByAlphabet();
        break;
      case 3:
        sortByPassedYears();
        break;
      case 4:
        biggerBorn();
        break;
      case 5:
        searchBornAlbert();
        break;
      case 6:
        searchBySurnameFirstLetter();
        break;
      case 7:
        filterScientistsByNameFirstLetter();
        break;
      case 8:
        searchScientistByShortestLongestPassedYears();
        break;
    }
  }
});

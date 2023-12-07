// pokemons-mock.js
let pokemons = [];

const cardsEl = document.querySelector('[data-cards]');
const selectSearchEl = document.querySelector('[data-filter-select-search]');
const selectSearchRadioHighEl = document.querySelector('[data-filter-high]');
const selectSearchRadioLowEl = document.querySelector('[data-filter-Low]');
const selectSearchCheckboxBigEl = document.querySelector('[data-filter-big]');
const selectSearchCheckboxSmallEl = document.querySelector('[data-filter-small]');
const selectSearchInputSearchEl = document.querySelector('[data-filter-search]');
const selectSearchInputButtonEl = document.querySelector('[data-filter-button]');
const loadingEl = document.querySelector('[data-loading]');

const url = 'https://my-json-server.typicode.com/electrovladyslav/pokemon-json-server/pokemons';
let checkboxBig = selectSearchCheckboxBigEl.checked;
let checkboxSmall = selectSearchCheckboxSmallEl.checked;
let searchValue = '';
let typesPokemons = [];
let typeValue = '';

const createCardElement = (pokemon) => {
    const templateEl = document.querySelector('[data-type]');
    const templateContent = document.importNode(templateEl.content, true);

    const cardTitleEl = templateContent.querySelector('[data-card-title]');
    const cardImageEl = templateContent.querySelector('[data-card-image]');
    const cardHeightEl = templateContent.querySelector('[data-card-height]');
    const cardWeightEl = templateContent.querySelector('[data-card-weight]');
    const cardNumberEl = templateContent.querySelector('[data-card-number]');
    const cardType1El = templateContent.querySelector('[data-card-type1]');
    const cardType2El = templateContent.querySelector('[data-card-type2]');
    const cardWeaknesses1El = templateContent.querySelector('[data-card-weaknesses1]');
    const cardWeaknesses2El = templateContent.querySelector('[data-card-weaknesses2]');

    cardTitleEl.textContent = pokemon.name;
    cardImageEl.src = pokemon.ThumbnailImage;
    cardHeightEl.textContent = pokemon.height;
    cardWeightEl.textContent = `${pokemon.weight} lbs`;
    cardNumberEl.textContent = pokemon.number;
    const [firstType, secondType] = pokemon.type;
    cardType1El.textContent = firstType;
    cardType2El.textContent = secondType;
    if (!secondType) {
        cardType2El.classList.add('display-none');
    }
    const [firstWeakness, secondWeakness] = pokemon.weakness;
    cardWeaknesses1El.textContent = firstWeakness;
    cardWeaknesses2El.textContent = secondWeakness;
    if (!secondWeakness) {
        cardWeaknesses2El.classList.add('display-none');
    }
    return templateContent;
};

const cleanElement = (el) => {
    while (el.firstChild) {
        el.removeChild(el.firstChild);
    }
};

const renderCards = (cardContainer, pokemonsArray) => {
    cleanElement(cardsEl);
    const fragment = new DocumentFragment();
    for (let i = 0; i < pokemonsArray.length; i++) {
        fragment.append(createCardElement(pokemonsArray[i]));
    }
    cardContainer.append(fragment);
    return true;
};

const renderSelect = (name) => {
    cleanElement(selectSearchEl);
    const optionFirstEl = document.createElement('option');
    if (name === '') {
        optionFirstEl.value = 'Select type: ';
        optionFirstEl.text = 'Select type: ';
        optionFirstEl.selected = true;
        optionFirstEl.disabled = true;
    } else {
        optionFirstEl.value = '';
        optionFirstEl.text = 'All types';
    }

    selectSearchEl.add(optionFirstEl);
    typesPokemons.forEach((type) => {
        const optionEl = document.createElement('option');
        optionEl.value = type;
        if (type === name) {
            optionEl.selected = true;
        }
        optionEl.text = type;
        selectSearchEl.add(optionEl);
    });
};

const sortPokemonsUp = (arrayPokemons) => arrayPokemons.sort((a, b) => a.height - b.height);

const sortPokemonsDown = (arrayPokemons) => arrayPokemons.sort((a, b) => b.height - a.height);

const updateTypes = (array) => {
    const types = [];
    array.forEach((pokemon) => pokemon.type.forEach((type) => {
        if (!types.includes(type)) types.push(type);
    }));
    return types;
};

const getPokemonsByType = (type, arrayPokemons) => arrayPokemons
    .filter((pokemon) => pokemon.type
        .includes(type));
const getPokemonsByValet = (text, arrayPokemons) => arrayPokemons
    .filter((pokemon) => pokemon.name
        .toLocaleLowerCase()
        .includes(text.toLocaleLowerCase()));

const getPokemons = async (urlPokemons) => {
    try {
        const response = await fetch(urlPokemons);
        return await response.json();
    } catch (e) {
        alert('Error url, please update this page');
        console.error(e);
        return [];
    }
};

const getFilterPokemons = () => {
    let newPokemons = [];
    if (searchValue && typeValue) {
        newPokemons = getPokemonsByValet(searchValue, pokemons);
        newPokemons = newPokemons.length
            ? getPokemonsByType(typeValue, newPokemons)
            : getPokemonsByType(typeValue, pokemons);
    } else if (searchValue && !typeValue) {
        newPokemons = getPokemonsByValet(searchValue, pokemons);
    } else if (!searchValue && typeValue) {
        newPokemons = getPokemonsByType(typeValue, pokemons);
    } else if (!typeValue && !searchValue) {
        newPokemons = pokemons;
    }

    if (checkboxBig && checkboxSmall && newPokemons.length) {
        newPokemons = newPokemons.filter((pokemon) => pokemon.weight < 100 && pokemon.weight > 50);
    } else if (checkboxBig && !checkboxSmall && newPokemons.length) {
        newPokemons = newPokemons.filter((pokemon) => pokemon.weight > 100);
    } else if (!checkboxBig && checkboxSmall && newPokemons.length) {
        newPokemons = newPokemons.filter((pokemon) => pokemon.weight < 50);
    }

    if (selectSearchRadioHighEl.checked && newPokemons.length) {
        newPokemons = sortPokemonsDown(newPokemons);
    }
    if (selectSearchRadioLowEl.checked && newPokemons.length) {
        newPokemons = sortPokemonsUp(newPokemons);
    }
    typesPokemons = updateTypes(newPokemons);
    renderSelect(typeValue);
    return newPokemons;
};

const init = async () => {
    try {
        pokemons = await getPokemons(url);
    } catch (e) {
        alert('Error url, please update this page');
        console.error(e);
    }
    typesPokemons = updateTypes(pokemons);
    renderSelect(typeValue);
    loadingEl.classList.add('display-none');

    selectSearchCheckboxBigEl.addEventListener('change', (e) => {
        checkboxBig = e.target.checked;
        renderCards(cardsEl, getFilterPokemons());
    });

    selectSearchCheckboxSmallEl.addEventListener('change', (e) => {
        checkboxSmall = e.target.checked;
        renderCards(cardsEl, getFilterPokemons());
    });

    selectSearchEl.addEventListener('change', (e) => {
        typeValue = e.target.value;
        renderCards(cardsEl, getFilterPokemons());
    });

    selectSearchRadioHighEl.addEventListener('change', () => {
        renderCards(cardsEl, getFilterPokemons());
    });

    selectSearchRadioLowEl.addEventListener('change', () => {
        renderCards(cardsEl, getFilterPokemons());
    });

    selectSearchInputButtonEl.addEventListener('click', (e) => {
        e.preventDefault();
        renderCards(cardsEl, getFilterPokemons());
    });

    selectSearchInputSearchEl.addEventListener('input', (e) => {
        searchValue = e.target.value;
    });
    renderCards(cardsEl, pokemons);
};

init();

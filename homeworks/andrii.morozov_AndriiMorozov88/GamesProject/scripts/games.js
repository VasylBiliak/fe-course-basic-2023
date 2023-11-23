const games = [
    {
        id: 1136,
        title: 'Overwatch 2',
        thumbnail: 'https://www.mmobomb.com/g/1136/thumbnail.jpg',
        short_description: 'Big changes come to the Overwatch formula in this sequel...and so does PvE content, eventually.',
        game_url: 'https://www.mmobomb.com/open/overwatch-2',
        genre: 'Shooter',
        platform: 'PC (Windows)',
        publisher: 'Activision Blizzard King',
        developer: 'Blizzard Entertainment',
        release_date: '2022-10-04',
        profile_url: 'https://www.mmobomb.com/overwatch-2',
    },
    {
        id: 523,
        title: 'Lost Ark',
        thumbnail: 'https://www.mmobomb.com/g/523/thumbnail.jpg',
        short_description: 'Journey throughout the realm of Arkesia and do battle against a demon invasion in Smilegate\'s free-to-play ARPG Lost Ark!',
        game_url: 'https://www.mmobomb.com/open/lost-ark',
        genre: 'ARPG',
        platform: 'PC (Windows)',
        publisher: 'Amazon Games',
        developer: 'Smilegate',
        release_date: '2022-02-11',
        profile_url: 'https://www.mmobomb.com/lost-ark',
    },
    {
        id: 1113,
        title: 'PUBG: BATTLEGROUNDS',
        thumbnail: 'https://www.mmobomb.com/g/1113/thumbnail.jpg',
        short_description: 'Battle the odds in a 100v1 death match in PUBG: Battlegrounds, the classic free-to-play battle royale experience.',
        game_url: 'https://www.mmobomb.com/open/pubg',
        genre: 'Shooter',
        platform: 'PC (Windows)',
        publisher: 'KRAFTON, Inc.',
        developer: 'KRAFTON, Inc.',
        release_date: '2022-01-12',
        profile_url: 'https://www.mmobomb.com/pubg',
    },
    {
        id: 508,
        title: 'Enlisted',
        thumbnail: 'https://www.mmobomb.com/g/508/thumbnail.jpg',
        short_description: 'Step into the most famous battles of World War II in Enlisted, a free-to-play shooter from the makers of War Thunder. Experience squad-based combat from the ground level, as you command your troops, outfitted with era-authentic weapons and gear, in massive battles with over a hundred soldiers apiece.',
        game_url: 'https://www.mmobomb.com/open/enlisted',
        genre: 'Shooter',
        platform: 'PC (Windows)',
        publisher: 'Gaijin Entertainment',
        developer: 'Darkflow Software',
        release_date: '2021-04-08',
        profile_url: 'https://www.mmobomb.com/enlisted',
    },
    {
        id: 1120,
        title: 'Fall Guys',
        thumbnail: 'https://www.mmobomb.com/g/1120/thumbnail.jpg',
        short_description: 'Fall Guys is a free-to-play massively multiplayer party royale game.',
        game_url: 'https://www.mmobomb.com/open/fall-guys',
        genre: 'Battle Royale',
        platform: 'PC (Windows)',
        publisher: 'Mediatonic',
        developer: 'Mediatonic',
        release_date: '2020-08-04',
        profile_url: 'https://www.mmobomb.com/fall-guys',
    },
    {
        id: 340,
        title: 'Game Of Thrones Winter Is Coming',
        thumbnail: 'https://www.mmobomb.com/g/340/thumbnail.jpg',
        short_description: 'Fame and glory await you in Westeros, in Game of Thrones: Winter Is Coming, the officially licensed free-to-play browser game based on the epic fantasy series by George R.R. Martin.',
        game_url: 'https://www.mmobomb.com/open/game-of-thrones-winter-is-coming',
        genre: 'Strategy',
        platform: 'Web Browser',
        publisher: 'GTArcade',
        developer: 'YOOZOO Games ',
        release_date: '2019-11-14',
        profile_url: 'https://www.mmobomb.com/game-of-thrones-winter-is-coming',
    },
    {
        id: 427,
        title: 'Drakensang Online',
        thumbnail: 'https://www.mmobomb.com/g/427/thumbnail.jpg',
        short_description: 'Drakensang Online is a free to play 3D action RPG game that features extraordinary 3D graphics and effects and heralds the next generation of free-to-play online browser games. With the ability to customize your character, skills and magic powers like never before, join your comrades to wage a brutal war against evil.',
        game_url: 'https://www.mmobomb.com/open/drakensang-online',
        genre: 'MMORPG',
        platform: 'Web Browser',
        publisher: 'Bigpoint',
        developer: 'Bigpoint',
        release_date: '2011-08-08',
        profile_url: 'https://www.mmobomb.com/drakensang-online',
    },
    {
        id: 380,
        title: 'Dark Orbit Reloaded',
        thumbnail: 'https://www.mmobomb.com/g/380/thumbnail.jpg',
        short_description: 'Take part in huge intergalactic battles and take on the whole galaxy in DarkOrbit, the free-to-play browser-based space combat MMO from Bigpoint -- now in 3-D! Choose your faction and your ship, each with their own strengths, and take off into adventure!',
        game_url: 'https://www.mmobomb.com/open/darkorbit',
        genre: 'Shooter',
        platform: 'Web Browser',
        publisher: 'Bigpoint',
        developer: 'Bigpoint',
        release_date: '2006-12-11',
        profile_url: 'https://www.mmobomb.com/darkorbit',
    },
    {
        id: 1122,
        title: 'MultiVersus',
        thumbnail: 'https://www.mmobomb.com/g/1122/thumbnail.jpg',
        short_description: 'Match up in 1v1, 2v2 co-op, or 4-person free-for-all modes in this free-to-play Smash-Style Brawler!',
        game_url: 'https://www.mmobomb.com/open/multiversus',
        genre: 'Fighting',
        platform: 'PC (Windows)',
        publisher: 'Warner Bros. Games',
        developer: 'Player First Games',
        release_date: '2022-07-19',
        profile_url: 'https://www.mmobomb.com/multiversus',
    },
    {
        id: 5,
        title: 'Crossout',
        thumbnail: 'https://www.mmobomb.com/g/5/thumbnail.jpg',
        short_description: 'Trick out your ride and take to the post-apocalyptic roads for battle in Crossout, the free-to-play vehicular combat game from Gaijin Entertainment! Featuring a vehicle design system with endless customization and fast-paced, armor-crunching combat, Crossout offers high-octane excitement in brief and explosive matches.',
        game_url: 'https://www.mmobomb.com/open/crossout',
        genre: 'Shooter',
        platform: 'PC (Windows)',
        publisher: 'Targem',
        developer: 'Gaijin',
        release_date: '2017-05-30',
        profile_url: 'https://www.mmobomb.com/crossout',
    },
];
const cardContainer = document.querySelector('[data-card-container]');
const genreSelect = document.querySelector('[data-select-genre]');
const newGameCheck = document.querySelector('[data-new-games]');
const oldGameCheck = document.querySelector('[data-old-games]');
const searchButton = document.querySelector('[data-search-button]');
const searchInput = document.querySelector('[data-search-input]');
function createCardElement(game, array) {
    const cardTemplate = document.querySelector('[data-card-template]');
    const cardID = cardTemplate.content.querySelector('[data-game-id]');
    const cardImage = cardTemplate.content.querySelector('[data-game-image]');
    const cardDescription = cardTemplate.content.querySelector('[data-game-description]');
    const cardTitle = cardTemplate.content.querySelector('[data-game-title]');
    const cardGameUrl = cardTemplate.content.querySelector('[data-game-url]');
    const cardPlatform = cardTemplate.content.querySelector('[data-game-platform]');
    const cardPublisher = cardTemplate.content.querySelector('[data-game-publisher]');
    const cardReleaseDate = cardTemplate.content.querySelector('[data-game-release]');
    const cardProfileUrl = cardTemplate.content.querySelector('[data-game-profile-url]');
    const cardGenre = cardTemplate.content.querySelector('[data-game-genre]');
    const cardDeveloper = cardTemplate.content.querySelector('[data-game-developer]');
    cardID.innerHTML = `<b>ID: </b>${array[game].id}`;
    cardImage.src = array[game].thumbnail;
    cardDescription.innerText = array[game].short_description;
    cardTitle.innerText = array[game].title;
    cardGameUrl.innerHTML = `<b>Game URL: </b>${array[game].game_url}`;
    cardPlatform.innerHTML = `<b>Platform: </b>${array[game].platform}`;
    cardPublisher.innerHTML = `<b>Publisher: </b>${array[game].publisher}`;
    cardReleaseDate.innerHTML = `<b>Release Date: </b>${array[game].release_date}`;
    cardProfileUrl.innerHTML = `<b>Profile URL: </b>${array[game].profile_url}`;
    cardGenre.innerHTML = `<b>Genre: </b>${array[game].genre}`;
    cardDeveloper.innerHTML = `<b>Developer: </b>${array[game].developer}`;
    const cardContent = cardTemplate.content.cloneNode(true);
    return cardContent;
}
function renderCards(container, gamesArray) {
    container.innerHTML = '';
    const fragment = new DocumentFragment();
    for (let count = 0; count < gamesArray.length; count++) {
        fragment.append(createCardElement(count, gamesArray));
    }
    container.append(fragment);
}
function getGenreSelectArray(array) {
    let genreSelectArray = [];
    switch (genreSelect.value) {
        case '1':
            genreSelectArray = array.filter((element) => element.genre === 'Shooter');
            break;
        case '2':
            genreSelectArray = array.filter((element) => element.genre === 'ARPG');
            break;
        case '3':
            genreSelectArray = array.filter((element) => element.genre === 'Battle Royale');
            break;
        case '4':
            genreSelectArray = array.filter((element) => element.genre === 'Strategy');
            break;
        case '5':
            genreSelectArray = array.filter((element) => element.genre === 'MMORPG');
            break;
        case '6':
            genreSelectArray = array.filter((element) => element.genre === 'Fighting');
            break;
        default:
            return array;
    }
    return genreSelectArray;
}
function getYear(string) {
    const dateArray = string.split('-');
    return Number(dateArray[0]);
}
function getNewAndOldGamesArray(arr) {
    if (newGameCheck.checked && !oldGameCheck.checked) {
        return arr.filter((element) => getYear(element.release_date) > 2020);
    }
    if (oldGameCheck.checked && !newGameCheck.checked) {
        return arr.filter((element) => getYear(element.release_date) < 2010);
    }
    if (oldGameCheck.checked && newGameCheck.checked) {
        return arr.filter((e) => getYear(e.release_date) < 2010 || getYear(e.release_date) > 2020);
    }
    return arr;
}
function getSearchArray(array) {
    const searchArray = [];
    array.forEach((element) => {
        const searchInputValue = searchInput.value.toLowerCase();
        const isElTitleInc = element.title.toLowerCase().includes(searchInputValue);
        const isElDescInc = element.short_description.toLowerCase().includes(searchInputValue);
        if (isElTitleInc || isElDescInc) searchArray.push(element);
    });
    console.log(searchArray);
    return searchArray;
}
function showFilterArray() {
    const firstLevelFilter = getSearchArray(games);
    const secondLevelFilter = getGenreSelectArray(firstLevelFilter);
    const thirdLevelFilter = getNewAndOldGamesArray(secondLevelFilter);
    renderCards(cardContainer, thirdLevelFilter);
}
function init() {
    renderCards(cardContainer, games);
    genreSelect.addEventListener('change', showFilterArray);
    newGameCheck.addEventListener('change', showFilterArray);
    oldGameCheck.addEventListener('change', showFilterArray);
    searchInput.addEventListener('keyup', () => {
        if (searchInput.value.trim() === '') showFilterArray();
    });
    searchButton.addEventListener('click', () => {
        if (searchInput.value.trim() !== '') showFilterArray();
    });
}
window.addEventListener('load', init);

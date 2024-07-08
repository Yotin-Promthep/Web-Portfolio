document.addEventListener('DOMContentLoaded', function () {
    fetchAnimeData();
});

async function fetchAnimeData() {
    const apiUrl = 'https://api.jikan.moe/v4/anime';

    try {
        const response = await fetch(apiUrl);
        const data = await response.json();

        if (response.ok) {
            displayAnimeData(data.data);
        } else {
            console.error('Failed to fetch anime data:', data.message);
        }
    } catch (error) {
        console.error('Error fetching anime data:', error);
    }
}

function displayAnimeData(animeData) {
    const animeListElement = document.getElementById('anime-list');
    
    animeData.forEach(anime => {
        const animeItem = document.createElement('div');
        animeItem.classList.add('anime-item');

        const imageElement = document.createElement('img');
        imageElement.classList.add('anime-image');
        imageElement.src = anime.poster_image; // Assuming the API provides a poster image URL

        const titleElement = document.createElement('p');
        titleElement.classList.add('anime-title');
        titleElement.textContent = anime.title;

        const infoElement = document.createElement('p');
        infoElement.classList.add('anime-info');
        infoElement.textContent = `Type: ${anime.type}, Score: ${anime.score}`;

        animeItem.appendChild(imageElement); // Append the image to the anime item
        animeItem.appendChild(titleElement);
        animeItem.appendChild(infoElement);

        animeListElement.appendChild(animeItem);
    });
}

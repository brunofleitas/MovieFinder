const apiKey = '84ab42db3cdc863652d2380eac4ac2e0';

function searchMovies() {
    const searchInput = document.getElementById('searchInput');
    const searchTerm = searchInput.value;

    fetch(`https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${searchTerm}`)
        .then(response => response.json())
        .then(data => {
            const resultsDiv = document.getElementById('results');
            resultsDiv.innerHTML = '';

            data.results.forEach(movie => {
                const movieDiv = document.createElement('div');
                movieDiv.classList.add('movie');

                const title = document.createElement('h2');
                title.textContent = movie.title;

                const overview = document.createElement('p');
                overview.textContent = movie.overview;

                const rating = document.createElement('p');
                rating.textContent = `Calificación: ${movie.vote_average}`;

                movieDiv.appendChild(title);
                movieDiv.appendChild(overview);
                movieDiv.appendChild(rating);

                resultsDiv.appendChild(movieDiv);
            });
        })
        .catch(error => console.error('Error:', error));
}

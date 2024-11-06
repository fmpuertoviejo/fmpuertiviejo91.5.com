// script.js
document.addEventListener('DOMContentLoaded', function() {
    fetch('https://newsapi.org/v2/top-headlines?country=ar&apiKey=YOUR_API_KEY')
        .then(response => response.json())
        .then(data => {
            const newsContainer = document.getElementById('news-container');
            data.articles.forEach(article => {
                const newsItem = document.createElement('div');
                newsItem.className = 'news-item';
                newsItem.innerHTML = `
                    <h3>${article.title}</h3>
                    <p>${article.description}</p>
                    <a href="${article.url}" target="_blank">Leer más</a>
                `;
                newsContainer.appendChild(newsItem);
            });
        })
        .catch(error => console.error('Error fetching news:', error));
});

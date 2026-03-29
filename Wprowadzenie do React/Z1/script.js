/*Klasy do komponentów zostaly dodane przez AI dla polepszenia wygladu*/


const FILMS = [
    { id: 1, title: 'Oppenheimer', year: 2023, genre: 'Dramat', rating: 5, watched: true },
    { id: 2, title: 'Dune: Część druga', year: 2024, genre: 'Sci-Fi', rating: 4, watched: false },
    { id: 3, title: 'Past Lives', year: 2023, genre: 'Romans', rating: 5, watched: true },
    { id: 4, title: 'Poor Things', year: 2023, genre: 'Komedia', rating: 4, watched: false },
];

function App() {
    return React.createElement(
        'div',
        { className: 'container py-5' },

        React.createElement(
            'h1',
            { className: 'text-center mb-5' },
            '🎬 Biblioteka Filmów'
        ),

        React.createElement(
            'div',
            { className: 'row g-4' },

            ...FILMS.map(film =>
                React.createElement(
                    'div',
                    { className: 'col-md-6 col-lg-4', key: film.id },
                    React.createElement(FilmCard, { ...film })
                )
            )
        )
    );
}

function RatingStars({ rating }) {
    return React.createElement(
        'div',
        { className: 'text-warning mb-2' },
        '⭐'.repeat(rating)
    );
}

function FilmCard({ title, year, genre, rating, watched }) {
    return React.createElement(
        'div',
        { className: 'card shadow-sm h-100 film-card' },

        React.createElement(
            'div',
            { className: 'card-body' },

            React.createElement(
                'h5',
                { className: 'card-title' },
                title + ' (' + year + ')'
            ),

            React.createElement(
                'span',
                { className: 'badge bg-secondary mb-2' },
                genre
            ),

            React.createElement(RatingStars, { rating }),

            watched
                ? React.createElement(
                    'p',
                    { className: 'text-success fw-bold mt-2' },
                    '✓ Obejrzany'
                )
                : null
        )
    );
}

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(React.createElement(App));
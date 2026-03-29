export default function GenreBadge({ genre }) {
    const genreColors = {
        'Dramat': '#6c757d',
        'Sci-Fi': '#0d6efd',
        'Romans': '#d63384',
        'Komedia': '#ffc107'
    };

    const backgroundColor = genreColors[genre] ?? '#adb5bd';

    return (
        <span
            className="badge mb-2"
            style={{ backgroundColor: backgroundColor, color: '#fff' }}
        >
            {genre}
        </span>
    );
}
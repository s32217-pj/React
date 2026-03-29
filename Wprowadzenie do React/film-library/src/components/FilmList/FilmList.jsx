export default function FilmList({ title, films }) {
    return (
        <>
            <h2>{title}</h2>

            <div className="row g-4">
                {films.map(film => (
                    <div className="col-6 col-md-4 col-lg-3" key={film.id}>
                        <FilmCard {...film} />
                    </div>
                ))}
            </div>
        </>
    );
}
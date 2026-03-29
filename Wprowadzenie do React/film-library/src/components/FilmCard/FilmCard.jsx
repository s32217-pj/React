import GenreBadge from "../GenreBadge/GenreBadge";

export default function FilmCard({ title, year, genre, rating, watched }) {
    return (

        <div className="card-body">
            <h5 className="card-title">
                {title} ({year})
            </h5>

            <GenreBadge genre={genre} />

            <RatingStars rating={rating} />
            <WatchedBadge watched={watched} />

        </div>
    );
}
import GenreBadge from "../GenreBadge/GenreBadge";
import RatingStars from "../RatingStars/RatingStars";
import WatchedBadge from "../WatchedBadge/WatchedBadge";

export default function FilmCard({ title, year, genre, rating, watched }) {
    return (
        <div className="card shadow-sm mb-3 h-100">
            <div className="card-body d-flex flex-column">

                <h5 className="card-title d-flex flex-wrap justify-content-between align-items-start gap-2 mb-2">
                    <span className="text-break">
                        {title} <small className="text-muted">({year})</small>
                    </span>
                    <WatchedBadge watched={watched} />
                </h5>

                <div className="mb-2">
                    <GenreBadge genre={genre} />
                </div>

                <div className="d-flex align-items-center flex-wrap mt-auto">
                    <span className="me-2">Ocena:</span>
                    <RatingStars rating={rating} />
                </div>

            </div>
        </div>
    );
}
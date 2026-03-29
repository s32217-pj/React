export default function RatingStars({ rating }) {
    return (
        <div className="text-warning mb-2">
            {'⭐'.repeat(rating)}
        </div>
    );
}
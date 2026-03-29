export default function WatchedBadge({watched}) {

    if(!watched) return null;

    return (
        <p className="text-success fw-bold mt-2">
            ✓ Obejrzany
        </p>
    );
}
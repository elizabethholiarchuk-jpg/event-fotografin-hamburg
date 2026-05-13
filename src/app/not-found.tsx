import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Page Not Found | Seite nicht gefunden | Liza Holiarchuk",
    description: "Sorry, the page you are looking for could not be found.",
};

export default function NotFound() {
    return (
        <div className="flex-grow flex items-center justify-center py-32 px-6 bg-[var(--color-dark-bg)] text-white text-center">
            <div className="flex flex-col items-center gap-6 max-w-lg">
                <h1 className="text-6xl font-bold tracking-tight">404</h1>
                <h2 className="text-2xl font-semibold">Page Not Found / Seite nicht gefunden</h2>
                <p className="text-white/70">
                    The page you are looking for does not exist or has been moved.<br/>
                    Die Seite, nach der Sie suchen, existiert nicht oder wurde verschoben.
                </p>
                <Link
                    href="/"
                    className="mt-4 bg-white text-[var(--color-dark-bg)] px-10 py-4 text-sm tracking-widest uppercase font-semibold transition-colors hover:bg-gray-200 rounded-2xl"
                >
                    Back to Home / Zurück
                </Link>
            </div>
        </div>
    );
}

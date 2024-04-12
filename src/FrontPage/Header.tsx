import { placeholderClick } from "../dummy";

export function Header() {
    return (
        <header className="flex flex-row px-5 lg:px-16 py-4">

                <div className="flex flex-col">
                    <span className="text-red-700 font-semibold text-left text-xl">BookUsNow</span>
                    <div className="mt-4">
                        <i className="bi-geo-alt-fill text-gray-600 text-lg"></i>
                        <span className="text-subtitle">Mumbai, India</span>
                    </div>
                </div>

                {/* Search and categories */}

                {/* User Details */}
                <div className="ml-auto" onClick={placeholderClick}>
                    <button className="p-1">
                        <i className="bi-search text-gray-600 text-lg"></i>
                    </button>
                    <button className="p-1" onClick={placeholderClick}>
                        <i className="bi-heart-fill text-gray-600 text-lg"></i>
                    </button>
                    <button className="p-1" onClick={placeholderClick}>
                        <i className="bi-person-fill text-gray-600 text-lg"></i>
                    </button>
                </div>

            </header>
    )
}

import { useMediaQuery } from "react-responsive";
import { placeholderClick } from "../dummy";

export function Header() {

    const isDesktop = useMediaQuery({query: "(min-width: 1024px)"});

    const logoSection = (
        <div className="flex flex-col">
            <span className="text-red-700 font-semibold text-left text-xl">BookUsNow</span>
            <div className="mt-4">
                <i className="bi-geo-alt-fill text-gray-600 text-lg"></i>
                <span className="text-subtitle">Mumbai, India</span>
            </div>
        </div>
    );

    if (isDesktop) return (
        <header className="flex flex-row lg:px-16 py-4">

            {logoSection}

            {/* Search and categories */}

            <div className="flex flex-1 items-center flex-col mx-3">
                <div className="flex flex-row">
                    <button className="px-3 py-2 bg-black text-white rounded-md mr-3">
                        <i className="bi-list mr-2"></i>
                        Categories
                    </button>

                    <div className="relative items-center gap-2 outline outline-1 outline-display rounded-sm lg:w-[50vw]">
                        <input name='search' className="p-2 w-full" placeholder="Search"></input>
                        <i className="bi-search absolute right-2 translate-y-1/3"></i>
                    </div>
                </div>

                <nav className="flex flex-row lg:gap-10 mt-auto">
                    <a>Live Shows</a>
                    <a>Streams</a>
                    <a>Movies</a>
                    <a>Plays</a>
                    <a>Events</a>
                    <a>Sports</a>
                    <a>Activities</a>
                </nav>

            </div>


            {/* User Details */}


            <div className="ml-auto flex flex-row items-start gap-4">
                <button className="mt-2">
                    <i className="bi-heart-fill mr-2 text-subtitle" aria-hidden></i>
                    Favorites
                </button>
                <button className="outline outline-1 outline-display p-2 rounded-md">Sign in</button>
            </div>

        </header>
    )

    return (
        <header className="px-5 pt-4">
            <div className="flex flex-row">
                {logoSection}
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
            </div>

            <nav className="mt-2 flex flex-row gap-8 overflow-auto whitespace-nowrap">
                <a className="py-2">Live Shows</a>
                <a className="py-2">Streams</a>
                <a className="py-2">Movies</a>
                <a className="py-2">Plays</a>
                <a className="py-2">Events</a>
                <a className="py-2">Sports</a>
                <a className="py-2">Activities</a>
            </nav>

        </header>
    )
}

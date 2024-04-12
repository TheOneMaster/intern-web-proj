import { placeholderClick } from "../dummy"
import { Header } from "./Header"
import { RecommendedCarousel } from "./RecommendedCarousel"
import { UpcomingEvents } from "./UpcomingEvents"

import bannerImage from "/Banner.svg"

export function FrontPage() {

    return (

        <>

            <Header />

            {/* Banner Image */}

            <div className="relative h-[50vh] lg:h-auto border border-lime-500">
                <img src={bannerImage} className="h-full object-cover w-full"></img>
                <div className="absolute top-20 mx-10 w-fit text-center text-white lg:top-52 lg:mx-40">
                    <p className="font-bold text-2xl lg:text-5xl">Discover Exciting Events Happening Near You - Stay Tuned For Updates</p>
                    <p>Lorem Ipsum Dolor Sit Amet</p>
                </div>
            </div>

            {/* Recommended Shows */}

            <div className="relative -top-32 mx-10 lg:mx-20">

                <div className="flex flex-row">
                    <span className="text-white font-bold text-xl lg:text-2xl">
                        Recommended shows
                        <i className="bi-arrow-right ml-3"></i>
                    </span>
                    <a className="ml-auto text-subtitle underline cursor-pointer" onClick={placeholderClick}>
                        <span>See all</span>
                    </a>
                </div>


                <RecommendedCarousel />

            </div>

            {/* Upcoming Events */}

            <div className="font-bold text-heading -mt-20 mx-20">
                <span className="text-xl">Upcoming Events</span>
                <a className="ml-4">
                    <i className="bi-arrow-right text-xl"></i>
                </a>
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 mt-5">
                    <UpcomingEvents />
                </div>
            </div>


        </>


    )
}

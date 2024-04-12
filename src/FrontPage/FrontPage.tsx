import { Header } from "./Header"
import { RecommendedCarousel } from "./RecommendedCarousel"
import { UpcomingEvents } from "./UpcomingEvents"

import bannerImage from "/Banner.svg"

export function FrontPage() {

    return (

        <>

            <Header />

            <img src={bannerImage} className="w-full bg-cover"></img>

            <div className="relative -top-32 mx-20">

                <span className="text-white font-bold text-2xl mb-10">
                    Recommended shows
                    <i className="bi-arrow-right ml-3"></i>
                </span>

                <RecommendedCarousel />

            </div>

            <div className="relative font-bold text-heading mt-10 mx-20">
                <span className="text-xl">Upcoming Events</span>
                <a className="ml-4">
                    <i className="bi-arrow-right text-xl"></i>
                </a>
                <div className="grid grid-cols-3 gap-10 mt-5">
                    <UpcomingEvents />
                </div>
            </div>


        </>


    )
}

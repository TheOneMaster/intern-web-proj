import { Header } from "./Header"
import { UpcomingEvents } from "./UpcomingEvents"

import bannerImage from "/Banner.svg"

export function FrontPage() {

    return (

        <>

            <Header />

            <img src={bannerImage} className="w-full bg-cover"></img>

            <div className="font-bold text-heading mt-10 mx-10">
                <span className="text-xl">Upcoming Events</span>
                <i className="bi-arrow-right"></i>
                <UpcomingEvents />
            </div>


        </>


    )
}

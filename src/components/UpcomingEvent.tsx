import { EventData } from "../FrontPage/types";

import PlaceholderBanner from "../assets/Rectangle 9.svg"

export function UpcomingEventCard(props: EventData) {

    const date = new Date(props.date);
    const distance = parseInt(props.distanceKm)

    return (
        <div className="flex-col p-4 outline outline-1 outline-[#B0BABF] rounded-xl">

            <div className="relative flex rounded-md overflow-hidden">
                <img
                    src={PlaceholderBanner}
                    className="min-w-60 min-h-20 w-full"
                />
                <div className="absolute bottom-0 pl-1 text-white bg-black bg-opacity-35 w-full text-left">
                    {date.toDateString()}
                </div>
            </div>

            <div className="mt-5">
                <span className="font-bold">{props.eventName}</span>
                <div className="text-subtitle text-sm flex flex-row">
                    <i className="bi-geo-alt-fill"></i>
                    <span className="">{props.cityName}</span>
                    <div className="ml-auto">
                        <span>{props.weather}</span>
                        |
                        <span>{distance.toString()} Km</span>
                    </div>
                </div>

            </div>
        </div>
    )
}
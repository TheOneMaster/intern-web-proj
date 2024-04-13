import { EventData } from "../FrontPage/types";

import { convertImageToUsable } from "../dummy";

export function UpcomingEventCard(props: EventData) {

    const date = new Date(props.date);
    const distance = parseInt(props.distanceKm)

    const dateStr = date.toLocaleDateString('en-US', {
        month: "short",
        day: "numeric",
        year: "numeric"
    });

    const img = convertImageToUsable(props.imgUrl, "upcoming");

    return (
        <div className="flex-col p-2 outline outline-1 outline-[#B0BABF] rounded-xl">

            <div className="relative flex rounded-md overflow-hidden">
                <img
                    src={img}
                    className="min-w-60 min-h-20 w-full"
                />
                <div className="absolute bottom-0 p-3 font-normal text-white bg-black bg-opacity-35 w-full text-left">
                    {dateStr}
                </div>
            </div>

            <div className="mt-3">
                <span className="font-bold">{props.eventName}</span>
                <div className="text-subtitle text-sm flex flex-row font-normal">
                    <i className="bi-geo-alt-fill"></i>
                    <span className="ml-1">{props.cityName}</span>
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

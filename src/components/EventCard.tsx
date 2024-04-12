import { convertImageToUsableLink } from "../FrontPage/UpcomingEvents";
import { EventData } from "../FrontPage/types";

export function EventCard(props: EventData) {

    const imgUrl = convertImageToUsableLink(props.imgUrl);
    const date = new Date(props.date);
    const distance = parseInt(props.distanceKm)

    return (
        <div className="flex-col p-4">

            <div className="relative outline outline-red-600 flex rounded-md overflow-hidden">
                <img
                    src={imgUrl}
                    className="min-w-60 min-h-60 w-full"
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

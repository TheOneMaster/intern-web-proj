import { EventData } from "../FrontPage/types";
import { convertImageToUsable } from "../dummy";

type RecommendedEventProps = EventData

export function RecommendedEventCard(props: RecommendedEventProps) {

    const date = new Date(props.date);
    const distance = parseInt(props.distanceKm);

    const dateStr = date.toLocaleDateString("en-US", {
        month: "short",
        day: "numeric",
        year: "numeric"
    });

    const img = convertImageToUsable(props.imgUrl, "recommended");

    return (
        <div className="relative drop-shadow-md">
            <img
                src={img}
                crossOrigin="anonymous"
                className="bg-cover min-w-56 lg:min-w-[19rem]"
                loading="lazy"
                alt={`${props.eventName} thumbnail`}
                />
            <div className="absolute bottom-2 px-2">
                <div className="flex flex-row">
                    <div>
                        <p className="text-white font-bold text-lg lg:text-xl">{props.eventName}</p>
                        <p className="text-subtitle text-sm">
                            <i className="bi-geo-alt-fill mr-1"></i>
                            {props.cityName}
                        </p>
                    </div>
                    <div className="text-subtitle text-sm flex flex-col mt-1">
                        <p className="whitespace-nowrap">{dateStr}</p>
                        <p className="mt-auto">{props.weather} | {distance} Km</p>
                    </div>
                </div>
            </div>

        </div>
    )
}

import { EventData } from "../FrontPage/types";

import PlaceholderImage from "../assets/Rectangle 2.svg"

type RecommendedEventProps = EventData

export function RecommendedEventCard(props: RecommendedEventProps) {
    return (
        <div className="relative">
            <img
                src={PlaceholderImage}
                className="bg-cover min-w-60"
                />
            <div className="absolute">
                <div>
                    <span>{props.eventName}</span>
                    <span>
                        <i className="i-geo-alt-fill"></i>
                        {props.cityName}
                    </span>
                </div>
            </div>

        </div>
    )
}

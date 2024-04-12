import { useQuery } from "@tanstack/react-query";
import { EventsQuery } from "./types";
import { RecommendedEventCard } from "../components/RecommendedEvent";

export function RecommendedCarousel() {
    const {isLoading, isError, data} = useQuery({
        queryKey: ['recommended'],
        queryFn: getRecommended
    });

    if (isLoading) return "Loading...";
    if (isError || data === undefined) return "Unable to load recommended events";

    return (
        <div className="flex flex-row gap-10 mt-4 overflow-auto">
            {data.map(event => {
                return <RecommendedEventCard {...event} key={event.eventName} />
            })}
        </div>
    )

}



async function getRecommended() {
    const fetchURL = `https://gg-backend-assignment.azurewebsites.net/api/Events?code=${import.meta.env.VITE_CODE}==&type=reco`;
    const result = await fetch(fetchURL);
    const json = await result.json() as EventsQuery;
    return json.events
}

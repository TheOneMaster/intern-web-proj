import { useQuery } from "@tanstack/react-query"
import { EventData } from "./types";
import { EventCard } from "../components/EventCard";

export function UpcomingEvents() {
    const {isLoading, isError, data} = useQuery({
        queryKey: ['recommended'],
        queryFn: getRecommended
    });

    if (isLoading) return "Loading...";
    if (isError || data === undefined) return "Unable to get recommended";

    return (
        <>
        <div className="grid grid-cols-3">
            { data.map(event => {
                return <EventCard {...event} key={event.eventName}/>
            })
            }
        </div>
        </>
    )
}

type QueryEvents = {
    events: EventData[]
    page: number
    pageSize: number
    totalEvents: number
    totalPages: number
}

async function getRecommended() {
    const fetchURL = "https://gg-backend-assignment.azurewebsites.net/api/Events?code===&type=reco";
    const result = await fetch(fetchURL);
    const json = await result.json() as QueryEvents;
    return json.events
}

export function convertImageToUsableLink(url: string) {
    const imageURL = new URL(url);
    const imageID = imageURL.pathname.split("/")[3];
    return `https://drive.google.com/uc?export=view&id=${imageID}`
}

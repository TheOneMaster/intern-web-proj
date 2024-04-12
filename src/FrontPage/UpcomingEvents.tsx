import { useInfiniteQuery } from "@tanstack/react-query"
import { EventsQuery } from "./types";
import { UpcomingEventCard } from "../components/UpcomingEvent";

export function UpcomingEvents() {

    const { isLoading, isError, data } = useInfiniteQuery({
        queryKey: ['upcoming'],
        queryFn: getUpcoming,
        initialPageParam: 1,
        getNextPageParam: (lastPage) => {
            return lastPage.page + 1;
        }
    });

    if (isLoading) return "Loading...";
    if (isError || data === undefined) return "Unable to get upcoming events";

    return (
        <>

            {
                data.pages.map(page => {
                    return page.events.map(event => {
                        return <UpcomingEventCard {...event} />
                    })
                })
            }

        </>
    )
}

async function getUpcoming({ pageParam }: { pageParam: number }) {
    const fetchURL = `https://gg-backend-assignment.azurewebsites.net/api/Events?code===&page=${pageParam}&type=upcoming`;
    const result = await fetch(fetchURL);
    return result.json() as Promise<EventsQuery>
}

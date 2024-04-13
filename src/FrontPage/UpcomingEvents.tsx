import { useInfiniteQuery } from "@tanstack/react-query";
import { EventsQuery } from "./types";
import { UpcomingEventCard } from "../components/UpcomingEvent";
import { InfiniteScroll } from "../components/Scrollable";

export function UpcomingEvents() {

    const { isLoading, isError, data, fetchNextPage, hasNextPage, status } = useInfiniteQuery({
        queryKey: ['upcoming'],
        queryFn: getUpcoming,
        initialPageParam: 1,
        getNextPageParam: (lastPage) => {
            return lastPage.page === lastPage.totalPages ? null : lastPage.page + 1;
        },
        select: (data) => {
            const pages = data.pages;
            const events = pages.flatMap((query) => query.events);
            return events
        }
    });

    if (isLoading) return "Loading...";
    if (isError || data === undefined) return "error loading upcoming events";

    return (
        <>
            <InfiniteScroll
                data={data}
                renderItem={({item}) => <UpcomingEventCard {...item} key={item.eventName} />}
                onEndReached={fetchNextPage}
                containerStyle="grid grid-cols-1 lg:grid-cols-3 gap-10 mt-5 pb-5"
            />
            {!hasNextPage && <div className="text-center text-lg">No More events available</div>}
        </>
    )
}

async function getUpcoming({ pageParam }: { pageParam: number }) {
    const fetchURL = `https://gg-backend-assignment.azurewebsites.net/api/Events?code=${import.meta.env.VITE_CODE}==&page=${pageParam}&type=upcoming`;
    const result = await fetch(fetchURL);
    return result.json() as Promise<EventsQuery>
}

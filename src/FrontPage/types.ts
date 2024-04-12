export type EventData = {
    eventName: string
    cityName: string
    date: string
    weather: string
    distanceKm: string
    imgUrl: string
}

export type EventsQuery = {
    events: EventData[]
    page: number
    pageSize: number
    totalEvents: number
    totalPages: number
}

import { ReactNode, useEffect, useRef, useState } from "react";

type InfiniteScrollProps<T> = {
    data: T[]
    renderItem: ({ item, index }: { item: T, index: number }) => ReactNode
    onEndReached?: () => void
    containerStyle?: React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>['className']
}

export function InfiniteScroll<T>(props: InfiniteScrollProps<T>) {

    const [isBottom, setBottom] = useState(false);
    const ref = useRef<HTMLDivElement | null>(null);
    const observeRef = useRef(new IntersectionObserver(([entry]) => {
        setBottom(entry.isIntersecting)
    }))

    useEffect(() => {
        if (ref.current) {
            const children = ref.current.children;
            const lastChild = children[children.length - 1];
            observeRef.current.observe(lastChild);
        }
    }, [ref, props.data])

    useEffect(() => {
        if (isBottom && props.onEndReached) {
            props.onEndReached()
            setBottom(false)
            observeRef.current.disconnect()
        }
    }, [isBottom])


    return (
        <div ref={ref} className={props.containerStyle}>
            {props.data.map((item, index) => props.renderItem({ item, index }))}
        </div>
    )
}

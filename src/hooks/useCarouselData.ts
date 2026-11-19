import { useMemo } from "react";

export default function useCarouselData<ItemType>(carouselPageSize: number, collection?: ItemType[]): ItemType[][] {
    return useMemo<ItemType[][]>(() => {
        const pagesCount = Math.ceil((collection?.length ?? 0) / carouselPageSize);

        return Array(pagesCount).fill(null).map((_, pageIndex) => {
            const begin = pageIndex * carouselPageSize;

            return collection?.slice(begin, begin + carouselPageSize) ?? [];
        });
    }, [carouselPageSize, collection]);
}
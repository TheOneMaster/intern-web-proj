import PlaceholderRecommended from "./assets/Rectangle 2.svg"
import PlaceholderUpcoming from "./assets/Rectangle 9.svg"

export function placeholderClick() {
    console.log("not programmed to do anything");
}

type ImageTypes = "recommended" | "upcoming"

export function convertImageToUsable(url: string, type: ImageTypes="recommended") {
    // Google drive does not allow thumbnail linking
    // https://issuetracker.google.com/issues/319531488?pli=1
    // Not fixing

    if (import.meta.env.VITE_PLACEHOLDER === "False") {
        const link = new URL(url);
        const id = link.pathname.split("/")[3];
        return `https://drive.lienuc.com/uc?id=${id}`
    }

    switch (type) {
        case "recommended":
            return PlaceholderRecommended
        case "upcoming":
            return PlaceholderUpcoming
        default:
            return PlaceholderRecommended
    }
}

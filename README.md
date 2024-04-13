# Intern Web Project

## Explanation
<b>Libraries Used</b>
- React
- React-query
- React-responsive
- Tailwind
- Bootstrap-icons

The frontend is built on React, for easy iteration. React-Query is used for data-retrieval, storage, and caching instead of using raw fetch statements inside `useEffect` hooks. This improves performance and immensely simplifies data retrieval.

The remaining libraries are used to simplify UI design. React-responsive is used to check media queries in JS as a hook, and provide a different UI on desktop vs mobile. Tailwind is used to simplify CSS and prevent writing hundreds of custom classes. Bootstrap icons were used for the icons on the site.

Most of the site is built on the base HTML components with little modification, only CSS to update their styling. The only complex component is the Upcoming Events list which is built to be an infinitely scrolling grid. When the last 2 items in the grid become visible (enter the viewport), react-query is triggered and the next page of results is fetched. This allows infinite scrolling without having to interact with a button to load more results. This can be customized so that items are loaded earlier in the scroll for better pre-loading element performance.

Most of the reponsive design is done simply through tailwind CSS since the actual layout does not change. However, on the header, a different layout is delivered to mobile and desktop since the search bar is not present on mobile.

## How to run
1. Clone the repo `git clone https://github.com/TheOneMaster/intern-web-proj.git` and open directory `cd ./intern-web-project`
2. Install npm modules `npm i`
3. Create an `.env` file and add the keys `VITE_CODE` and `VITE_PLACEHOLDER`.
    - `VITE_CODE` is the API key for the API. Added into the API query here `example.com/api/Events?code=${VITE_CODE}`
    - `VITE_PLACEHOLDER` checks whether to use placeholder images or use the Lienuc API for thumbnails images. Google drive images cannot be used [as seen in this issue tracker](https://issuetracker.google.com/issues/319531488?pli=1). As such, either a placeholder is used or a proxy service [Lienuc](https://lienuc.com/#migrate-from-broken-google-drive-links) is used. If want to use proxy, this must have the value `False` (case-sensitive).
4. Run `npm run dev -- --host` for dev mode or `npm run build` to build for prod. This allows for checking on desktop and mobile by connecting to the network link when on the same network. You can also check on dev tools.

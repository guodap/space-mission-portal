# Space Mission Portal

An application that allows users to browse SpaceX launches and learn more about them.

![SpaceX Launch](./docs/screenshots/app_screenshot.png)

## Set Up

1. Clone the [guodap/space-mission-portal](https://github.com/guodap/space-mission-portal) repository

   ```sh
   git clone https://github.com/guodap/space-mission-portal
   ```

2. Install dependencies and run the app

   ```sh
   npm i && npm start
   ```

3. Open the app at the url displayed in the terminal (default: http://localhost:5173)

## Build app for Production

```sh
npm run build
```

## Features and Design Decisions

### Display Launches

- **Card Layout**: Each launch is displayed in a responsive card format.

  - **Reasoning**: Cards are a visually appealing and organized way to display information, making it easy for users to browse and read details about each launch.
  - **Card vs Table Layout**: Cards offer a visually appealing layout for browsing, while tables might be better for displaying detailed, structured data. Timestamp has been changed to date for better readability. Responsive. The content has image, long desription, link. Best suited for card. Table didn't seem appropriate.
  - **Future**:
    - Clearly label all fields for better usability.
    - Extend the application to show more data beyond launches from other available endpoints
  - **Bugs**: The date is being rounded up by one because of the local UTC format it

### Sorting

- **Sorting by Date (showing most recent launches by default)**:

  - **Reasoning**: Launch data is historic so sorted by date and not name. Users generally interested in most recent data so by default shoring most recent data as users are often more interested in recent launches. Providing the latest information by default makes the application more relevant and useful.

### Search Functionality

- **Searching for launches by name on user input**:

  - **Reasoning**: Instant feedback from searching enhances the user experience by giving real-time feedback and quickly narrowing down the list of launches. If an API call had to be made, would search by button click.
  - **Future Improvementse**:
    - Advanced search features to allow users to filter by more attributes such as launch status or date range.
    - Debounce/delay to avoid rerendering.
    - Filtering Options\*\*: Filter launches by status, date, and other criteria to enhance user experience.

### Client-Side Pagination

- **Pagination by breacrumb**:

  - **Reasoning**: Chose button pagination as it gives a user more control navigating the data. Scroll pagination could also be a good option here as we're displaying cards, especially in mobile. With client-side pagination, only content that can be rendered is displayed, to increase performance.
  - **Future**: Utilize server-side pagination for better performance. Client-side pagination improves performance by rendering only visible data, while server-side pagination is ideal for handling large datasets without overloading the client. Aim to display about 10-20 items per page to balance meaningful content with performance.

## UX Considerations

- **Error Message**: An error message is displayed if the API fails to fetch data
- **No Results Message**: A message is displayed if no date is returned from the API (but the request is successful) or no search results match user search input
- **Loading State**: A loading message is displayed if the API data is being fetched
  - **Future**: Show a skeleton for perceived better performance and better UX so the user knows what to expect
- **Responsive Design**: The application is responsive, allowing users to browse the app on any device e.g. mobile or desktop.

## Testing

- **Tests Performed**
  - Exploratory Testing: Exploratory testing has been conducted to cover scenarios (happy paths and error cases).
  - Util Function Unit Testing
- **Future**
  - Component and Hooks Testing: Add testing for components and hooks! I didn't have enough time to debug configurations needed.
  - Beta Testing: Conduct beta tests with users and gather feedback. Perform thorough design and UX reviews.

## Future Improvements for Performance and UX

- **Caching**: Implement caching as the results are repeated and predictable, not changing often to reduce network calls.
- **Accessibility**: Ensure the application is accessible to all users, including those with disabilities.
- **User Consideration**: Identify the target users and tailor data presentation to their needs.

## Technologies

- **React**: A JavaScript library for building user interfaces.
- **Axios**: A promise-based HTTP client for making API requests.
- **Material-UI**: A popular React UI framework for implementing design components.
- **SpaceX API** (3rd party): A 3rd party API. The data source providing detailed information about space launches.
- React - A JavaScript library for building user interfaces
- Vite - A build tool for modern web projects
- SpaceX API - An unofficial API for SpaceX data

## Acknowledgements

- SpaceX - The company that makes the rockets
- [r-spacex/SpaceX-API](https://github.com/r-spacex/SpaceX-API) - The unofficial API for SpaceX data

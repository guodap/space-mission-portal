# Space Mission Portal

An application that allows users to browse SpaceX launches and learn more about them.

- Website: https://space-mission-portal.onrender.com/
- CI/CD Pipeline: https://github.com/guodap/space-mission-portal/actions (Test, Vulnerability Scan, Lint, Build/Deploy)

![SpaceX Launch](./docs/screenshots/app_screenshot.png)

## Set Up

1. Clone the [guodap/space-mission-portal](https://github.com/guodap/space-mission-portal) repository

   ```sh
   git clone https://github.com/guodap/space-mission-portal
   ```

2. Install dependencies and run the app from the root folder

   ```sh
   npm i && npm start
   ```

3. Open app at the url displayed in the terminal (default: http://localhost:5173)

## Build for Production

From the root folder,

```sh
npm run build
```

## Test

From the root folder,

```sh
npm test
```

## Features and Design Decisions

### SpaceX Launch Gallery

- **Card Layout**: Each launch is displayed in a responsive card format.
  - **Reasoning**: The content has an image, long description, and link, which seemed best suited for a card as. Cards are a visually appealing way to allow the user to browse and read details about each launch. They also suite the responsive design, suitable for both web and mobile. Timestamp has been changed to date for better readability.
  - **Card vs Table Layout**: Tables might be better for displaying detailed, structured data with more fields. If the user needed to analyse and compare the data, this would be more suitable.
  - **Future**:
    - Clearly label all fields (e.g. Launch Name, Local Date, Mission Status, Launch Details) for better usability.
    - Extend the application to show more data beyond launches from other available endpoints
    - Use an endpoint that fetches more recent data (beyond 2022)
  - **Bug**: The date is being rounded up in the code by one day because the API returns it in local UTC format. Need to raise a GH issue and fix this.

### Sorting

- **Sorting by Date (showing most recent launches by default)**:

  - **Reasoning**: Launch data is historic so has been sorted by date instead of name. Users are generally interested in the most recent data, so by default, showing the most recent data makes the application more relevant and useful.

### Search Functionality

- **Searching for launches by name on user input**:

  - **Reasoning**: Since we fetch all data at once, we can allow filtering to happen on user input. This gives the user instant feedback from searching, quickly narrowing down the list of launches which enhances the user experience. If an API call had to be made, a button click would be more suitable.
  - **Future Improvementse**:
    - Debounce input for some time to prevent filtering on every character change, reducing the amount of times we re-render to improve performance.
    - Add advanced filtering features to allow users to filter by more attributes such as Launch Status, Date range etc.

### Client-Side Pagination

- **Page Pagination**:

  - **Reasoning**: With client-side pagination, only content that can be rendered is displayed, increasing performance. Button pagination has been chosen as it gives users more control while navigating the data. 10 cards per page are loaded to give users enough meaningful data but not to overwhelm them with too much information. Scroll pagination could also be a good option to browse cards, especially to provide a seamless mobile experience.
  - **Future**:
    - Server Side Pagination: Server-side pagination would improve performance on initial load as only data that can be displayed would be fetched. The rest of the data could be lazy loaded, as required. The [API supports this](https://github.com/r-spacex/SpaceX-API/tree/master/docs#rspacex-api-docs).
    - Rethink the design: Now users have to scroll to the bottom to change page. On page change, the view should also be repositioned to the top of the page.

## UX Considerations

- **Error Message**: An error message is displayed if the API fails to fetch data.
  - Future: Make this page way cooler for better UX while we annoy the user with an error. If we had a support team or another way for users to report bugs, the contact info could be added here.
- **No Results Message**: A message is displayed if no data is returned from the API (but the request is successful) or no search results matched user input.
  - Future: Also improve this basic component.
- **Loading Indication**: A loading message is displayed if the API data is being fetched.
  - **Future**: Show a skeleton for better perceived performance and improved UX so that the user can anticipate the content that they'll see.
- **Responsive Design**: The application is responsive, allowing users to browse the app on any device, e.g. mobile or desktop.

## Security Considerations

- **Vulnerability Scan**: A CI/CD process has been set up with a vulnerability check, running `npm audit` and recording the result.
  - **Future**: Use a more sophisticated tool and trigger automatic PRs with potential fixes. Alerts could also be set up.
  - **Note**: A failed pipeline doesn't currently fail PR merges and deployment, which it certainly should.
- **API and User Input Validation and Sanitisation**: JSX has inbuilt sanitisation to prevent Cross Site Scripting (XSS). There's a lot of places in the code where data is validated to be what we expect before performing operations.

  - **To Do**: Double check that API and user input format and type are validated and that there's no security or unhandled error risks.

## Performance Considerations

- **Only required API data for the app is stored in state**
- **Preventing unnecessary re-rendering**: useEffect, useMemo and useCallback have been used in combination to only re-render components when necessary.

## Future Improvements for Performance and UX

- **Caching**: Implement caching to reduce network calls as launch data is historic and therefore, very predictable and doesn't change often.
- **Accessibility**: Ensure the application is accessible to all users e.g. more descriptive labels should be added for reading assistants.
- **User Consideration**: Identify the target users and tailor data presentation, design and functionality choices to their needs. For this, we should understand the user and perform thorough design/UX reviews. We could also conduct beta testing with users and gather feedback.

## Testing

- **Tests Performed**
  - Exploratory Testing: Exploratory testing has been conducted to cover most scenarios (happy paths and error cases)
  - Utility Function Unit Tests
    - Note: Some tests are disabled due to failures and lack of time to fix them.
- **Future**
  - Component and Hook Tests need to be added. Add testing for components and hooks! Fix test configurations to resolve failures.

## Technologies

- **React**: A JavaScript library for building user interfaces.
- **Vite** - A build tool for modern web projects suitable for small applications.
- **Material-UI**: A popular and simple React UI framework for implementing design components.
- **Axios**: A promise-based HTTP client for making API requests.
- **SpaceX API** (3rd party): The data source providing detailed information about space launches.

## Acknowledgements

- SpaceX - The company that makes rockets!
- [r-spacex/SpaceX-API](https://github.com/r-spacex/SpaceX-API) - The unofficial API for SpaceX data.

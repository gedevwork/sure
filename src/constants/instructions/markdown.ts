export const welcome = `
Welcome to the Sure technical challenge! The challenges below are intended to test your abilities on a variety of frontend tasks. The overarching assignment is to take this meme-filled shell of a website, and add some features to accommodate basic insurance policy administration. Feel free to add any third party packages you want to help achieve the goals below. Don't worry about optimizing layouts for mobile responsiveness. For the purposes of this exercise, we'll treat this app as a desktop-only experience.

The app relies heavily on [Material UI](https://mui.com/), so you'll likely want to refer to those docs as you go.
`;

export const challenge1 = `
Update the sidebar links to reflect the following:
* As a user, after clicking a sidebar link, the sidebar link should display an "active" state while I am viewing the corresponding route.
  * The Sure logo is not considered a sidebar "link". You can leave it as-is.
  * The "Policyholders" link should only display an "active" state when the user views the \`/policyholders\` route. Currently, the app does not support the \`/policyholders\` route and instead redirects users from \`/policyholders\` to \`/\`, so the "Policyholders" link will never display an "active" state. We will fix that in a later challenge.
* As a user, I should see the ARIA attribute \`aria-current="page"\` set on the currently-active sidebar link.

Sidebar UI will only be judged based on satisfying the above, so don't worry about spending too much time making things pretty. Your CSS skills will be put to the test in Challenge 4.
`;

export const challenge2 = `
Add a unit test in \`NavBar.test.tsx\` asserting that the links render with an \`href\` attribute.
`;

export const challenge3 = `
Add a unit test in \`InstructionsBar.test.tsx\` asserting that \`InstructionBar\`'s \`onClick\` prop is called when the button is clicked.
`;

export const challenge4 = `
* Anchor the footer to the bottom of the screen if the main content doesn't fill the viewport.
* If the main content extends beyond the viewport (i.e. if main content is scrollable), footer should appear below the content. The footer should never overlap main content.
* The sidebar should always span vertically between the top of the page and the footer.

[This image](/footerInstructions.png) illustrates the desired behavior.
`;

export const challenge5 = `
* Create a \`PolicyholdersView\` component that renders when the user visits the \`/policyholders\` route. \`PolicyholdersView\` can just \`return null\` for now.
* Add logic to fetch some data from the backend when the \`PolicyholdersView\` mounts:
  * You can find API documentation in this repo's README.
  * On mount, make a \`GET\` request to the \`/api/policyholders\` endpoint detailed in the API docs.
  * You can add any third party data-fetching library you like, or roll your own solution.
  * You'll make use of the response data in the following challenge.
* The GET request should be made when the user first navigates to the \`/policyholders\` route.
  * The "first" navigation is considered to be the first time the user visits the route after loading the app.
  * "Loading the app" includes browser refresh, so the GET request should fire the first time a user visits the route after a browser refresh.
* The GET request should **not** be made when the user has previously visiting the \`/policyholders\` route in the same session. Instead, data cached from the original GET request is displayed.
  * Example:
    * User clicks on "Policyholders" for the first time
    * GET request fires, caches data
    * User clicks on "Table Example"
    * User clicks on "Policyholders" again
    * GET request does not fire, cached data is used
    * User refreshes browser
    * GET request fires, caches data
`;

export const challenge6 = `
* Update \`PolicyholdersView\` to render an \`InfoTable\`
* Render 5 rows in the \`InfoTable\` implementation with the following keys/labels:
  * Name
  * Age
  * Address
  * Phone number
  * Primary policyholder?

* Use your best judgment to decide how to use the data from the network response to populate each row's value.
`;

export const challenge7 = `
* Update \`PolicyholdersView\` to render a button below the \`InfoTable\`. 
* The button should read "Add a policyholder".
* On click, the button should make a \`POST\` request to add a second policyholder.
* Use the API docs linked in Challenge 5 to make a \`POST\` request to the \`/api/policyholders\` endpoint.
* You can hardcode the \`POST\` body with any data that matches the type defined in the API docs. No need to gather the data from a form or anything.
* You'll make use of the response data in the following challenge.
`;

export const challenge8 = `
Add a second table below the first policyholder table that renders the new policyholder data.
* Note that the data for the new policyholder is only available on the \`POST\` response body. The \`GET\` request will always only yield a single policyholder object, even after you make the \`POST\` request to add a second one.
* Given the above, how you choose to render the two policyholder tables is up to you.
`;

export const challenge9 = `
Add some text at the bottom of \`PolicyHoldersView\` describing any remaining work you would do in this repo before shipping your code to a "production" environment.
`;

export const challenge10 = `
Update the integration test in \`cypress/integration/happy_path.spec.ts\`:
* Run the test locally by running \`yarn cy:open\` to open the Cypress GUI
* Update the test to satisfy the comments in the test file. 
* Refer to [Cypress docs](https://docs.cypress.io/api/table-of-contents) for Cypress help.
`;

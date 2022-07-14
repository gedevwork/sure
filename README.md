# Sure Frontend Technical Challenge
Welcome! Thanks for your interest in joining the frontend team at Sure. As part of our interview process, you'll be working through a series of technical challenges outlined in this app.
___
## Goal
Add this folder to a new repository on GitHub and file a Pull Request capturing the updates you make to complete the assignment.

## Getting Started
Before beginning the assignment, **you'll need to add this folder to a new repository on GitHub in its initial unaltered state**. That way, you can provide a comparison of the completed assignment against the initial state of the repo via a Pull Request. Once you've initialized the repo, you can begin the assignment.

The assignment instructions are accessible in the app itself, so to begin, you'll need to:
* `yarn install` to install dependencies.
* `yarn start` to run the app locally.
* Once the development server is running, you can open [http://localhost:3000](http://localhost:3000) to view it in the browser.
* You can view the instructions in the app by clicking the "View challenges" button.

## Submitting your challenge
* [Create a pull request](https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/creating-a-pull-request) comparing your work to this folder's initial state (See "Getting Started" above).
* Respond to the email from your recruiter with a link to the Pull Request on GitHub. The repo should be public so that the Pull Request is accessible for review.

If you have any questions, don't hesitate to reach out to your recruiting contact. Good luck!

# API Docs

## `GET /api/policyholders`
### Request
```
GET https://fe-interview-technical-challenge-api-git-main-sure.vercel.app/api/policyholders
```

### Response
```ts
{
   policyHolders: [
      {
         "name": string,
         "age": number,
         "address": {
            "line1": string,
            "line2": string | undefined,
            "city": string,
            "state": string,
            "postalCode": string,
         },
         "phoneNumber": string,
         "isPrimary": boolean,
       }
   ]
}
```
## `POST /api/policyholders`
### Request
URL:
```
POST https://fe-interview-technical-challenge-api-git-main-sure.vercel.app/api/policyholders
```
Body example:
```ts
{
    "name": string,
    "age": number,
    "address": {
      "line1": string,
      "line2": string | undefined,
      "city": string,
      "state": string
      "postalCode": string,
    },
    "phoneNumber": string,
}
```

#### Response
```ts
{
   policyHolders: [
      {
         "name": string,
         "age": number,
         "address": {
            "line1": string,
            "line2": string | undefined,
            "city": string,
            "state": string,
            "postalCode": string,
         },
         "phoneNumber": string,
         "isPrimary": boolean,
       },
       {
         "name": string,
         "age": number,
         "address": {
            "line1": string,
            "line2": string | undefined,
            "city": string,
            "state": string,
            "postalCode": string,
         },
         "phoneNumber": string,
         "isPrimary": boolean,
       }
   ]
}
```

___
## More info

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

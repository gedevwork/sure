// We can remove the export once this file imports anything.
// Until then: https://stackoverflow.com/questions/57132428/augmentations-for-the-global-scope-can-only-be-directly-nested-in-external-modul
export {};

// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

declare global {
  namespace Cypress {
    // eslint-disable-next-line @typescript-eslint/naming-convention, @typescript-eslint/no-unused-vars
    interface Chainable<Subject> {
      /**
       * Get DOM elements marked with the "data-testid" convention.
       *
       * @param testId The data-testid value
       * @param equality The attribute equality prefix. Default ''.
       *   See https://css-tricks.com/attribute-selectors/ for more info.
       */
      getTestEl(
        testId: string,
        equality?: string
      ): Chainable<JQuery<HTMLElement>>;
    }
  }
}

/**
 * Get DOM elements marked with the "data-testid" convention.
 *
 * @param {String} id The data-testid value
 * @param {String} [equality] The attribute equality prefix.
 *   Default ''.
 *   See https://css-tricks.com/attribute-selectors/ for more info.
 */
Cypress.Commands.add('getTestEl', (id, equality = '') => {
  return cy.get(`[data-testid${equality}="${id}"]`);
});

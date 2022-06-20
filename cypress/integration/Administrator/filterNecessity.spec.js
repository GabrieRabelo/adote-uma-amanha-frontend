describe("Filter Necessity", () => {
  beforeEach(() => {
    cy.visit("/auth");
    cy.get("input[type='email']", { timeout: Cypress.env("timeOut") }).type(
      Cypress.env("emailAdmin")
    );
    cy.get("input[type='password']", { timeout: Cypress.env("timeOut") }).type(
      Cypress.env("password")
    );
    cy.get(
      "button[class='a-button v-application px-9 py-5 v-btn v-btn--has-bg v-btn--rounded theme--light elevation-0 v-size--default primary']",
      { timeout: Cypress.env("timeOut") }
    ).click();
    cy.contains('[class="a-button--title"]', "Necessidades", {
      timeout: Cypress.env("timeOut"),
    }).click();
    cy.url().should("include", "/admin/necessities", {
      timeout: Cypress.env("timeOut"),
    });
  });

  it("Filter by category", () => {
    cy.get(
      "button[class='v-btn v-btn--is-elevated v-btn--fab v-btn--has-bg v-btn--round theme--light v-size--default primary']",
      {
        timeout: Cypress.env("timeOut"),
      }
    ).click();
    cy.contains('[class="v-chip__content"]', "Saúde", {
      timeout: Cypress.env("timeOut"),
    }).click();
    cy.contains('[class="a-button--title"]', "Aplicar Filtros").click();
  });

  it("Filter by type", () => {
    cy.get(
      "button[class='v-btn v-btn--is-elevated v-btn--fab v-btn--has-bg v-btn--round theme--light v-size--default primary']",
      {
        timeout: Cypress.env("timeOut"),
      }
    ).click();
    cy.contains('[class="v-chip__content"]', "Bens", {
      timeout: Cypress.env("timeOut"),
    }).click();
    cy.contains('[class="a-button--title"]', "Aplicar Filtros").click();
  });

  it("Filter by date", () => {
    cy.get(
      "button[class='v-btn v-btn--is-elevated v-btn--fab v-btn--has-bg v-btn--round theme--light v-size--default primary']",
      {
        timeout: Cypress.env("timeOut"),
      }
    ).click();
    cy.contains('[class="v-select__slot"]', "Data").click();
    cy.contains('[class="v-list-item__title"]', "6 meses", {
      timeout: Cypress.env("timeOut"),
    }).click();
    cy.contains('[class="a-button--title"]', "Aplicar Filtros").click();
  });
});
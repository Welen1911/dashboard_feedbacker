const APP_URL = process.env.APP_URL || "http://192.168.0.102:5173/";

describe("Home", () => {
  it("should render create account modal when click on cta create account button", () => {
    cy.visit(APP_URL);

    cy.get("#cta-create-account-button").click();

    cy.get("#modal-create-account");
  });

  it("should render create account modal when click on header create account button", () => {
    cy.visit(APP_URL);

    cy.get("#header-create-account-button").click();

    cy.get("#modal-create-account");
  });
});

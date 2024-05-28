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

  it("should render login modal when click on header login button", () => {
    cy.visit(APP_URL);

    cy.get("#header-login-button").click();

    cy.get("#modal-login");
  });

  it.skip("should login with an email and password", () => {
    cy.visit(APP_URL);

    cy.get("#header-login-button").click();
    cy.get("#modal-login");

    cy.get("#email-field").type("admin@teste.com");
    cy.get("#password-field").type("1234");
    cy.get("#submit-button").click();

    cy.url().should("include", "/feedbacks");
  });

  it("should show an error with an invalid email", () => {
    cy.visit(APP_URL);

    cy.get("#header-login-button").click();
    cy.get("#modal-login");

    cy.get("#email-field").type("admin@");

    cy.get("#email-error");
    cy.get("#password-field").type("1234");
    cy.get("#submit-button").click();
  });

  it("should show an error with an invalid password", () => {
    cy.visit(APP_URL);

    cy.get("#header-login-button").click();
    cy.get("#modal-login");

    cy.get("#email-field").type("admin@teste.com");
    cy.get("#password-field").type("1");

    cy.get("#password-error");
    cy.get("#submit-button").click();
  });

  it.skip("should create account with an name, email and password", () => {
    cy.visit(APP_URL);

    cy.get("#header-create-account-button").click();
    cy.get("#modal-create-account");

    cy.get("#name-field").type("user");
    cy.get("#email-field").type("user22@teste.com");
    cy.get("#password-field").type("1234");
    cy.get("#submit-button").click();

    cy.url().should("include", "/feedbacks");
  });


  it('should logout work correctly', () => {
    cy.visit(APP_URL);

    cy.get("#header-login-button").click();
    cy.get("#modal-login");

    cy.get("#email-field").type("admin@teste.com");
    cy.get("#password-field").type("1234");
    cy.get("#submit-button").click();

    cy.url().should("include", "/feedbacks");

    cy.get('#logout-button').click();

    cy.url().should('equal', APP_URL);
  });
});

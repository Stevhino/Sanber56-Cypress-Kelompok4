class ProductPage {
  visit() {
    cy.visit("/radiant-tee.html");
  }

  hapusQuantity() {
    cy.get("#qty").clear();
  }

  TambahKeranjang() {
    cy.get("#product-addtocart-button").click();
  }

  alertRequiredFieldError() {
    cy.contains("This is a required field").should("be.visible");
  }

  alertRequiredNumberError() {
    cy.contains("Please enter a valid number in this field.").should(
      "be.visible"
    );
  }

  alertQuantityGreaterThanZero() {
    cy.contains("Please enter a quantity greater than 0.").should("be.visible");
  }

  alertSuccess() {
    cy.get(".message-success", { timeout: 10000 }).should(
      "contain.text",
      "You added Radiant Tee to your shopping cart."
    );
  }
}

export default ProductPage;

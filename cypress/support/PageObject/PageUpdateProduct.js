class UpdateProductPage {
  bukaKeranjang() {
    cy.get(".showcart").click();
  }

  ubahKeranjangItem() {
    cy.get('[title="Edit item"]').click();
  }

  updateKeranjang() {
    cy.get("#product-updatecart-button").click();
  }

  alertUpdateSuccess() {
    cy.get(".message-success", { timeout: 10000 }).should(
      "contain.text",
      "Radiant Tee was updated in your shopping cart."
    );
  }
}

export default UpdateProductPage;

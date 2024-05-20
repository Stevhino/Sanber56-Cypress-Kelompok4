class ProductReviewPage {
  visit() {
    cy.visit("/radiant-tee.html");
  }

  bukaReviewTab() {
    cy.get("#tab-label-reviews-title").click();
  }

  isiNickname(nickname) {
    cy.get("#nickname_field").type(nickname);
  }

  isiSummary(summary) {
    cy.get("#summary_field").type(summary);
  }

  isiReview(review) {
    cy.get("#review_field").type(review);
  }

  pilihRating(rating) {
    cy.get(`#Rating_${rating}_label`).click({ force: true });
  }

  klikSubmitReview() {
    cy.get(".actions-primary > .action").click();
  }

  alertRequiredFieldError() {
    cy.contains("This is a required field.").should("be.visible");
  }

  alertRatingError() {
    cy.contains("Please select one of each of the ratings above.").should(
      "be.visible"
    );
  }

  alertSubmissionSuccess() {
    cy.contains("You submitted your review for moderation.").should(
      "be.visible"
    );
  }
}

export default ProductReviewPage;

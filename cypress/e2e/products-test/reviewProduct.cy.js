import ProductReviewPage from "../../support/PageObject/PageReviewProduct";

const reviewPage = new ProductReviewPage();

describe("Pengujian Form Review Produk", () => {
  beforeEach(() => {
    reviewPage.visit();
  });

  it("Gagal Submit Review karena tidak memilih rating", () => {
    reviewPage.bukaReviewTab();

    cy.fixture("data-reviews.json").then((data) => {
      cy.wait(3000);
      const review = data.reviews[0];
      reviewPage.isiNickname(review.nickname);
      reviewPage.isiSummary(review.summary);
      reviewPage.isiReview(review.review);
    });

    reviewPage.klikSubmitReview();
    reviewPage.alertRatingError();
  });

  it("Gagal Submit Review karena tidak mengisi Nickname", () => {
    reviewPage.bukaReviewTab();

    cy.fixture("data-reviews.json").then((data) => {
      cy.wait(3000);
      const review = data.reviews[1];
      reviewPage.pilihRating(review.rating);
      reviewPage.isiSummary(review.summary);
      reviewPage.isiReview(review.review);
    });

    reviewPage.klikSubmitReview();

    reviewPage.alertRequiredFieldError();
  });

  it("Gagal Submit Review karena tidak mengisi Summary", () => {
    reviewPage.bukaReviewTab();

    cy.fixture("data-reviews.json").then((data) => {
      cy.wait(3000);
      const review = data.reviews[2];
      reviewPage.pilihRating(review.rating);
      reviewPage.isiNickname(review.nickname);
      reviewPage.isiReview(review.review);
    });

    reviewPage.klikSubmitReview();

    reviewPage.alertRequiredFieldError();
  });

  it("Gagal Submit Review karena tidak mengisi Review", () => {
    reviewPage.bukaReviewTab();

    cy.fixture("data-reviews.json").then((data) => {
      cy.wait(3000);
      const review = data.reviews[0];
      reviewPage.pilihRating(review.rating);
      reviewPage.isiNickname(review.nickname);
      reviewPage.isiSummary(review.summary);
    });

    reviewPage.klikSubmitReview();

    reviewPage.alertRequiredFieldError();
  });

  it("Berhasil Submit Review", () => {
    reviewPage.bukaReviewTab();

    cy.fixture("data-reviews.json").then((data) => {
      cy.wait(3000);
      const review = data.reviews[0];
      reviewPage.pilihRating(review.rating);
      reviewPage.isiNickname(review.nickname);
      reviewPage.isiSummary(review.summary);
      reviewPage.isiReview(review.review);
    });

    reviewPage.klikSubmitReview();

    cy.url().should(
      "include",
      "https://magento.softwaretestingboard.com/radiant-tee.html"
    );

    cy.wait(3000);
    cy.contains("You submitted your review for moderation.").should(
      "be.visible"
    );
  });
});

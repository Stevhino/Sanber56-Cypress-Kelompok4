import ProductPage from "../../support/PageObject/PageProduct";
import UpdateProductPage from "../../support/PageObject/PageUpdateProduct";

const productPage = new ProductPage();
const updateProductPage = new UpdateProductPage();

describe("Pengujian Fitur Halaman Update Produk Radiant Tee", () => {
  before(() => {
    cy.fixture("product-option.json").as("productOption");
  });

  beforeEach(() => {
    productPage.visit();
  });

  it("menambahkan barang dahulu lalu mengupdate data", function () {
    cy.wait(3000);
    cy.pilihUkuranAcak(this.productOption);
    cy.pilihWarnaAcak(this.productOption);

    productPage.TambahKeranjang();
    cy.wait(3000);
    productPage.alertSuccess();

    updateProductPage.bukaKeranjang();
    updateProductPage.ubahKeranjangItem();

    cy.url().should("include", "/checkout/cart/configure");

    cy.pilihUkuranAcak(this.productOption);
    cy.pilihWarnaAcak(this.productOption);
    cy.pilihKuantitasAcak("#qty");

    updateProductPage.updateKeranjang();

    cy.wait(5000);
    cy.url().should("include", "checkout/cart/");

    updateProductPage.alertUpdateSuccess();
  });
});

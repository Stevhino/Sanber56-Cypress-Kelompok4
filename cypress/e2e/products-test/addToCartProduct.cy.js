import ProductPage from "../../support/PageObject/PageProduct";

const productPage = new ProductPage();

before(() => {
  cy.fixture("product-option.json").as("productOption");
});

describe("Pengujian Fitur Halaman Produk Radiant Tee di Add to Cart", () => {
  beforeEach(() => {
    productPage.visit();
  });

  it("Gagal Menambahkan ke Keranjang Tanpa Memilih Ukuran, Warna dan mengosongkan quantity", function () {
    cy.wait(3000);
    productPage.hapusQuantity();
    productPage.TambahKeranjang();
    productPage.alertRequiredFieldError();
    productPage.alertRequiredNumberError();
  });

  it("Gagal Menambahkan ke Keranjang Tanpa Memilih Ukuran", function () {
    cy.wait(3000);
    cy.pilihWarnaAcak(this.productOption);
    cy.pilihKuantitasAcak("#qty");
    productPage.TambahKeranjang();
    productPage.alertRequiredFieldError();
  });

  it("Gagal Menambahkan ke Keranjang Tanpa Memilih Warna", function () {
    cy.wait(3000);
    cy.pilihUkuranAcak(this.productOption);
    cy.pilihKuantitasAcak("#qty");
    productPage.TambahKeranjang();
    productPage.alertRequiredFieldError();
  });

  it("Gagal Menambahkan ke Keranjang jika quantity kurang dari 0", function () {
    cy.wait(3000);
    cy.pilihUkuranAcak(this.productOption);
    cy.pilihWarnaAcak(this.productOption);
    cy.pilihKuantitasAcakKurangDari0("#qty");
    productPage.TambahKeranjang();
    productPage.alertQuantityGreaterThanZero();
  });

  it("Gagal Menambahkan ke Keranjang jika quantity tidak diisi", function () {
    cy.wait(3000);
    cy.pilihUkuranAcak(this.productOption);
    cy.pilihWarnaAcak(this.productOption);
    cy.get("#qty").clear();
    productPage.TambahKeranjang();
    productPage.alertRequiredNumberError();
  });

  it("Berhasil Menambah Keranjang dengan Memilih Warna, Ukuran Secara Acak dan quantity secara acak", function () {
    cy.wait(3000);
    cy.pilihUkuranAcak(this.productOption);
    cy.pilihWarnaAcak(this.productOption);
    cy.pilihKuantitasAcak("#qty");
    productPage.TambahKeranjang();
    cy.wait(3000);
    productPage.alertSuccess();
  });
});

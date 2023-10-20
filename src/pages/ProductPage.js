import { Banner, ProductCard, Spring } from "../components";
import { useTranslation } from "react-i18next";
import style from "./ProductPage.module.scss";
import products from "./productData"

// Mocked productList data
// TODO: use currencyFormatter to format price


function ProductPage() {
  const { t } = useTranslation();
  return <>
    <Banner title={t('pages.product_list.banner.title')}></Banner>
    <Spring>
      <section className={style.productList}>
        {products.map((product) => (
            <ProductCard  product={product} key={product.id}></ProductCard>
        ))}
      </section>
    </Spring>
  </>;
}

export default ProductPage;

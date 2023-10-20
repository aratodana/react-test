import { Banner, ProductCard, Spring } from "../components";
import { useTranslation } from "react-i18next";
import style from "./ProductPage.module.scss";
import products from "./productData"

// Mocked productList data
// TODO: use currencyFormatter to format price


function ProductPage() {
  const { t } = useTranslation();
  return <div>
    <Banner title={t('pages.product_list.banner.title')}></Banner>
    <Spring>
      <div className={style.productList}>
        {products.map((product) => (
            <ProductCard  product={product} key={product.id}></ProductCard>
        ))}
      </div>
    </Spring>
  </div>;
}

export default ProductPage;

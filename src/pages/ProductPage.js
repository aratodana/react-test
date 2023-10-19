import { Banner, ProductCard, Spring } from "../components";
import { useTranslation } from "react-i18next";
import style from "./ProductPage.module.scss";

function ProductPage() {
  const { t } = useTranslation();
  return <div>
    <Banner title={t('pages.product_list.banner.title')}></Banner>
    <Spring>
      <div className={style.productList}>
        <ProductCard></ProductCard>
        <ProductCard></ProductCard>
        <ProductCard></ProductCard>
        <ProductCard></ProductCard>
        <ProductCard></ProductCard>
        <ProductCard></ProductCard>
      </div>
    </Spring>
  </div>;
}

export default ProductPage;

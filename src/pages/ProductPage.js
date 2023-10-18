import { Banner } from "../components";
import { useTranslation } from "react-i18next";

function ProductPage() {
  const { t } = useTranslation();
  return <div>
    <Banner title={t('pages.product_list.banner.title')}></Banner>
  </div>;
}

export default ProductPage;

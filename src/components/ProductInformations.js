import style from "./ProductInformations.module.scss";
import { useTranslation } from "react-i18next";
function ProductInformations(props) {
  const { t } = useTranslation();
  return (
    <div className={style.productInformations}>
      <h4 className={style.productInformationsTitle}>
        {t("components.product_informations.description")}
      </h4>
      <p className={style.productInformationsText}>
        {props.product.description}
      </p>
      <h4 className={style.productInformationsTitle}>
        {t("components.product_informations.features")}
      </h4>
      <table className={style.productInformationsTable}>
        <tbody>
          {props.product.features.map((feature) => {
            return (
              <tr key={feature.name}>
                <td>{feature.name}</td>
                <td>{feature.value}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default ProductInformations;

import style from "./ProductInformations.module.scss";
import { useTranslation } from "react-i18next";
function ProductInformations (props) {
const { t } = useTranslation();
  return (
      <div className={style.productInformations}>
          <h4 className={style.productInformationsTitle}>
              { t('components.productInformations.description') }
          </h4>
          <p className={style.productInformationsText}>
              { props.product.description }
          </p>
          <h4 className={style.productInformationsTitle}>
              { t('components.productInformations.features') }
          </h4>
          <table className={style.productInformationsTable}>
              { props.product.features.map(feature => {
                  return <tr>
                      <td>
                          { feature.name }
                      </td>
                      <td>
                        { feature.value }
                      </td>
                  </tr>
              }) }
          </table>

      </div>
  );
}

export default ProductInformations;

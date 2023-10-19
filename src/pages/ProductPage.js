import { Banner, ProductCard, Spring } from "../components";
import { useTranslation } from "react-i18next";
import style from "./ProductPage.module.scss";

// Mocked productList data
// TODO: use currencyFormatter to format price
const products= [
  {
    id: 1,
    title: 'Poly Edge 550',
    price: '£30',
    image: require('../assets/products/item1.png')
  },
  {
    id: 2,
    title: 'Poly Edge E320',
    price: '£30',
    image: require('../assets/products/item2.png')
  },
  {
    id: 3,
    title: 'Poly Edge B30',
    price: '£210',
    image: require('../assets/products/item3.png')
  },
  {
    id: 4,
    title: 'Nokia 3210',
    price: '£2,010',
    image: require('../assets/products/item4.png')
  },
  {
    id: 5,
    title: 'Blackwire 52xx',
    price: '£29',
    image: require('../assets/products/item5.png')
  },
  {
    id: 6,
    title: 'Voyager 43xx',
    price: '£29',
    image: require('../assets/products/item6.png')
  },
  {
    id: 7,
    title: 'Savi 72xx',
    price: '£29',
    image: require('../assets/products/item7.png')
  },
  {
    id: 8,
    title: 'Voyager Free 60',
    price: '£29',
    image: require('../assets/products/item8.png')
  },
]


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

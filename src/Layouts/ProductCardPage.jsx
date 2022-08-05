
import ProductCard from '../components/ProductCard/ProductCard';
import BreadCrumbs from '../components/BreadCrumbs/BreadCrumbs';

const data = {
  id: 'SKU: BXD100BL',
  title: 'Snow Tender Ice Cream',
  description: 'Description:',
  text: 'Chocolate ice cream has a bright, rich and refreshing taste of the ingredient it contains. Thanks to'
    + ' liquid nitrogen shock freezing (-193°C), which freezes all the ingredients instantly and gives the'
    + ' ice cream an amazingly delicate texture, all the flavors, vitamins and nutrients are preserved by 99%.'
    + '\n'
    + '\n'
    + 'Blast freezing with liquid nitrogen (-193°C), '
    + 'which freezes all the ingredients instantly and gives the ice cream an '
    + 'amazingly delicate texture, preserving all the flavors, vitamins and nutrients by 99%.',
  price: '$243.00',

};

const ProductCardPage = () => (
  <div className="productCardPageLayouts">
    <BreadCrumbs />
    <ProductCard id={data.id} title={data.title} description={data.description} text={data.text} price={data.price} />
  </div>
);

export default ProductCardPage;

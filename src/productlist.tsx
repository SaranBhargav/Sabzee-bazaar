import { useState, useEffect } from 'react';
import { useQuery } from 'react-query';
import Select from 'react-select';
//material ui components
import LinearProgress from '@mui/material/LinearProgress';
import Grid from '@mui/material/Grid';

//normal components import
import Item from './Item/item';
import { useDispatch, useSelector } from 'react-redux';
import { setProducts } from './redux/actions/productAction';
import ProductData from './server/products/index.get.json';

// styles
import { Wrapper } from './app.styles';
import { CartItemType } from './App';

type Props = {
  cartItems: CartItemType[];
  handleAddToCart: (clickedItem: CartItemType) => void;
  handleRemoveFromCart: (name: string) => void;
  statusHandler: (obj: any) => any;
}

//api calling
const getProducts = async (): Promise<CartItemType[]> => (await ProductData);
//const getProducts = async (): Promise<CartItemType[]> => (await(await fetch('http:// ----server link here-----')).json()).data;

const ProductList: React.FC<Props> = ({ cartItems, handleAddToCart, statusHandler }) => {
  const products = useSelector((state: any) => state.allProducts.products);
  const categorySelect = useSelector((state: any) => state.allCategories.selectedCategory);
  const dispatch = useDispatch();
  //data for select 
  const options = [
    { value: 'All', label: 'All' },
    { value: '5b675e5e5936635728f9fc30', label: 'Beverages' },
    { value: '5b6899123d1a866534f516de', label: 'Bakery Cakes and Dairy' },
    { value: '5b68994e3d1a866534f516df', label: 'Beauty and Hygiene' },
    { value: '5b6899683d1a866534f516e0', label: 'Baby Care' },
    { value: '5b68997d3d1a866534f516e1', label: 'Seafood' },
    { value: '5b6899953d1a866534f516e2', label: 'Fruits & Vegetables' }
  ];
  const { data, isLoading, error } = useQuery<CartItemType[]>('products', getProducts);
  const [count, setCount] = useState(0);

  useEffect(() => {
    filterCategory();
    if (count < 2) {
      setCount((c: number): number => count + 1);
    }
  }, [data, categorySelect]);


  // function to filter categories
  const filterCategory = () => {
    console.log(categorySelect);

    if (typeof (data) !== 'undefined') {
      if (categorySelect === '' || categorySelect === 'All') {
        dispatch(setProducts(data));
      }
      else {
        dispatch(setProducts(data.filter((data) => data.category === categorySelect)));
      }
    }
  };

  //loading line 
  if (isLoading) return <LinearProgress />;
  //if any error
  if (error) return <div>something went wrong! please go back to home page.</div>
  return (
    <>
      <div className='row'>
        <div className='col-xs-12 offset-sm-4 col-sm-8 offset-md-8 col-md-4 offset-lg-8 col-lg-4'>
          <Select options={options} onChange={statusHandler} />
        </div>
      </div>
      <Wrapper>
        <Grid container spacing={3}>
          {products?.map((item: any) => (
            <Grid item key={item.id} xs={12} sm={3} >
              <Item item={item} handleAddtoCart={handleAddToCart} />
            </Grid>
          ))}
        </Grid>
      </Wrapper>
    </>
  );
}

export default ProductList;

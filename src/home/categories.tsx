/** below component is for home page category types information */
//react redux
import { useDispatch, useSelector } from 'react-redux';
import { setCategories } from '../redux/actions/categoriesAction';
//libs
import { NavLink } from 'react-router-dom';
import { useQuery } from 'react-query';
// styles
import { Wrapper } from './categories.styles';
//data
import ProdCategoriesData from '../server/categories/index.get.json';
//material ui
import LinearProgress from '@mui/material/LinearProgress';


//types
export type ProdCategoryType = {
  id: string;
  name: string;
  key: string;
  description: string;
  imageUrl?: string;
  enabled: boolean;
  order: number;
}

type Props = {
  clickHandler: (obj: any) => any;
}

const getProdCategories = async (): Promise<ProdCategoryType[]> => (await ProdCategoriesData);

const Categories: React.FC<Props> = ({ clickHandler }) => {

  const { data, isLoading, error } = useQuery<ProdCategoryType[]>('productCategories', getProdCategories);

  const categories = useSelector((state: any) => state.allCategories.categories);

  const dispatch = useDispatch();
  dispatch(setCategories(data));
  //loading line 
  if (isLoading) return <LinearProgress />;
  //if any error
  if (error) return <div>something went wrong! go back to home page</div>
  return (
    <>
      {categories?.map((item: any) => (
        <Wrapper>
          <div className="row " key={item.id} >
            <div className='col col-sm-12 col-md-6 col-lg-6'>
              <img key={item.id} src={item.imageUrl} alt="" width="100%" height="auto" />
            </div>
            <div className='col col-sm-12 col-md-6 col-lg-6' >
              <h2>
                {item.name}
              </h2>
              <p>{item.description}</p>
              <NavLink to="/products">
                <button
                  onClick={clickHandler}
                  value={item.id}
                >
                  {item.name}
                </button>
              </NavLink>
            </div>
          </div>
        </Wrapper>
      ))}
    </>
  );
}

export default Categories;

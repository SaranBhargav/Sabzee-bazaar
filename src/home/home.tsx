//home page component
import Categories  from './categories';
// styles
import { Wrapper } from '../app.styles';
import "react-responsive-carousel/lib/styles/carousel.min.css";
//data
import BannerData from '../server/banners/index.get.json';
//libs
import { useQuery } from 'react-query';
import { Carousel } from "react-responsive-carousel";
//material ui
import LinearProgress from '@mui/material/LinearProgress';
//types
export type BannerType = {
  id: string;
  bannerImageUrl: string;
  bannerImageAlt: string;
  isActive: boolean;
  order: number;
 
}

type Props = {
  clickHandler: (e: any)=> any;
}

  const getBanners = async (): Promise<BannerType[]> => (await BannerData);
  const Home: React.FC<Props> = ({ clickHandler }) => {
  const {data, isLoading, error} =  useQuery<BannerType[]>('banners', getBanners);
  //loading line 
  if (isLoading) return <LinearProgress />;
  //if any error
  if (error) return <div>something went wrong! please go back to home page </div>
  return (
    <>
    <Wrapper>
<Carousel autoPlay infiniteLoop swipeable showThumbs={false}>
{data?.map(item => (       
          <div>
          <img key={item.id} src={item.bannerImageUrl} alt={item.bannerImageAlt} width="100%" height="auto"/> 
          </div>
      ))}
</Carousel>
    </Wrapper>
    <Categories clickHandler={clickHandler} />
      </>
  );
}

export default Home;

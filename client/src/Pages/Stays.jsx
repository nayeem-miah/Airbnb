import { Helmet } from 'react-helmet-async'
import Categories from '../Components/Categories/Categories'
import Cards from '../Components/Cards/Cards'

const Stays = () => {
  return (
    <div>
      <Helmet>
        <title>Airbnb | Stays page</title>
      </Helmet>
      {/* Categories section  */}
      <Categories />
      {/* card section section */}
      <Cards />
    </div>
  )
}

export default Stays
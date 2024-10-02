import { Helmet } from 'react-helmet-async'
import Categories from '../Components/Categories/Categories'
import Cards from '../Components/Cards/Cards'
import ScarchBar from '../Components/ScarchBar'

const Stays = () => {
  return (
    <div>
      <Helmet>
        <title>Airbnb | Vacation Homes & Condo Rentals</title>
      </Helmet>
      <ScarchBar></ScarchBar>
      {/* Categories section  */}
      <Categories />
      {/* card section section */}
      <Cards />
    </div>
  )
}

export default Stays
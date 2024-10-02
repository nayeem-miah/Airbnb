
import { useSearchParams } from 'react-router-dom'

import Heading from '../Heading'
import LoadingSpinner from '../LoadingSpinner'
import Card from './Card'
import Container from '../Container'
import { useEffect, useState } from 'react'

const Cards = () => {

  const [rooms, setRooms] = useState([]);
  const [loading, setLoading] = useState(true);
  const [params] = useSearchParams();
  const category = params.get('category');

  useEffect(() => {
    setLoading(true);
    fetch(`https://airbnb-02-server.vercel.app/rooms?category=${category}`)
      .then(res => res.json())
      .then(data => {
        setRooms(data);
        setLoading(false);
      })
      .catch(() => {
        setLoading(false);
      });
  }, [category]);


  if (loading) return <LoadingSpinner />

  return (
    <Container>
      {rooms && rooms.length > 0 ? (
        <div className='pt-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols- xl:grid-cols-4 2xl:grid-cols-5 gap-8'>
          {rooms?.map(room => (
            <Card key={room._id} room={room} />
          ))}
        </div>
      ) : (
        <div className='flex items-center justify-center min-h-[calc(100vh-300px)]'>
          <Heading
            center={true}
            title='No Rooms Available In This Category!'
            subtitle='Please Select Other Categories.'
          />
        </div>
      )}
    </Container>
  )
}

export default Cards

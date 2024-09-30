
import { useQuery } from '@tanstack/react-query'

import { useSearchParams } from 'react-router-dom'
import useAxiosCommon from '../../Hooks/useAxiosCommon'
import Heading from '../Heading'
import LoadingSpinner from '../LoadingSpinner'
import Card from './Card'
import Container from '../Container'
import { useEffect, useState } from 'react'

const Cards = () => {

  const [rooms, setRooms] = useState([]);
  useEffect(
    () => {
      fetch('../../../public/categoriy.json')
        .then(res => res.json())
        .then(data => {
          // console.log(data);
          setRooms(data)
        })
    }, []
  )
console.log(rooms);
  // use tanstack query
  // const axiosCommon = useAxiosCommon();

  // const [params, setParams] = useSearchParams()
  // const category = params.get('category')
  // console.log(category);
  // const { data: rooms = [], isLoading } = useQuery({
  //   queryKey: ['rooms',category],
  //   queryFn: async () => {
  //     const { data } = await axiosCommon.get(`/rooms?category=${category}`)
  //     return data
  //   }
  // })

  // console.log(rooms);
  //   if (isLoading) return <LoadingSpinner />

  return (
    <Container>
      {rooms && rooms.length > 0 ? (
        <div className='pt-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-8'>
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

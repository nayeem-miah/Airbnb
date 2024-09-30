import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import { Navigation, Pagination, } from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { FaStar } from 'react-icons/fa';
const Card = ({ room }) => {

  const image = room.images;
  console.log(image);
  return (
    <Link className='col-span-1 cursor-pointer group hover:border p-2'>
      <div className='flex flex-col gap-2 w-full'>
        <div
          className='
              aspect-square
              w-full
              relative
              overflow-hidden
              rounded-xl
            '
        >


          <Swiper
            spaceBetween={50}
            centeredSlides={true}
            pagination={{
              clickable: true,
            }}
            navigation={true}
            modules={[Pagination, Navigation]}
            className="mySwiper"
            loop={false}
          >
            {
              image?.map(img => (<SwiperSlide>
                <img
                  className='
                    object-cover
                    h-full
                    w-full
                  '
                  src={img}
                  alt='Room'
                />
              </SwiperSlide>))
            }
          </Swiper>
          <div
            className='
              absolute
              top-3
              right-3
            '
          ></div>
        </div>
        <div className='font-semibold text-lg flex justify-between'>
          <h3>{room?.title}</h3>
          <h3 className='flex items-center gap-1'><FaStar></FaStar><span>{room?.rating}</span></h3>
        </div>
        <div className='font-light text-neutral-500'>{room?.short_description}</div>
        <div className='font-light text-neutral-500'>{room?.date}</div>
        <div className='flex flex-row items-center gap-1'>
          <div className='font-semibold'>$ {room?.price}</div>
          <div className='font-light'>night</div>
        </div>
      </div>
    </Link>
  )
}

Card.propTypes = {
  room: PropTypes.object,
}

export default Card

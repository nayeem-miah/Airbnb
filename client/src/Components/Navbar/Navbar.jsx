
import { AiOutlineMenu } from 'react-icons/ai'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import Container from '../Container'
import avatarImg from '../../assets/placeholder.jpg'

const Navbar = () => {

    const [isOpen, setIsOpen] = useState(false)

    return (
        <div className='fixed w-full bg-white z-10 shadow-sm'>
            <div className='py-4 border-b-[1px]'>
                <Container>
                    <div className='flex flex-row  items-center justify-between gap-3 md:gap-0'>
                        {/* Logo */}
                        <Link to='/' className='flex items-center  text-red-600'>
                            <h3 className='text-2xl font-bold italic'>A</h3>
                            <h3 className='font-bold text-xl '>airbnb</h3>
                        </Link>
                        <Link className='text-center font-bold text-red-600'>Stays</Link>
                        {/* Dropdown Menu */}
                        <div className='relative'>
                            <div className='flex flex-row items-center gap-3'>
                                {/* Become A Host btn */}
                                <div className='hidden md:block'>
                                    {/* {!user && (
                                        <button
                                            disabled={!user}
                                            className='disabled:cursor-not-allowed cursor-pointer hover:bg-neutral-100 py-3 px-4 text-sm font-semibold rounded-full  transition'
                                        >
                                            Host your home
                                        </button>
                                    )} */}
                                </div>
                                {/* Dropdown btn */}
                                <div
                                    onClick={() => setIsOpen(!isOpen)}
                                    className='p-4 md:py-1 md:px-2 border-[1px] border-neutral-200 flex flex-row items-center gap-3 rounded-full cursor-pointer hover:shadow-md transition'
                                >
                                    <AiOutlineMenu />
                                    <div className='hidden md:block'>
                                        {/* Avatar */}
                                        <img
                                            className='rounded-full'
                                            referrerPolicy='no-referrer'
                                            // src={user && user.photoURL ? user.photoURL : avatarImg}
                                            src={avatarImg}
                                            alt='profile'
                                            height='30'
                                            width='30'
                                        />
                                    </div>

                                </div>
                            </div>
                            {isOpen && (
                                <div className='absolute rounded-xl shadow-md w-[40vw] md:w-[10vw] bg-white overflow-hidden right-0 top-12 text-sm'>
                                    <div className='flex flex-col cursor-pointer'>
                                        <Link
                                            to='/'
                                            className='block md:hidden px-4 py-3 hover:bg-neutral-100 transition font-semibold'
                                        >
                                            Home
                                        </Link>


                                        <>
                                            <Link
                                                to='/'
                                                className='px-4 py-3 hover:bg-neutral-100 transition font-semibold'
                                            >
                                                sign in
                                            </Link>
                                            <Link
                                                to='/'
                                                className='px-4 py-3 hover:bg-neutral-100 transition font-semibold'
                                            >
                                                Sign Up
                                            </Link>
                                        </>

                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                </Container>
            </div>
        </div>
    )
}

export default Navbar

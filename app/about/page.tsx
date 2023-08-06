import React from 'react'

const About = () => {
    return (
        <section className='w-screen mt-12 '>
            <div className='flex xs:flex-col justify-start items-center flex-col gap-6'>
                <h5 className='font-bold text-4xl '>Activities</h5>
                <p className='text-2xl uppercase font-light'>EduHub Institute Of Technology</p>
                <p className='w-[100%] text-center text-[22px] mb-4 font-cursive'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed facilis magni recusandae ratione! Iste, illo?</p>
            </div>
            <div className='flex justify-center items-center gap-6'>
                <img className='md:w-1/4 xs:3/4 shadow-lg hover:shadow-2xl' src='https://cdn.pixabay.com/photo/2018/01/17/07/06/laptop-3087585_1280.jpg' alt='1' />
                <img className='md:w-1/4 xs:3/4 shadow-lg hover:shadow-2xl' src="https://cdn.pixabay.com/photo/2018/06/27/07/45/college-student-3500990_1280.jpg" alt="2" />
                <img className='md:w-1/4 xs:3/4 shadow-lg hover:shadow-2xl' src="https://cdn.pixabay.com/photo/2015/10/29/09/46/books-1012088_1280.jpg" alt="3" />
            </div>
            <div className='flex justify-center items-center mt-4'>
                <button className='border-red-500 border-2 p-2 rounded-md '>View More</button>

            </div>
        </section>
    )
}

export default About
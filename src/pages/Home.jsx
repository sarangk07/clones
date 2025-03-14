import React from 'react'

function Home() {
  return (
    <div className='bg-neutral-800 text-neutral-100 flex flex-col w-full h-fit' >
        <section className='flex  justify-center lg:justify-end h-[5vh] my-3 mx-5'>
            <h1 className='moo-lah-lah-regular text-4xl text-lime-200'>ReZto</h1>
        </section>
        <section className='bg-neutral-800 text-neutral-100 flex flex-col items-center justify-center w-full'>
           <div className='relative  w-full h-[100vh]  flex flex-col  justify-center items-center'>
                <img className='absolute  w-full h-full object-cover' src="https://assets.nicepagecdn.com/11a8ddce/4267640/images/dietary-menu-healthy-vegan-salad-vegetables-broccoli-mushrooms-spinach-quinoa-bowl-flat-lay-top-view.jpg" alt="" />
                <div className='relative lg:pl-24 space-y-5 lg:space-y-6 flex flex-col justify-center items-center lg:items-start lg:justify-start w-full '>
                  <div className='w-[14rem] h-[14rem] bg-lime-500 rounded-full flex flex-col space-y-6 justify-center items-center'>
                    <p className='text-6xl font-serif font-bold text-neutral-950'>40%</p> 
                    <p className='text-2xl font-bold text-neutral-950 text-center'>BUSINESS <br /> LUNCH</p>  
                  </div>
                  <p className='text-xl uppercase font-bold text-center'> REZTO</p>
                  <h3 className='text-5xl lg:text-7xl font-bold  text-center lg:text-left w-[70%]  lg:w-[40%]'>
                    Where every ingredient tells a story 
                  </h3>
                  <button className='bg-yellow-500 w-[12rem] h-[3rem] rounded-full font-bold'>Check</button>
                </div>
           </div>
           <div className='my-8 text-2xl font-sans font-bold flex flex-col justify-center items-center lg:flex-row lg:space-x-8 lg:space-y-0 space-y-8 w-full'>
              <div className='relative border-b-2 border-r-2 border-neutral-600 w-[20rem] h-[15rem] lg:h-[22rem] lg:w-[22rem] rounded-[4rem]  flex justify-center items-center'>
                <img className='absolute opacity-90 object-cover w-full h-full rounded-[4rem]' src="https://assets.nicepagecdn.com/11a8ddce/4267640/images/dietary-menu-healthy-vegan-salad-vegetables-broccoli-mushrooms-spinach-quinoa-bowl-flat-lay-top-view.jpg" alt="" />
                <p className='relative'>Non Veg</p>
              </div>
              <div className='relative border-b-2 border-r-2 border-neutral-600 w-[20rem] h-[15rem] lg:h-[22rem] lg:w-[22rem]  rounded-[4rem]  flex justify-center items-center'>
                <img className='absolute opacity-80 object-cover w-full h-full rounded-[4rem]' src="https://assets.nicepagecdn.com/11a8ddce/4267640/images/pexels-photo-3850972.jpeg" alt="" />
                <p className='relative'>Veg</p>
              </div>
              <div className='relative border-b-2 border-r-2 border-neutral-600 w-[20rem] h-[15rem] lg:h-[22rem] lg:w-[22rem] rounded-[4rem]  flex justify-center items-center'>
                <img className='absolute opacity-90 object-cover w-full h-full rounded-[4rem]' src="	https://assets.nicepagecdn.com/11a8ddce/4267640/images/italian-spaghetti-with-tomato-sauce-pan.jpg" alt="" />
                <p className='relative'>Arabic</p>
              </div>
           </div>

           <div className='flex flex-col lg:flex-row justify-center w-[80%] items-center my-5'>
            <div className='flex flex-col space-y-4 justify-center items-center text-wrap p-5'>
              <h2 className='text-3xl font-bold'>₹ 320</h2>
              <h3 className='text-xl font-bold'>SALAD WITH CHICKEN</h3>
              <p className='px-5 italic text-lg text-center'>" fresh and nutritious dish combining tender, seasoned chicken with crisp greens and vegetables. It often includes ingredients like lettuce, tomatoes, cucumbers, and avocados, topped with a flavorful dressing. This protein-packed salad is light yet satisfying, making it a perfect meal for a healthy diet "</p>
            </div>
            <img className='w-[20rem] h-[20rem] object-cover lg:w-[30rem] lg:h-[32rem] rounded-2xl' src="https://assets.nicepagecdn.com/11a8ddce/4267640/images/fresh-salad-with-turkey-eggs-vegetables.jpg" alt="" />
           </div>


          <div className='my-5 flex flex-col items-center w-full'>
            <div className='text-2xl font-semibold'>View Our Menu</div>

            <div className='grid grid-cols-1 lg:grid-cols-2  w-[85%] gap-y-5  place-items-center '>
              
              <div className='w-[23rem] lg:w-[30rem] lg:h-[35rem]  h-[25rem] text-center  space-y-2 my-5'>
                <img className='w-full rounded-[3rem] h-[80%] object-cover' src="https://assets.nicepagecdn.com/11a8ddce/4267640/images/delicious-pizza-isolated-white.jpg" alt="" />
                <h3 className='text-xl font-bold uppercase font-mono'>hot pizza</h3>
                <button className='h-[3rem] w-[8rem] rounded-full font-bold text-neutral-900 bg-lime-500'>More</button>
              </div>

              <div className='w-[23rem] lg:w-[30rem] lg:h-[35rem]  h-[25rem]] text-center  space-y-2 my-5'>
                <img className='w-full rounded-[3rem] h-[80%] object-cover' src="https://assets.nicepagecdn.com/11a8ddce/4267640/images/high-angle-shot-vegetable-salad-white-bowl.jpg" alt="" />
                <h3 className='text-xl font-bold uppercase font-mono'>salads</h3>
                <button className='h-[3rem] w-[8rem] rounded-full font-bold text-neutral-900 bg-lime-500'>More</button>
              </div>

              <div className='w-[23rem] lg:w-[30rem] lg:h-[35rem]  h-[25rem]  text-center  space-y-2 my-5'>
                <img className='w-full rounded-[3rem] h-[80%] object-cover' src="https://assets.nicepagecdn.com/11a8ddce/4267640/images/pexels-photo-3681641.jpeg" alt="" />
                <h3 className='text-xl font-bold uppercase font-mono'>dessert</h3>
                <button className='h-[3rem] w-[8rem] rounded-full font-bold text-neutral-900 bg-lime-500'>More</button>
              </div>

              <div className='w-[23rem] lg:w-[30rem] lg:h-[35rem]  h-[25rem] text-center space-y-2 my-5'>
                <img className='w-full rounded-[3rem] h-[80%] object-cover' src="https://assets.nicepagecdn.com/11a8ddce/4267640/images/pexels-photo-3939602.jpeg" alt="" />
                <h3 className='text-xl font-bold uppercase font-mono'>drinks</h3>
                <button className='h-[3rem] w-[8rem] rounded-full font-bold text-neutral-900 bg-lime-500'>More</button>
              </div>
              
            </div>
          </div>

          <div className='relative overflow-x-hidden space-y-8 flex flex-col justify-center items-center lg:items-start w-full  h-[40rem] lg:h-[35rem] pb-10'>
            <img className='absolute w-full h-full object-cover' src="https://assets.nicepagecdn.com/11a8ddce/4267640/images/vegetables-set-left-black-slate.jpg" alt="" />
            <div className='relative lg:ml-10 bg-lime-500 h-[12rem] w-[12rem] lg:h-[15rem] lg:w-[15rem] flex flex-col justify-center items-center  rounded-full space-y-3'>
              <h3 className='text-6xl font-extrabold '>40%</h3>
              <p className='text-xl text-center font-bold capitalize'>
                business <br /> lunch
              </p>

            </div>
            <h2 className='relative lg:ml-10 text-2xl  lg:text-5xl font-bold'>Keep up to date with us</h2>
            {/* <p className='relative lg:ml-10 text-xl'>.</p> */}
            <div className='flex flex-col lg:flex-row lg:justify-start justify-center items-center lg:ml-10 w-full space-y-5 lg:space-y-0 lg:space-x-3'>
              <input className='relative bg-neutral-50 text-neutral-900  rounded-[1rem]  lg:w-[30%] h-[3rem] w-[70%]' type="text" />
              <button className='relative  bg-lime-500 rounded-[1rem]  text-xl uppercase h-[3rem] w-[70%] lg:w-[10%]' >submit</button>
            </div>
          </div>

        </section>

        <footer className='h-fit w-full flex flex-col lg:flex-row justify-around bg-zinc-800 '>
          <div className='flex flex-col justify-center items-center   h-[15rem] w-full'>
            <div className='bg-lime-500 p-3 rounded-full'>
              <img className='w-[2.5rem]' src="data:image/png;base64,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" alt="" />
            </div>
            <h3 className='text-xl uppercase font-bold'>
              Chart to us
            </h3>
            <p className='font-bold'>
              Our friendly team is here to help.
            </p>
            <p className='text-yellow-400 font-semibold'>gamil.1@email.com</p>
          </div>

          <div className='flex flex-col justify-center items-center   h-[15rem] w-full'>
          <div className='bg-lime-500 p-3 rounded-full'>
              <img className='w-[2.5rem]' src="data:image/png;base64,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" alt="" />
            </div>
            <h3 className='text-xl uppercase font-bold'>
              Office
            </h3>
            <p className='font-bold'>
              Come say hello at our office HQ.
            </p>
            <p className='text-yellow-400 font-semibold'>Beach Road,Vayalappara,Kannur,Kerala</p>
          </div>

          <div className='flex flex-col justify-center items-center   h-[15rem] w-full'>
          <div className='bg-lime-500 p-3 rounded-full'>
              <img className='w-[2.5rem]' src="data:image/png;base64,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" alt="" />
            </div>
            <h3 className='text-xl uppercase font-bold'>
              Phone
            </h3>
            <p className='font-bold'>
              Mon-sat from 1pm to 12am
            </p>
            <p className='text-yellow-400 font-semibold'>+91 886699999</p>
          </div>
        </footer>
    </div>
  )
}

export default Home

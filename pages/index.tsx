import SwiperComponent from '../components/ImageSlider'



export default function IndexPage() {
	return (
		<>
			<div className="flex flex-col md:flex-row container">
			<div className="w-full md:w-1/2 flex items-center justify-center">
				<div className="p-8">
				<h1 className="text-6xl font-extrabold"><span className='text-red-700'>Turkish</span> <span className='text-gray-800'>Doner <br /> Kebab</span> <span className='text-red-700'>Distributor</span> </h1>
				<br />
				<p className="text-gray-600">We will deliver your Doner within 30 minutes in your town. <br /> Halal Certified, Lamb Doners, Lamb and Beef mix Doner Gluten free Doner</p>
				<div className='md:flex items-center md:mt-8 md:-ml-2'>
				<img src="./image2.png" alt=""className="mx-auto -mb-3 md:mb-0  mt-5 md:-ml-12" />
				<span className='-mt-6'>
					<span className='md:-ml-3'>
					<span className="text-xl font-black">#1 FOOD SERVICE</span>
					<span className='text-xs'> (Halal Certified)</span>
					<br />
					<span className="text-lg font-bold text-red-700 ">Certificate of Incorporation</span>
					<br />
					<span className='text-xs font-bold '>NZBN: 942366739202488</span>
					</span>
				</span>
				<div className=''>
					<img src="./halal.png" alt=""className="md:ml-10 md:mb-5 mx-auto mt-10 md:mt-0 -mb-7" />
				</div>
				</div>
				</div> 
			</div>
			<div className="w-full md:w-1/2 flex items-center justify-center">
				<img src="/image1.png" alt="Image" className="max-h-full max-w-full" />
			</div>
			</div>
			<hr className='mx-10'/>
			<div className="md:container md:mt-8">
			<div className='block md:flex'>
				<div className='mx-auto md:mx-0 flex md:gap-40'>	
				<div className='flex my-5 md:my-0'>
					<img src="./box1.png" alt=""  className='w-10 h-10 ml-4 md:w-16 md:h-16'/>
					<span className='my-auto'>
					<h1 className='ml-3'>Free Shipping</h1>
					<p className='text-xs ml-3 text-slate-600'>Orders over $140</p>
					</span>
				</div>
				<div className='flex my-5 md:my-0'>
					<img src="./box2.png" alt="" className='w-10 h-10 ml-4 md:w-16 md:h-16'/>
					<span className='my-auto'>
					<h1 className='ml-3'>Quick Payment</h1>
					<p className='text-xs ml-3 text-slate-600'>100% secure payment</p>
					</span>
				</div>
			</div>
			<div className='block md:flex'>
				<div className='mx-auto md:mx-0 flex md:gap-40'>
				<div className='flex my-5 md:my-0 md:ml-36'>
					<img src="./box3.png" alt="" className='w-10 h-10 ml-4 md:w-16 md:h-16'/>
					<span className='my-auto'>
					<h1 className='ml-3'>Special Promo</h1>
					<p className='text-xs ml-3 text-slate-600'>Get special promo</p>
					</span>
				</div>
				<div className='flex my-5 md:my-0'>
					<img src="./box4.png" alt="" className='w-10 h-10 ml-4 md:w-16 md:h-16'/>
					<span className='my-auto'>
					<h1 className='ml-3'>24/7 Support</h1>
					<p className='text-xs ml-3 text-slate-600'>Ready Support</p>
					</span>
				</div>
				</div>
			</div>
			</div>
			</div>
			<hr className='mx-10 md:my-6'/>
			<div className="my-28 flex flex-col md:flex-row container">
				<div className="w-full md:w-1/2 flex items-center justify-center">
					<img src="/image3.png" alt="Image" className="max-h-full max-w-full" />
				</div>
				<div className="w-full md:w-1/2 flex mt-14 md:ml-28">
						<div className="p-8">
							 <p className='text-red-700 font-bold'>Our Brand</p> 
							 <br />
							 <h1 className='text-3xl md:text-6xl font-bold'>The More Healthy <br /> Food The Better</h1>
							 <br />
							 <br />
							 <div className='flex items-center my-5'>
							<img src="check.png" alt="" className='mr-6' />
							 <p className='font-medium'>Halal Certified</p>
							 </div>
							<div className='flex items-center my-5'>
							<img src="check.png" alt="" className='mr-6' />
							 <p className='font-medium'>Lamb Doners</p>
							 </div>
							 <div className='flex items-center my-5'>
							<img src="check.png" alt="" className='mr-6' />
							 <p className='font-medium'>Lamb and Beef mix Doner</p>
							 </div>
							 <div className='flex items-center my-5'>
							<img src="check.png" alt="" className='mr-6' />
							 <p className='font-medium'>Gluten free Doner</p>
							 </div>
							 <div className='flex items-center my-5'>
							<img src="check.png" alt="" className='mr-6' />
							 <p className='font-medium'>The Best Meat Dish In Town</p>
							 </div>
						</div> 
				</div>
			</div>
		<div className='my-6'>
		<div className='flex justify-center items-center'>
			<p className='text-red-700 font-bold'>-Popular Delivery-</p>
			</div>
			<div className='flex justify-center items-center'>
			<p className='text-xl md:text-6xl font-extrabold mt-6'>Trending food</p>
			</div>
		</div>
			<div className=" mt-20">
				<center>
      			<SwiperComponent />
				</center>
    		</div>
			<div className="flex flex-col md:flex-row container">
			<div className="w-full md:w-1/2 flex">
				<div className="p-8 md:mt-11">
					<p className='text-red-700 font-bold'>Customer Serviced</p> 
					 <br />
					<p className='text-3xl md:text-6xl font-bold'>Happy Number of <br /> Happy Customers</p>
				<div className='md:flex  md:gap-10'>
				<div className=' mt-16'>
					<p className='text-red-700 text-4xl font-bold md:mb-3 md:ml-6'>9,500</p>
					<p>Customers Serviced</p>
				</div>
				<div className='justify-center mt-16'>
					<p className='text-red-700 text-4xl font-bold md:mb-3 md:ml-8'>500</p>
					<p>Positive Feedback</p>
				</div>
				<div className=' mt-16'>
					<p className='text-red-700 text-4xl font-bold md:mb-3 md:ml-3'>400</p>
					<p>Official Store</p>
				</div>
				</div> 
			</div>
			</div>
			<div className="w-full md:w-1/2 flex items-center justify-center">
				<img src="/image4.png" alt="Image" className="max-h-full max-w-full" />
			</div>
			</div>
		</>
	)
}

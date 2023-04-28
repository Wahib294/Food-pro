import ImageSlider from '../components/ImageSlider'

const images = [
	'/image1.png',
	'/image2.png',
]

export default function IndexPage() {
	return (
		<>
			<div className="flex flex-col md:flex-row container">
			<div className="w-full md:w-1/2 flex items-center justify-center">
				<div className="p-8">
				<h1 className="text-6xl font-bold"><span className='text-red-700'>Turkish</span> <span className='text-gray-800'>Doner <br /> Kebab</span> <span className='text-red-700'>Distributor</span> </h1>
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
			<div>
				<div className="container flex flex-col">
					</div>
			</div>

		{/* <div className="container w-screen">
			<ImageSlider images={images} />
		</div> */}
		</>
		
	)
}

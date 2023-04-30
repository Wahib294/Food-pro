import SwiperComponent from '../components/ImageSlider'
import Link from 'next/link'
import { useEffect, useState } from 'react';

export default function IndexPage() {
	const [id1, setId1] = useState('');
	const [id2, setId2] = useState('contact');

  useEffect(() => {
    const screenWidth = window.innerWidth;
	console.log(screenWidth);
    const iid2 = screenWidth < 768 ? 'contact' : '';
	const iid1 = screenWidth < 768 ? '' : 'contact';
    setId1(iid1);
	setId2(iid2);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const message = form.message.value;
    const mailtoLink = `mailto:example@example.com?subject=Contact%20Form&body=${message}%0A%0AFrom:%20${name}%0AEmail:%20${email}`;
    window.location.href = mailtoLink;
  };
	return (
		<>
			<div className="flex flex-col md:flex-row container" id='home'>
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
			<div className="md:container justify-center items-center flex md:mt-8">
			<div className='block md:flex'>
				<div className='mx-auto md:mx-0 flex md:gap-40 md:my-12'>	
				<div className='flex items-center my-5 md:my-0'>
					<img src="./box1.png" alt=""  className='w-10 h-10 ml-4 md:w-12 md:h-12'/>
					<span className='my-auto'>
					<h1 className='ml-3'>Free Shipping</h1>
					<p className='text-xs ml-3 text-slate-600'>Orders over $140</p>
					</span>
				</div>
				<div className='flex items-center my-5 md:my-0'>
					<img src="./box2.png" alt="" className='w-10 h-10 ml-6 md:w-12 md:h-12'/>
					<span className='my-auto'>
					<h1 className='ml-3'>Quick Payment</h1>
					<p className='text-xs ml-3 text-slate-600'>100% secure payment</p>
					</span>
				</div>
			</div>
			<div className='block md:flex'>
				<div className='mx-auto md:mx-0 flex gap-5 md:gap-40'>
				<div className='flex items-center my-5 md:my-0 md:ml-36'>
					<img src="./box3.png" alt="" className='w-10 h-10 ml-4 md:w-12 md:h-12'/>
					<span className='my-auto'>
					<h1 className='ml-3'>Special Promo</h1>
					<p className='text-xs ml-3 text-slate-600'>Get special promo</p>
					</span>
				</div>
				<div className='flex my-5 md:my-0 items-center'>
					<img src="./box4.png" alt="" className='w-10 h-10 md:w-12 md:h-12'/>
					<span className='my-auto'>
					<h1 className='ml-3'>24/7 Support</h1>
					<p className='text-xs ml-3 text-slate-600'>Ready Support</p>
					</span>
				</div>
				</div>
			</div>
			</div>
			</div>
			<hr className='mx-10 md:my-6' id='brands'/>
			<div className="my-28 flex flex-col md:flex-row container">
				<div className="w-full md:w-1/2 flex items-center justify-center">
					<img src="/image3.png" alt="Image" className="max-h-full max-w-full" />
				</div>
				<div className="w-full md:w-1/2 flex mt-14 md:ml-28" id='brand2'>
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
		<div className='my-6 md:mt-[13rem]'>
		<div className='flex justify-center items-center'>
			<p className='text-red-700 font-bold'>-Popular Delivery-</p>
			</div>
			<div className='flex justify-center items-center'>
			<p className='text-xl md:text-6xl font-extrabold mt-6'>Trending food</p>
			</div>
		</div>
			<div className=" mt-10 md:mt-20">
				<center>
      			<SwiperComponent/>
				</center>
    		</div>
			<div className='h-36' id='about-us'></div>
			<div className="flex flex-col md:flex-row container" id='about'>
			<div className="w-full md:w-1/2 flex">
				<div className="p-8 md:mt-11">
					<p className='text-red-700 font-bold'>Customer Serviced</p> 
					 <br />
					<p className='text-3xl md:text-6xl font-bold'>Happy Number of <br/> Happy Customers</p>
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
			<div className='container my-24 md:mt-[11rem]'>
				<center>
					<h1 className='text-5xl font-bold'>Foodservice Suppliers</h1>
					<p className='my-5'>Through strong patnership and supply agreements with over 100 leading <br /> food service suppliers.</p>
				</center>
				<div className='flex flex-col md:flex-row items-center justify-center md:container gap-10 my-24' id={id1}>
					<img  className='my-6 md:my-0' src="./log.png" alt="" />
					<img  className='my-6 md:my-0' src="./log.png" alt="" />
					<img  className='my-6 md:my-0' src="./log.png" alt="" />
					<img  className='my-6 md:my-0' src="./log.png" alt="" />
				</div>
			</div>
			<div className='bg-red-700 h-max md:h-96 w-fit md:w-full pb-16' id={id2}>
				<div className='md:flex container'>
				<div className='text-white font-semibold pt-20 w-fit'>
					<p className=''> Contact Us </p>
					<h1 className='text-6xl font-bold mt-10 w-fit'>Feel Free To <br className='hidden md:block'/> Contact Any Time</h1>
				</div>
				<div className='md:flex pt-20 md:ml-72'>
					<form action="" className="" onSubmit={handleSubmit}>
					<div className="grid grid-cols-1 gap-6 md:grid-cols-2">
						<div className="flex flex-col">
						<input type="text" placeholder='Name' className='h-12 rounded-md placehold' id="name" />
						</div>
						<div className="flex flex-col">
						<input type="text" placeholder='Email' className='h-12 rounded-md placehold' id="email" />
						</div>
					</div>
					<div className="mt-6">
						<textarea placeholder='Message type here' className='h-32 w-full rounded-md placeholdd' id="message" />
					</div>
					<div className='flex justify-end mt-3'>
					<input type="submit" value='Send' className=' w-28 h-12 -auto rounded-md bg-zinc-800 text-white font-semibold' />
					</div>
					</form>
					</div>
				</div>
			</div>
			<div className='bg-zinc-800 h-max md:h-96  w-full pb-16'>
				<div className='container flex flex-col pt-10 md:flex-row md:pt-24 md:h-fit gap-14'>
					<div className='md:w-1/6 flex justify-center'>
						<img src="./Footer.png" alt="" className='my-auto'/>
					</div>
					<div className='flex w-32 md:w-1/6 md:justify-center mx-auto'>
					<div className='flex flex-col gap-3 md:justify-center text-white '>
						<p className='font-bold'>Company</p>
						<Link href="/#home">Home</Link>
						<Link href="/#brands">Our Brand</Link>
						<Link href="/#about-us">About Us</Link>
						<Link href="/#contact">Contact Us</Link>
					</div>
					</div>
					<div className='flex w-32 md:w-1/6 md:justify-center mx-auto'>
					<div className='flex flex-col gap-3 justify-center md:mb-28  text-white '>
						<p className='font-bold'>Our Product</p>
						<p>Donners </p>
					</div>
					</div>
					<div className='flex md:w-1/6 md:justify-center mx-auto'>
					<div className='flex flex-col gap-3 justify-center md:mb-20  text-white '>
						<p className='font-bold'>Terms & policies</p>
						<p>Terms of Service</p>
						<p>Privacy Policy</p>
					</div>
					</div>
					<div className='flex w-32 md:w-1/6 md:justify-center mx-auto'>
					<div className='flex flex-col gap-3 justify-center md:mb-20  text-white '>
						<p className='font-bold'>Contact</p>
						<p>00642102551973</p>
						<p>ialquqa@gmail.com</p>
					</div>
					</div>
				</div>
				<div className='flex items-end justify-center h-24'> 
				<p className='flex items-end justify-center text-white h-full'>© Turkish Kebabs 2023 - All Rights Reserved</p>
				</div>
			</div>
		</>
	)
}

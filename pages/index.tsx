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
    const mailtoLink = `mailto:ialquqa@gmail.com?subject=Contact%20Form&body=${message}%0A%0AFrom:%20${name}%0AEmail:%20${email}`;
    window.location.href = mailtoLink;
  };
	return (
		<>
			<div className="flex flex-col lg:flex-row container" id="home">
			<div className="w-full lg:w-1/2 flex items-center justify-center">
				<div className="p-8">
				<h1 className="text-6xl lg:text-[68px] lg:leading-[80px] font-extrabold" id='heading'><span className='text-red-700'>Turkish</span> <span className='text-gray-800'>Doner <br /> Kebab</span> <span className='text-red-700'>Distributor</span> </h1>
				<br />
				<p className="text-gray-600">We will deliver your Doner within 30 minutes in your town. <br /> Halal Certified, Lamb Doners, Lamb and Beef mix Doner Gluten free Doner</p>
				<Link href={"/#trend"} scroll={false}><div className='mt-10 bg-red-700 px-9 py-5 font-semibold rounded-3xl text-white shadow-red-700 shadow-lg  hover:bg-red-600 hover:cursor-pointer w-fit'> TRENDING FOOD </div></Link>
				<div className='lg:flex flex-col lg:flex-row items-center lg:mt-8 lg:-ml-2 mt-20 '>
				<div className='flex items-center mx-auto mt-8 lg:pt-4  lg:-ml-2 bg-zinc-300 bg-opacity-20 rounded-xl' >
				<img src="./image2.png" alt=""className="-ml-7 -mb-3 lg:-mb-10 mt-5 lg:-mt-2 lg:-ml-6 lg:-mr-5" />
				<span className='-mt-6 -ml-5 lg:ml-0'>
					<span className='lg:-ml-3'>
					<span className="text-xl font-black lg:ml-3">#1 FOOD SERVICE</span>
					<span className='text-xs pr-10'> (Halal Certified)</span>
					<br />
					<span className="text-lg font-bold text-red-700 ">Certificate of Incorporation</span>
					<br />
					<span className='text-xs font-bold '>NZBN: 942366739202488</span>
					</span>
				</span>
				</div>
				<div className=''>
					<img src="./halal.png" width={210} height={210}	alt=""className=" lg:mb-8 mx-auto mt-10 -mb-7 lg:mt-14 lg:-mr-12" />
				</div>
				</div>
				</div> 
			</div>
			<div className="w-full lg:w-1/2 flex items-center justify-center">
				<img src="/image1.png" alt="Image" className="max-h-full max-w-full" />
			</div>
			</div>
			<hr className='mx-10'/>
			<div className="lg:container justify-center items-center flex lg:mt-8">
			<div className='block lg:flex'>
				<div className='mx-auto lg:mx-0 flex lg:gap-40 lg:my-12'>	
				<div className='flex items-center my-5 lg:my-0'>
					<img src="./box1.png" alt=""  className='w-10 h-10 ml-4 lg:w-12 lg:h-12'/>
					<span className='my-auto'>
					<h1 className='ml-3'>Free Shipping</h1>
					<p className='text-xs ml-3 text-slate-600'>Orders over $140</p>
					</span>
				</div>
				<div className='flex items-center my-5 lg:my-0'>
					<img src="./box2.png" alt="" className='w-10 h-10 ml-6 lg:w-12 lg:h-12'/>
					<span className='my-auto'>
					<h1 className='ml-3'>Quick Payment</h1>
					<p className='text-xs ml-3 text-slate-600'>100% secure payment</p>
					</span>
				</div>
			</div>
			<div className='block lg:flex'>
				<div className='mx-auto lg:mx-0 flex gap-5 lg:gap-40'>
				<div className='flex items-center my-5 lg:my-0 lg:ml-36'>
					<img src="./box3.png" alt="" className='w-10 h-10 ml-4 lg:w-12 lg:h-12'/>
					<span className='my-auto'>
					<h1 className='ml-3'>Special Promo</h1>
					<p className='text-xs ml-3 text-slate-600'>Get special promo</p>
					</span>
				</div>
				<div className='flex my-5 lg:my-0 items-center'>
					<img src="./box4.png" alt="" className='w-10 h-10 lg:w-12 lg:h-12'/>
					<span className='my-auto'>
					<h1 className='ml-3'>24/7 Support</h1>
					<p className='text-xs ml-3 text-slate-600'>Ready Support</p>
					</span>
				</div>
				</div>
			</div>
			</div>
			</div>
			<hr className='mx-10 lg:my-6' id='brands'/>
			<div className="my-28 flex flex-col lg:flex-row container">
				<div className="w-full lg:w-1/2 flex items-center justify-center">
					<img src="/image3.png" alt="Image" className="max-h-full max-w-full" />
				</div>
				<div className="w-full lg:w-1/2 flex mt-14 lg:ml-28 justify-center lg:justify-start" id='brand2'>
						<div className="p-8 ">
							 <p className='text-red-700 font-bold'>Our Brand</p> 
							 <br />
							 <h1 className='text-3xl lg:text-6xl font-bold'>The More Healthy <br /> Food The Better</h1>
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
							 <p className='font-medium' id='trend'>The Best Meat Dish In Town</p>
							 </div>
						</div> 
				</div>
			</div>
		<div className='my-6 lg:mt-[13rem]'>
		<div className='flex justify-center items-center'>
			<p className='text-red-700 font-bold'>-Popular Delivery-</p>
			</div>
			<div className='flex justify-center items-center'>
			<p className='text-xl lg:text-6xl font-extrabold mt-6'>Trending food</p>
			</div>
		</div>
			<div className=" mt-10 lg:mt-20">
				<center>
      			<SwiperComponent/>
				</center>
    		</div>
			<div className='h-10 lg:h-36' id='about-us'></div>
			<div className="flex flex-col lg:flex-row container" id='about'>
			<div className="w-full lg:w-1/2 flex justify-center lg:justify-start">
				<div className="p-8 lg:mt-11">
					<p className='text-red-700 font-bold'>About Us</p> 
					<br />
					<p>This is to certify that TURKISH KEBABS DISTRIBUTORS LIMITED <br /> was incorporated under the Companies <br />
					Act 1993 on the 14th day of July 2011.</p>
					 <br />
					<p className='text-3xl lg:text-6xl font-bold'>Happy Number of <br/> Happy Customers</p>
				<div className='lg:flex  lg:gap-10'>
				<div className=' mt-16'>
					<p className='text-red-700 text-4xl font-bold lg:mb-3 lg:ml-6'>9,500</p>
					<p>Customers Serviced</p>
				</div>
				<div className='justify-center mt-16'>
					<p className='text-red-700 text-4xl font-bold lg:mb-3 lg:ml-8'>500</p>
					<p>Positive Feedback</p>
				</div>
				<div className=' mt-16'>
					<p className='text-red-700 text-4xl font-bold lg:mb-3 lg:ml-3'>400</p>
					<p>Official Store</p>
				</div>
				</div> 
			</div>
			</div>
			<div className="w-full lg:w-1/2 flex items-center justify-center mt-20 lg:mt-20">
				<img src="/image4.png" alt="Image" className="max-h-full max-w-full" />
			</div>
			</div>
			<div className='container my-24 lg:mt-[11rem]'>
				<center>
					<h1 className='text-5xl font-bold'>Foodservice Suppliers</h1>
					<p className='my-5'>Through our extensive network of over 100 leading food service suppliers, <br /> we ensure reliable and efficient supply agreements for our valued customers.</p>
				</center>
			</div>
			<div className='bg-red-700 h-max lg:h-96 w-full pb-16' id={id2}>
				<div className='lg:flex container'>
				<div className='text-white font-semibold pt-20 w-fit'>
					<p className=''> Contact Us </p>
					<h1 className='text-6xl font-bold mt-10 w-fit'>Feel Free To <br className='hidden lg:block'/> Contact Any Time</h1>
				</div>
				<div className='lg:flex pt-20 lg:ml-72'>
					<form action="" className="" onSubmit={handleSubmit}>
					<div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
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
					<input type="submit" value='Send' className=' w-28 h-12 rounded-md bg-zinc-800 text-white font-semibold' />
					</div>
					</form>
					</div>
				</div>
			</div>
			<div className='bg-zinc-800 h-max lg:h-96  w-full pb-16'>
				<div className='container flex flex-col pt-10 lg:flex-row lg:pt-24 lg:h-fit gap-14'>
					<div className='lg:w-1/6 flex justify-center lg:pb-12'>
						<img src="./Footer.png" alt="" className='my-auto'/>
					</div>
					<div className='flex w-32 lg:w-1/6 lg:justify-center mx-auto'>
					<div className='flex flex-col gap-3 text-white '>
						<p className='font-bold'>Company</p>
						<Link scroll={false}  href="/#home">Home</Link>
						<Link scroll={false}  href="/#brands">Our Brand</Link>
						<Link scroll={false}  href="/#about-us">About Us</Link>
						<Link scroll={false}  href="/#contact">Contact Us</Link>
					</div>
					</div>
					<div className='flex w-32 lg:w-1/6 lg:justify-center mx-auto'>
					<div className='flex flex-col gap-3 lg:mb-28  text-white '>
						<p className='font-bold'>Our Product</p>
						<p>Donners </p>
					</div>
					</div>
					<div className='flex lg:w-1/6 lg:justify-center mx-auto'>
					<div className='flex flex-col gap-3 lg:mb-20  text-white '>
						<p className='font-bold'>Terms & policies</p>
						<p>Terms of Service</p>
						<p>Privacy Policy</p>
					</div>
					</div>
					<div className='flex w-32 lg:w-1/6 lg:justify-center mx-auto'>
					<div className='flex flex-col gap-1 justify-center lg:mb-20  text-white '>
						<p className='font-bold'>Contact</p>
						<p>Mr Iyad</p>
						<Link href="tel:+642108115906">+64 210 811 5906</Link>
						<Link href="tel:+642102551973">+64 210 255 1973</Link>
						<Link href="mailto:ialquqa@gmail.com">ialquqa@gmail.com</Link>
					</div>
					</div>
				</div>
				<div className='flex items-end justify-center mt-10'> 
				<p className='flex items-end justify-center text-white h-full'>© Turkish Kebabs 2023 - All Rights Reserved</p>
				</div>
			</div>
		</>
	)
}

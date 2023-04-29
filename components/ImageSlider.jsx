import React from "react"
import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/css"
import "swiper/css/effect-coverflow"
import "swiper/css/pagination"
import "swiper/css/navigation"
import { useState } from "react"
import { FaArrowRight, FaArrowLeft } from "react-icons/fa"
import Slider from "react-slick"
import { EffectCoverflow, Pagination, Navigation } from "swiper"

const images = [
	"./slideshow1.png",
	"./slideshow2.png",
	"./slideshow3.png",
	"./slideshow4.png",
	"./slideshow5.png",
	"./slideshow6.png",
]

function SwiperComponent() {
	const NextArrow = ({ onClick }) => {
		return (
			<div className="arrow next" onClick={onClick}>
				<FaArrowRight />
			</div>
		)
	}

	const PrevArrow = ({ onClick }) => {
		return (
			<div className="arrow prev" onClick={onClick}>
				<FaArrowLeft />
			</div>
		)
	}

	const [imageIndex, setImageIndex] = useState(0)

	const settings = {
		infinite: true,
		lazyLoad: true,
		speed: 300,
		slidesToShow: 5,
		centerMode: true,
		centerPadding: 0,
		nextArrow: <NextArrow />,
		prevArrow: <PrevArrow />,
		autoplay: true,
		autoplaySpeed: 2000,
		pauseOnHover: true,
		dots: true,
		beforeChange: (current, next) => setImageIndex(next),
		responsive: [
			{
				breakpoint: 600,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
					infinite: true,
					dots: true,
				},
			},
		],
	}

	return (
		<div className="App">
			<Slider {...settings}>
				{images.map((img, idx) => (
					<div className={idx === imageIndex ? "slide activeSlide" : "slide"}>
						<img src={img} alt={img} />
					</div>
				))}
			</Slider>
		</div>
	)
}

export default SwiperComponent

import React, { Component } from "react"
import Slider from "react-slick"

export default class ImageSlider extends Component {
	render() {
		const { images } = this.props
		var settings = {
			dots: true,
			infinite: false,
			speed: 500,
			slidesToShow: 4,
			slidesToScroll: 4,
			initialSlide: 0,
			responsive: [
				{
					breakpoint: 1024,
					settings: {
						slidesToShow: 3,
						slidesToScroll: 3,
						infinite: true,
						dots: true,
					},
				},
				{
					breakpoint: 600,
					settings: {
						slidesToShow: 2,
						slidesToScroll: 2,
						initialSlide: 2,
					},
				},
				{
					breakpoint: 480,
					settings: {
						slidesToShow: 1,
						slidesToScroll: 1,
					},
				},
			],
		}
		return (
			<div>
				<Slider {...settings}>
					{images.map((image, index) => (
						<center>
							<div key={index} className="">
								<img
									src={image}
									width={200}
									height={300}
									alt={`Slide ${index}`}
								/>
							</div>
						</center>
					))}
				</Slider>
			</div>
		)
	}
}

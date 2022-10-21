import React from "react";
import Slider from "react-slick";
import { toValidCost } from "../../utils";

const OptionsCarousel = ({ options }) => {
	const settings = {
		dots: true,
		infinite: true,
		slidesToShow: 1,
		slidesToScroll: 1,
	};
	return (
		<Slider {...settings}>
			{options.map(({ name, img, price, address }, index) => (
				<div key={index}>
					<div className="font-semibold">{name}</div>
					<div className="mb-4 mt-2">
						{address}, +77054169958, {toValidCost(price)} ₸
					</div>
					<img src={img} className="h-40 object-cover w-full rounded-2xl" />
				</div>
			))}
		</Slider>
	);
};

export default OptionsCarousel;

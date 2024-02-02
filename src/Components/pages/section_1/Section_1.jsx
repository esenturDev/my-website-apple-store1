import scss from "./Section_1.module.scss";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
// import Slider from "react-slick";
const sectionCards = [
	{
		img: "https://www.istore.kg/media/mainpageslider/iPhone-15-Pro-PC.webp",
	},
	{
		img: "https://www.istore.kg/media/mainpageslider/Apple-Watch-Series-9.webp",
	},
	{
		img: "https://www.istore.kg/media/mainpageslider/Apple-Watch-Ultra-2-PC_ZXmtH5k.webp",
	},
	{
		img: "https://www.istore.kg/media/mainpageslider/iPhone-15-PC.webp",
	},
	{
		img: "https://www.istore.kg/media/mainpageslider/MacBook_Air_-_3.png",
	},
];
export const Section_1 = () => {
	const [sliderRef] = useKeenSlider({
		breakpoints: {
			"(min-width: 400px)": {
				slides: { perView: 1, spacing: 5 },
			},
			"(min-width: 700px)": {
				slides: { perView: 2, spacing: 5 },
			},
			"(min-width: 1000px)": {
				slides: { perView: 3, spacing: 10 },
			},
		},
		slides: { perView: 1 },
	});
	return (
		<section className={scss.section1}>
			<div className="container">
				<div className={scss.content}>
					<div ref={sliderRef} className="keen-slider">
						{sectionCards.map((item, index) => (
							<div key={index} className="keen-slider__slide number-slide1">
								<img src={item.img} alt="logo" />
							</div>
						))}
					</div>
				</div>
			</div>
		</section>
	);
};

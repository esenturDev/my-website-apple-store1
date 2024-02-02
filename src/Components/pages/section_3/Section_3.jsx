import scss from "./Section_3.module.scss";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";

const data = [
	{
		img: "https://www.istore.kg/media/main_page/14-pro-series_UPRWChp.webp",
	},
	{
		img: "https://www.istore.kg/media/main_page/15-pink.webp",
	},
	{
		img: "https://www.istore.kg/media/main_page/intro.webp",
	},
	{
		img: "https://www.istore.kg/media/main_page/ultra-2.webp",
	},
	{
		img: "https://www.istore.kg/media/main_page/macbook13.62_%D0%BA%D0%BE%D0%BF%D0%B8%D1%8F.webp",
	},
];

export const Section_3 = () => {
	const [sliderRef] = useKeenSlider({
		breakpoints: {
			"(min-width: 400px)": {
				slides: { perView: 2, spacing: 5 },
			},
			"(min-width: 700px)": {
				slides: { perView: 3, spacing: 5 },
			},
			"(min-width: 1000px)": {
				slides: { perView: 4, spacing: 10 },
			},
		},
		slides: { perView: 1 },
	});
	return (
		<section className={scss.section3}>
			<div className="container">
				<div className={scss.content}>
					<div ref={sliderRef} className="keen-slider">
						{data.map((item, index) => {
							return (
								<div key={index} className="keen-slider__slide number-slide1">
									<img src={item.img} alt="photos" />
								</div>
							);
						})}
					</div>
				</div>
			</div>
		</section>
	);
};

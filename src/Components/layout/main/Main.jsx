import { Routes } from "react-router-dom";
import { HomePages } from "../../pages/HomePages";
import scss from "./Main.module.scss";
import { Route } from "react-router-dom";
import { Iphone11 } from "../../pages/Iphone11";
import { Iphone12 } from "../../pages/Iphone12";
import { Iphone13 } from "../../pages/Iphone13";
import { Iphone14 } from "../../pages/Iphone14";
// import { NavLink } from "react-router-dom";
// import { useLocation } from "react-router-dom";
import { Iphone15 } from "../../pages/Iphone15";
import { Result } from "../result/Result";
import { Section_1 } from "../../pages/section_1/Section_1.jsx";

export const Main = () => {
	// const location = useLocation();
	// console.log(location.pathname);
	return (
		<main className={scss.main}>
			<Section_1 />
			<div className={scss.text}>
				<h1>Выберите свой iPhone</h1>
				<p>Сравните все модели iPhone</p>
				<a href="#">больше моделей</a>
			</div>
			<Result />
			<Routes>
				<Route path="/" element={<Iphone11 />} />
				<Route path="/Iphone12" element={<Iphone12 />} />
				<Route path="/Iphone13" element={<Iphone13 />} />
				<Route path="/Iphone14" element={<Iphone14 />} />
				<Route path="/Iphone15" element={<Iphone15 />} />
			</Routes>
			<HomePages />
		</main>
	);
};

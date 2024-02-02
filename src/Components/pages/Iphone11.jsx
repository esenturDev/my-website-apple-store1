import scss from "./Iphone11.module.scss";
import axios from "axios";
import { useEffect, useState } from "react";
import { Button } from "../ul/button/Button.jsx";
import { createPortal } from "react-dom";
import { Modal } from "../modal/Modal.jsx";

const url =
	"https://api.elchocrud.pro/api/v1/d7f1e8e46d93a7409dd64e8f0f17324f/iphone11";

export const Iphone11 = () => {
	const [modalGet, setModalGet] = useState(false);
	const [data, setData] = useState([]);
	const [selectedItem, setSelectedItem] = useState([]);

	const getIphone = async () => {
		try {
			const response = await axios.get(url);
			setData([...response.data]);
		} catch (error) {
			console.error(error);
		}
	};

	const openModal = (id) => {
		console.log(id);
		const selectedItem = data.find((item) => item._id === id);
		setSelectedItem([selectedItem]);
		setModalGet(true);
		console.log(selectedItem);
	};

	useEffect(() => {
		getIphone();
	}, []);

	return (
		<section className={scss.iphone11}>
			<div className="container">
				{/* <div className={scss.text}>
					<h1>Выберите свой iPhone</h1>
					<p>Сравните все модели iPhone</p>
					<a href="#">больше моделей</a>
				</div> */}
				<div className={scss.content}>
					{data.map((item) => (
						<div className={scss.cards} key={item.id}>
							<p>{item.title}</p>
							<img src={item.img} alt={item.title} />
							<Button onClick={() => openModal(item._id)}>Modal ka</Button>
						</div>
					))}
				</div>
				<div className={scss.divmodal}>
					{modalGet &&
						createPortal(
							<Modal setModalGet={setModalGet}>
								{selectedItem.map((item) => (
									<div key={item.id}>
										<h2>{item.title}</h2>
										<img className={scss.img} src={item.img} alt={item.title} />
										<p>{item.name}</p>
									</div>
								))}
							</Modal>,
							document.getElementById("modal")
						)}
				</div>
			</div>
		</section>
	);
};

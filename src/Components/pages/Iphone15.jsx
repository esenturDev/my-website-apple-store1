import scss from './Iphone15.module.scss';
import axios from 'axios';
import { useEffect } from 'react';
import {useState} from 'react';
import { Button } from "../ul/button/Button.jsx";
import { createPortal } from "react-dom";
import { Modal } from "../modal/Modal.jsx";
const url = 'https://api.elchocrud.pro/api/v1/dcaa5a16f81e7475e641ae79f07be5fa/iphone15';
export const Iphone15 = () => {
  const [modalGet, setModalGet] = useState(false);
  const [data, setData] = useState([]);
  const [selectedItem, setSelectedItem] = useState([]);
  // const [todo, setTodo] = useState([]);
  const getIphone = async () => {
    try {
      const response = await axios.get(url);
      setData([...response.data]);
      // filterArr()
    } catch (error) {
      console.error(error);
    }
  }
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
    <section className={scss.iphone15}>
      <div className='container'>
        <div className={scss.content}>
          {data.map((item, index) => (
            <div className={scss.cards} key={index}>
              <p>{item.title}</p>
              <img src={item.img} alt={item.title} />
              <Button onClick={() => openModal(item._id)}>Modal ka</Button>
            </div>
          ))}
          {modalGet &&
						createPortal(
							<Modal setModalGet={setModalGet}>
								{selectedItem.map((item) => (
									<div className={scss.div1} key={item.id}>
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
  )
}


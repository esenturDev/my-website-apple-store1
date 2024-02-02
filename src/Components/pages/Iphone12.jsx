
// import scss from './Iphone12.module.scss';
// import React, { useEffect, useState } from 'react';
// import axios from 'axios';

// const url = 'https://api.elchocrud.pro/api/v1/6b17b95ebf3f077bed6fada0fb95df8e/iphone';
// export const Iphone12 = () => {
//   const [data, setData] = useState([]);

//   const getIphone = async () => {
//     try {
//       const response = await axios.get(url);
//       setData(response.data);
//     } catch (error) {
//       console.error(error);
//     }
//   }

//   const filterArr = () => {
//     // Фильтруем первые 6 элементов массива данных
//     const filteredData = data.slice(6, 13);
//     setData(filteredData);
//   }

//   useEffect(() => {
//     getIphone();
//   }, []);

//   useEffect(() => {
//     // Вызываем filterArr при изменении данных
//     filterArr();
//   }, [data]);

//   return (
//     <section>
//       <div>
//         <div>
//           {data.map((item, index) => (
//             <div key={index}>
//               <p>{item.title}</p>
//               <img src={item.img} alt={item.title} />
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }

import { Button } from "../ul/button/Button.jsx";
import { createPortal } from "react-dom";
import { Modal } from "../modal/Modal.jsx";
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import scss from './Iphone12.module.scss';

const url = 'https://api.elchocrud.pro/api/v1/92bcbf3a2ee5b4dcc42f922ff8e2626f/iphone12';

export const Iphone12 = () => {
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
    <section className={scss.iphone12}>
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
  );
}

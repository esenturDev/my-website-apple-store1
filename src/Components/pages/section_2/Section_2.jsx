import scss from "./Section_2.module.scss";
export const Section_2 = () => {
	return (
		<section className={scss.section2}>
			<div className='container'>
				<div className={scss.content}>
					{/* <img
						src="https://images0.persgroep.net/rcs/j11cyEwYwgdUKDYHDKyruCfnPNY/diocontent/175863753/_fitwidth/694/?appId=21791a8992982cd8da851550a453bd7f&quality=0.8"
						alt="logo"
					/> */}
					<div className={scss.photos}>
						<h1>Apple</h1>	
						<div className={scss.contents}>
							<p>
								Один из пионеров в области персональных компьютеров[7] и
								современных многозадачных операционных систем с графическим
								интерфейсом. Более половины продаж компании приходится на
								iPhone, на 2021 год в мире использовалось около 900 млн таких
								смартфонов[8]. Крупнейшим рынком для компании являются США,
								также значительна доля в выручке Китая, Японии и ряда стран
								Европы[9].
							</p>
							<p>
								В августе 2018 года Apple стала первой американской компанией,
								чья рыночная капитализация превысила 1 трлн долларов США, и
								самой дорогой публичной компанией за всю историю, обойдя
								предыдущего рекордсмена — компанию PetroChina (1,005 трлн
								долларов в ноябре 2007 года)[10][11]. 30 июня 2023 года Apple
								стала первой компанией в мире, рыночная капитализация которой
								достигла 3 триллионов долларов США[12]. В 2022 году Apple заняла
								третье место в списке крупнейших компаний США Fortune 500[13]. В
								списке крупнейших компаний мира Forbes Global 2000 Apple заняла
								7-е место[14].
							</p>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

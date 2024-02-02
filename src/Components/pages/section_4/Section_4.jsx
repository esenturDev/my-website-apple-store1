import scss from "./Section_4.module.scss";

export const Section_4 = () => {
	return (
		<section className={scss.section4}>
			<div className="container">
				<div className={scss.content}>
					<div className={scss.contents}>
						<h1>Выберите свой Mac.</h1>
						<p>Суперсила. Профессионалов</p>
						<a href="#">подробнее</a>
					</div>
          <div className={scss.cards}>
            <div className={scss.photos}>
              <img src="https://www.istore.kg/media/main_page/ipadprom2_vq1Wna2.webp" alt="logo" />
            </div>
            <div className={scss.photos}>
              <img src="https://www.istore.kg/media/main_page/macbookair15_TBW9s3n.webp" alt="logo" />
            </div>
          </div>
          <div className={scss.cards2}>
            <div className={scss.photos}>
              <img src="https://www.istore.kg/media/main_page/istorecard_HR5kwV0.webp" alt="logo" />
            </div>
            <div className={scss.photos}>
              <img src="https://www.istore.kg/media/main_page/airpodspro_RELgGXl.webp" alt="logo" />
            </div>
          </div>
				</div>
			</div>
		</section>
	);
};

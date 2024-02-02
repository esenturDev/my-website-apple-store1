import scss from "./Section_5.module.scss";
export const Section_5 = () => {
	return (
		<section className={scss.section5}>
			<div className="container">
				<div className={scss.content}>
					<div className={scss.contents}>
						<h1>Статьи и новости</h1>
						<p>Оставайтесь всегда в курсе событий</p>
						<a href="#">подробнее</a>
					</div>
					<div className={scss.displeydiv}>
						<div className={scss.card1}>
							<img
								src="https://www.istore.kg/media/articles/quick-start.webp"
								alt="logo"
							/>
							<div className={scss.divCards}>
								<p>15.12.20</p>
								<h2>Функция «Быстрое начало»</h2>
								<p className={scss.p}>
									Использование функции «Быстрое начало» <br />
									для переноса данных на новое устройство <br />
									iPhone, iPad или iPod touch
								</p>
								<a href="#">подробнее</a>
							</div>
						</div>
						<div className={scss.card1}>
							<img
								src="https://www.istore.kg/media/articles/transfer_V3fDMQZ.webp"
								alt="logo"
							/>
							<div className={scss.divCards}>
								<p>03.03.22</p>
								<h2>Перенос с Android на iOS</h2>
								<p className={scss.p}>
									Перенос содержимого с устройства Android <br />
									на устройство iPhone, iPad или iPod touch
								</p>
								<a href="#">подробнее</a>
							</div>
						</div>
						<div className={scss.card1}>
							<img
								src="https://www.istore.kg/media/articles/backupss.webp"
								alt="logo"
							/>
							<div className={scss.divCards}>
								<p>28.02.22</p>
								<h2>Резервное копирование данных</h2>
								<p className={scss.p}>
									Создайте резервную копию данных iPhone с <br />
									помощью iCloud или компьютера на случай <br />
									замены, потери или повреждения...
								</p>
								<a href="#">подробнее</a>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

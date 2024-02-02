import scss from "./Footer.module.scss";

export const Footer = () => {
	return (
		<footer className={scss.footer}>
			<div className="container">
				<div className={scss.content}>
					<p>Copyright 2013-2023 istore.kg все права защищены</p>
					<p>made in MOORE STUDIO</p>
					<p>Политика конфиденциальности</p>
          <p>Пользовательское соглашение</p>
				</div>
			</div>
		</footer>
	);
};

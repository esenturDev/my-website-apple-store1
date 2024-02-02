import { Button } from "../ul/button/Button";
import scss from "./HomeResult.module.scss";

export const HomeResult = ({ setState }) => {
	const renderRes = () => {
		setState(true);
	};
	return (
		<div className={scss.HomeResult}>
			<div className="container">
				<div className={scss.content}>
        <h1>Добро пожаловать! Уважаемый клиент!!</h1>
				<Button onClick={renderRes}>Add</Button>
        </div>
			</div>
		</div>
	);
};

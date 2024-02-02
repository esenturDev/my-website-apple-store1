import scss from "./Input.module.scss";
export const Input = ({ texts }) => {
	return <input placeholder={texts} className={scss.inputs} type="text" />;
};

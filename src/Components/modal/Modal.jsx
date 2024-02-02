import { Button } from '../ul/button/Button';
import scss from './Modal.module.scss';

export const Modal = ({children, setModalGet}) => {
  function deleteTodo () {
    setModalGet(false)
  }
  return (
    <div className={scss.modal}>
      <div className={scss.divModal}>
      {children}
      <Button onClick={deleteTodo}>delete</Button>
      </div>
    </div>
  )
}

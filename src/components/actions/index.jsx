import { useStore } from "../../hooks/useStore";
import { toggleTheme } from "../../store";
import './index.scss';

export default function Actions () {
  const { theme } = useStore()

  return <div className={`actions__container actions__container--${theme}`}>
    <h3>Action Section</h3>
    <button onClick={toggleTheme}>toggleTheme</button>
  </div>
}
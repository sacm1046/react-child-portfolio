import { useStore } from "../../hooks/useStore";
import './index.scss';

export default function Main ({title}) {
  const { theme } = useStore()

  return <div className={`main__container main__container--${theme}`}>
    <h3>Main selection: {title || 'not defined'}</h3>
    <h5>Theme: {theme}</h5>
  </div>
}
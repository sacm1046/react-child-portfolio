import { toggleTheme } from "../../store";

export default function Actions () {
  return <div>
    <h3>Theme Section</h3>
    <button onClick={toggleTheme}>toggleTheme</button>
  </div>
}
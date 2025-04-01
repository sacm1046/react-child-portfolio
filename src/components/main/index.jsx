import { useStore } from "../../hooks/useStore";

export default function Main () {
  const { theme } = useStore()

  return <div>
    <h3>Theme selection: {theme}</h3>
  </div>
}
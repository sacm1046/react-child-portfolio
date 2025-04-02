import { useEffect, useState } from 'react';
import { fetchList } from '../../api/list';
import { useStore } from '../../hooks/useStore';
import './index.scss';

const SuccessView = ({ data }) => <ul>{data.map(({ id, name }) => <li key={id}>{name}</li>)}</ul>;
const LoadingView = () => <div>Cargando...</div>;
const ErrorView = ({ data, onRetry }) => <div>
  Ocurrió un error: {data.message}
  <br />
  <button onClick={onRetry}>retry</button>
</div>;

export default function Comments() {
  const { theme } = useStore()
  const [data, setData] = useState(null);
  const [state, setState] = useState("loading");
  const callList = async () => {
    setState("loading");
    try {
      setData(await fetchList());
      setState("success");
    } catch (error) {
      setData(error);
      setState("error");
    }
  }
  const renderView = () => ({
    "loading": <LoadingView />,
    "error": <ErrorView data={data} onRetry={callList} />,
    "success": <SuccessView data={data} />
  }[state])


  useEffect(() => {
    callList()
  }, []);

  return (<div className={`comments__container comments__container--${theme}`}>
    <h3>React Child - Comment Section with useEffect</h3>
    {renderView()}
  </div>
  );
}
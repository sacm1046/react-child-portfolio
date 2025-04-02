import React, { Suspense, use } from 'react';
import ErrorBoundary from '../errorBoundary';
import { fetchList } from '../../api/list';
import { useStore } from '../../hooks/useStore';
import './index.scss';

const promise = fetchList();

function SuccessView() {
  const list = use(promise);
  return <ul>{list.map(({ id, name }) => <li key={id}>{name}</li>)}</ul>;
}

function LoadingView() {
  return <div>Cargando...</div>;
}

function ErrorView({ error }) {
  return <div>Ocurrió un error: {error.message}</div>;
}

export default function List() {
  const { theme } = useStore()
  
  return (<div className={`list__container list__container--${theme}`}>
    <h3>React Child - List Section with USE</h3>
    <ErrorBoundary fallback={<ErrorView />}>
      <Suspense fallback={<LoadingView />}>
        <SuccessView />
      </Suspense>
    </ErrorBoundary>
  </div>
  );
}
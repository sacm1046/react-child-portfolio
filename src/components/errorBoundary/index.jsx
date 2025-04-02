import { Component, cloneElement, isValidElement } from 'react';

export default class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    console.error('Error capturado:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      const fallback = this.props.fallback;

      if (isValidElement(fallback)) {
        return cloneElement(fallback, {
          error: this.state.error
        });
      }

      return (
        <div>
          <p>Error al cargar el componente.</p>
        </div>
      );
    }

    return this.props.children;
  }
}

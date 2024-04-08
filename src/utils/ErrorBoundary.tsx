import { Component, ErrorInfo, ReactNode } from 'react';
import ErrorPage from '../pages/error';
import Loader from './loader';

interface ErrorBoundaryProps {
    children: ReactNode;
}

interface ErrorBoundaryState {
    hasError: boolean;
    isLoading: boolean;
}

class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
    constructor(props: ErrorBoundaryProps) {
        super(props);
        this.state = { hasError: false, isLoading: true };
    }

    static getDerivedStateFromError(): ErrorBoundaryState {
        return { hasError: true, isLoading: false };
    }

    componentDidCatch(error: Error, errorInfo: ErrorInfo): void {
        console.error('Error caught by ErrorBoundary:', error, errorInfo);
    }

    componentDidMount() {
        setTimeout(() => {
            this.setState({ isLoading: false });
        }, 2000);
    }

    render() {
        const { hasError, isLoading } = this.state;

        if (isLoading) {
            return <Loader />;
        }

        if (hasError) {
            return <ErrorPage />;
        }

        return this.props.children;
    }
}

export default ErrorBoundary;

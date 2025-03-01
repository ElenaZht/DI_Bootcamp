import React, { Component } from 'react'

export default class ErrorBoundary extends Component {
    constructor(){
        super()
        this.state = {
            error: null,
            errorInfo: null
        }
    }

    static getDerivedStateFromError(error) {
        return { error };
    }

    componentDidCatch(error, errorInfo) {
        console.error("Caught error:", error, errorInfo);
        this.setState({error, errorInfo})
    }
    render() {
        if (this.state.error){
            return (
                <details style={{ whiteSpace: 'pre-wrap' }}>
                    {this.state.error && this.state.error.toString()}
                    <br />
                    {this.state.errorInfo?.componentStack}
                </details>
            )
        }
        return (
            <div>{this.props.children}</div>  
        )
    }
}

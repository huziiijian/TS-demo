import React from 'react'
class ErrorBoundary extends React.Component<any, {hasError: Boolean, msg: string}> {
    constructor(props:any) {
        super(props);
        this.state = {
            hasError: false,
            msg: ''
        };
    }

    componentDidCatch(e: Error) {
        console.log(e.stack)
        this.setState({
            hasError: true,
            msg: e.stack || ''
        });
    }

    render() {
        if (this.state.hasError) {
            return <div>
                    <h3>WidgetError:Something went wrong.</h3>
                    <pre style={{fontSize: '12px'}} >{this.state.msg}</pre>
                </div>;
        }
        return this.props.children;
    }
}
export default ErrorBoundary

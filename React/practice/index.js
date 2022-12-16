// ExampleButton Component
class ExampleButton extends React.Component {
    constructor(props){
        super(props);
        this.state = { isClicked: false };
    }
    render() {
        if (this.state.isClicked) {
            return 'You clicked this';
        }
        return React.createElement(
            'button',
            { onClick: () => this.setState({ isClicked: true })},
            'Click me!'
            );
    }
}


// select div
const containerDiv = document.getElementById('root');
// create root of react DOM
const root = ReactDOM.createRoot(containerDiv);
// Render what we see
root.render(React.createElement(ExampleButton));
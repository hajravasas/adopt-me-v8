const Pet = (props) => {
    return React.createElement("div", {}, [
        React.createElement("h1", {}, props.name),
        React.createElement("h2", {}, props.animal),
        React.createElement("h2", {}, props.breed),
    ]);
}
 
const App = () => {
    return React.createElement(
        "div",
        {},
        [
            React.createElement("h1", {}, "Adopt Me!"),
            React.createElement(Pet, {animal: "Dog", name: "Dexter", breed: "boston terrier"}),
            React.createElement(Pet, {animal: "Bird", name: "Sari", breed: "papagaj"}),
            React.createElement(Pet, {animal: "Cat", name: "Louis", breed: "Siamese"}),
        ]

    )
};

const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);
root.render(React.createElement(App));
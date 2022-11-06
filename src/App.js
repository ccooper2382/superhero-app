import './App.css';

function App() {

    async function getData() {

        await fetch('https://superheroapi.com/api/10162140344964112/1', {
            method: 'GET',
            mode: "cors",
            headers: {'accept': 'application/json', 'Access-Control-Allow-Origin': '*'}
        })
            .then((response) => console.log(response))
            .catch(err => console.log(err))
            .then((data) => console.log(data))
            .catch(err => console.log(err));

    }

    return (
        <div>
            <button onClick={getData}>stuff</button>
        </div>
    );
}

export default App;

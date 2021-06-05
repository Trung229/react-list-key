import logo from './logo.svg';
import './App.css';

const ShowList = (props) =>{
  const numbers = props.list;
  const listItems = numbers.map((numbers) =>
  {
    return <li key={numbers.toString()}>{numbers}</li>
  }
)
  return(
    <div>
      {listItems}
    </div>
  )
}

function App() {
  const myList = [1,2,3,4,5,6]
  return (
    <div className="App">
        <ShowList list={myList}></ShowList>
    </div>
  );
}

export default App;

import './App.css';
import {BudgetForm} from "./components/BudgetForm";


function App() {
    return (
        <div className="App">
            <header className="App-header">
                <p>
                Cassie's Monthly Budget App
                </p>
                <BudgetForm/>
            </header>
        </div>
    );
}

export default App;

import * as React from "react";

export class BudgetForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            date: new Date(),
            description: '',
            amount: 0,
            type: ''
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event){
        let name = event.target.name;
        let value = event.target.value;
        this.setState({[name]: value});
    }

    handleSubmit(event) {
        alert('A name was submitted: ' + this.state.value);
        event.preventDefault();
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <label>
                    Month/Year
                    <input type="Date" name="monthYear" value={this.state.date} onChange={this.handleChange}/>
                </label>
                <label>
                    Description
                    <input type="text" name="description" value={this.state.description} onChange={this.handleChange}/>
                </label>
                <label>
                    Amount
                    <input type="text" name="amount" value={this.state.amount} onChange={this.handleChange}/>
                </label>
                <label>
                    Type
                    <input type="text" name="type" value={this.state.type} onChange={this.handleChange}/>
                </label>
                <input type={"submit"} value={"Submit"}/>
            </form>
        );
    }
}
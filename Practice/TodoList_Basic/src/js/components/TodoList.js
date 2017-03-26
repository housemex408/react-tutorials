import React from "react";

export default class TodoList extends React.Component {
    constructor() {
        super();
        this.state = {
            items: [],
            newItem: null
        }
    }

    handleClick(e)
    {
        const itemValue = this.state.newItem;

        const newItems = this.state.items.concat([itemValue]);

        this.setState({
            items: newItems, newItem: null
        });
    }

    handleInputChange(e)
    {
        this.setState({newItem: e.target.value});
    }

    render() {
        return (
            <div>
                <input type="text"
                       value={this.state.newItem}
                       placeholder={this.props.placeHolder}
                       onChange={this.handleInputChange.bind(this)}
                />
                <button onClick={this.handleClick.bind(this)}>Add</button>
                <ul>
                    {this.state.items.map((item) => {
                        return <li key={item}>{item}</li>
                    })}
                </ul>
            </div>
        )
    }
}
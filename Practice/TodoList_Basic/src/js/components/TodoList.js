import React from "react";

export default class TodoList extends React.Component {
    constructor() {
        super();
        this.state = {
            items: []
        }
    }

    render() {
        return (
            <div>
                <input type="text"/>
                <button>Add</button>
            </div>
        )
    }

}
import React from "react";
import { connect } from "react-redux"
import styles from "./todolist.css";
import { addItem, updateCurrentItem } from "../actions/todoAction"

@connect((store) => {
    return {
        items: store.listTodos.items,
        newItem: store.listTodos.newItem
    };
})
export default class TodoList extends React.Component {
    handleClick()
    {
        const itemValue = this.props.newItem;
        this.props.dispatch(addItem(itemValue));
    }

    handleInputChange(e)
    {
        const itemValue = e.target.value;
        this.props.dispatch(updateCurrentItem(itemValue));
    }

    render() {

        const { newItem, items,  placeHolder} = this.props;
        const listItems = items.map(item => <li key={item}>{item}</li>);

        return (
            <div>
                <input type="text"
                       value={newItem}
                       placeholder={placeHolder}
                       onChange={this.handleInputChange.bind(this)}
                />
                <button onClick={this.handleClick.bind(this)}>Add</button>
                <ul className={styles.list}>
                    {listItems}
                </ul>
            </div>
        )
    }
}
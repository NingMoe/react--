import React, { Component } from 'react';
import {Link,AutoComplete} from "react-router";
function onSelect(value) {
    console.log('onSelect', value);
}

class Searchinput extends Component {
    constructor(props) {
        super(props)
        this.state = {

        }
        this.handleSearch=this.handleSearch.bind(this)

    }
    handleSearch = (value) => {
        this.setState({
            dataSource: !value ? [] : [
                value,
                value + value,
                value + value + value,
            ],
        });
    }
    render() {
        const { dataSource } = this.state;
        return (
            <AutoComplete
                dataSource={dataSource}
                style={{ width: 200 }}
                onSelect={onSelect}
                onSearch={this.handleSearch}
                placeholder="input here"
            />
        );
    }


}
export default Searchinput
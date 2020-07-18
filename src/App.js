import React, { Component } from "react";
import { Button, Paper, List } from "@material-ui/core";
import ListItem from "./components/ListItem";
import Header from "./components/Header";
import Action from "./Api/Action";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
    };
  }

  componentDidMount() {
    this.getItem();
  }

  getItem = () => {
    Action.getList().then((data) => {
      this.setState({
        data: data,
      });
    });
  };

  deleteItem = (id) => {
    Action.deleteItem(id).then((data) => {
      this.getItem();
    });
  };

  addItem = (text) => {
    Action.addItem(text).then((data) => {
      this.getItem();
    });
  };

  editItem = ({ text, checked, id }) => {
    Action.editItem({ text, checked, id }).then((data) => {});
  };

  render() {
    const { data } = this.state;
    return (
      <main className="main">
        <Paper elevation={3}>
          <Header addItem={this.addItem} />
          <List>
            {data.map((item) => (
              <ListItem
                key={item.id}
                id={item.id}
                text={item.text}
                checked={item.checked}
                updateChecked={this.editItem}
                updateText={this.editItem}
                onDelete={this.deleteItem}
              />
            ))}
          </List>
        </Paper>
      </main>
    );
  }
}

export default App;

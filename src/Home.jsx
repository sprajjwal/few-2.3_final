import React, { Component } from 'react';

import Detail from './Detail'

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'row',
    width: '80vw',
    justifyContent: 'space-evenly'
  },
  left: {},
  input: {},
  item: {},
  name: {
    display: 'flex',
    flexDirection: 'row',
    marginBottom: '0',
  },
  button: {
    height: '22px',
    borderRadius: '5px',
    margin: 'auto'
  },
  data: {
    backgroundColor: '#a3a3a3',
    borderRadius: '5px',
  },
}


class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
      data: '',
      inputValue: '',
    };
    this.onChange = this.onChange.bind(this)
    this.onClick = this.onClick.bind(this)
    this.renderData = this.renderData.bind(this)
    this.save = this.save.bind(this);
  }

  onChange(e) {
    const inputValue = e.target.value;
    this.setState({ inputValue })
  }

  async save() {
    let { items, data } = this.state;
    if ( typeof(data.homeworld) !== 'string') {return}
    const r = await fetch(`https${data.homeworld.slice(4)}`);
    const home = await r.json()
    data.homeworld = home
    items.push(data)
    this.setState({ items, data })
  }

  async onClick() {
    const { inputValue } = this.state
    const r = await fetch(`https://swapi.dev/api/people/${inputValue}`);
    const data = await r.json();
    if (data.detail !== "Not found") {
      this.setState({ data })
    }
  }

  renderData() {
    const { data } = this.state
    return(
      <div style={styles.data}>
        <div style={styles.name}>
          <p>Name: {data.name}</p>
          <button onClick={this.save} style={styles.button}>Save</button>
        </div>
        <p>Eye Color: {data.eye_color}</p>
        <p>Height: {data.height}</p>
        <p>Mass: {data.mass}</p>
      </div>
    )
  }

  render() {
    const { inputValue, items, data } = this.state;
    return (
      <div>
        <h2>FEW 2.3 FINAL - Shashwat Prajjal</h2>
        <div style={styles.container}>
          <div style={styles.left}>
            <div style={styles.input}>
              <input
                type="number"
                onChange={this.onChange}
                value={inputValue}
                />
              <button
                onClick={this.onClick}
                style={styles.button}
                >Search
                </button>
            </div>
            <div style={styles.item}>
              {data !== ''? this.renderData(): null}
            </div>
          </div>
          <Detail items={items} />
        </div>
      </div>
    )
  }
}

export default Home;
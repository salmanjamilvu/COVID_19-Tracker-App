import React from 'react'
import { Cards, Chart, CountryPicker } from './components/index'
import styles from './App.module.css'
import {fetchData} from './api'
import logo from './images/logo.png'

class App extends React.Component {
  state={
    data: {},
    country: '',
  }
  async componentDidMount() {
    const result = await fetchData()
    this.setState({data: result})
  }

  handleCountryChange = async (country) =>{
    const result = await fetchData(country)
    this.setState({data: result, country: country}) 
    console.log(this.data)
  }
  
  render(){
    const {data, country} = this.state
    return (
      <div className={styles.container}>
        <img className={styles.image} src={logo} alt="Logo" />
        <Cards data={data} />
        <CountryPicker handleCountryChange={this.handleCountryChange}  />
        <Chart data={data} country={country} />
      </div>
    );
  }
}

export default App;

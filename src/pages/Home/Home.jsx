import React from 'react'
import "./home.scss"
import Navbar from '../../components/navbar/Navbar'
import Sidebar from '../../components/sidebar/Sidebar'
import Widget from '../../components/widgets/Widget'
import Table from '../../components/Table/Table'
const Home = () => {
  return (
    <div className="home">
       <Sidebar/>
       <div className="homeContainer">
        <Navbar/>
        <div className="widgets">
        <Widget type="User"/>
        <Widget  type="Fees"/>
        <Widget type="Drivers"/>
        <Widget type="Manage"/>
        </div>
        <div className="listContainer">
          <div className="listTitle">
            latest transactions
          </div>
          <Table/>
        </div>
       </div>
    </div>
   
  )
}

export default Home
import React from 'react';
import axios from 'axios';
import { saveAs } from 'file-saver';
import './Home.css';

class Home extends React.Component {

  constructor(props) {

    super(props);
    this.state = {
      companyName: '',
      invoiceId: 0,
      adress1: '',
      adress2: '',
      name: '',
      positionName: '',
      phone: '',
      email: '',
      desc: '',
      descSub: '',
      unit: 0,
      qty: 0,
      desc2: '',
      descSub2: '',
      unit2: 0,
      qty2: 0,
      isBtnOn: false,
      desc3: '',
      descSub3: '',
      unit3: 0,
      qty3: 0,
      isBtnOn2: false,
      date: new Date(),
      year: new Date().getFullYear(),
      month: new Date().getMonth() + 1,
      day: new Date().getDate(),
      item: [],
    }

  }

  handleChange = ({ target: { value, name }}) => this.setState({ [name] : value});

  createAndDownloadPdf = () => {
    axios.post('/create-pdf', this.state)
      .then(() => axios.get('fetch-pdf', { responseType: 'blob' }))
      .then((res) => {
        const pdfBlob = new Blob([res.data], { type: 'application/pdf' });
        const today = new Date();
        const year = today.getFullYear();
        const month = today.getMonth() + 1;
        const day = today.getDate();
        const issue = year + '_' + month + '_' + day;
        const title = this.state.invoiceId;
        const filename = title + '_' + issue;
        saveAs(pdfBlob, filename);
      });

      const item = {
        companyName: this.state.companyName,
        invoiceId: this.state.invoiceId,
        name: this.state.name,
        unit: this.state.unit,
        qty: this.state.qty,
        unit2: this.state.unit2,
        qty2: this.state.qty2,
        unit3: this.state.unit3,
        qty3: this.state.qty3,
        date: this.state.date,
        year: this.state.year,
        month: this.state.month,
        day: this.state.day,
      }

      let list;

      if(localStorage.getItem('list') === null ){
        list = [];
      } else {
        list = JSON.parse(localStorage.getItem('list'));
      }

      console.log(item);

      list.push(item);

      localStorage.setItem('list', JSON.stringify(list));
      console.log(localStorage.list);

  }

    render() {

      const isOn = this.state.isBtnOn;
      const isOn2 = this.state.isBtnOn2;

      return (
        <div className="invoice-container">

          <h2>&#9312; Basic infomation</h2>
          <input type="text" placeholder="Client Name *" name="companyName" onChange={this.handleChange}/>
          <input type="number" placeholder="INVOICE NO *" name="invoiceId" onChange={this.handleChange} required/>
          <input type="text" placeholder="Adress1 * : 123 Street Address" name="adress1" onChange={this.handleChange}/>
          <input type="text" placeholder="Adress2 * : Name City, State, Zip/Post" name="adress2" onChange={this.handleChange}/>

          <h2>&#9313; Client details</h2>
          <input type="text" placeholder="Contact Name *" name="name" onChange={this.handleChange}/>
          <input type="text" placeholder="Position Name" name="positionName" onChange={this.handleChange}/>
          <input type="text" placeholder="Phone Number" name="phone" onChange={this.handleChange}/>
          <input type="email" placeholder="Email" name="email" onChange={this.handleChange}/>

          <h2>&#9314; Order details</h2>
          <input type="text" placeholder="Description *" name="desc" onChange={this.handleChange}/>
          <input type="number" placeholder="Unit *" name="unit" onChange={this.handleChange} />
          <textarea cols="100" placeholder="Description detail" name="descSub" onChange={this.handleChange}/>
          <input type="number" placeholder="Quantity *" name="qty" onChange={this.handleChange}/>
          <button className="addBtn" onClick={()=> this.setState({isBtnOn: !isOn})} title="Add Item">{isOn? '-': '+'}</button>

          <div className={isOn? "addItemArea show" : "addItemArea noshow"}>
            <h2>&#9315; Add Item-2</h2>
            <input type="text" placeholder="Item2 Description *" name="desc2" onChange={this.handleChange}/>
            <input type="number" placeholder="Item2 Unit *" name="unit2" onChange={this.handleChange}/>
            <textarea cols="100" placeholder="Item2 Description detail" name="descSub2" onChange={this.handleChange}/>
            <input type="number" placeholder="Item2 Quantity *" name="qty2" onChange={this.handleChange}/>
            <button className="addBtn" onClick={()=> this.setState({isBtnOn2: !isOn2})} title="Add Item">{isOn2? '-': '+'}</button>
          </div>

          <div className={isOn2? "addItemArea show" : "addItemArea noshow"}>
            <h2>&#9315; Add Item-3</h2>
            <input type="text" placeholder="Item3 Description *" name="desc3" onChange={this.handleChange}/>
            <input type="number" placeholder="Item3 Unit *" name="unit3" onChange={this.handleChange}/>
            <textarea cols="100" placeholder="Item3 Description detail" name="descSub3" onChange={this.handleChange}/>
            <input type="number" placeholder="Item3 Quantity *" name="qty3" onChange={this.handleChange}/>
          </div>

          <button className="createBtn" onClick={this.createAndDownloadPdf}>Download PDF</button>
        </div>
      )
    }
  }


export default Home;
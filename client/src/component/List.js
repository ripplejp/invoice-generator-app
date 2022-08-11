import React from 'react';
import './List.css';

let list;

if(localStorage.getItem('list') === null ){
  list = [];
} else {
  list = JSON.parse(localStorage.getItem('list'));
}


// const price1 = list.unit * list.qty;
// const price2 = list.unit2 * list.qty2;
// const price3 = list.unit3 * list.qty3;
// const total = parseInt( 1.1 * ( price1 + price2 + price3 ));

// function numberWithCommas(x) {
//   return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
// }

function ListHeader(){

  const listTable = (
    <div className="list-table row border text-center mt-2">
      <div className="col">
        <p className="bold">COMFIRM</p>
      </div>
      <div className="col">
        <p className="bold">INVOICE NO</p>
      </div>
      <div className="col">
        <p className="bold">CLIENT NAME</p>
      </div>
      <div className="col">
        <p className="bold">CONTACT NAME</p>
      </div>
      <div className="col">
        <p className="bold">TOTAL</p>
      </div>
      <div className="col">
        <p className="bold">ISSUE DATE</p>
      </div>
      <div className="col">
        <p className="bold">DUE DATE</p>
      </div>
    </div>
  );
  return (
    <div className="header">{listTable}</div>
  );
}

function ListContents() {
  const listItems = list.map((list, idx) =>
    <div className="listBox row border text-center" key={idx}>
      <div className="col"><button className="delete-item" onClick={(e)=>removeListItem(idx,e)}><i className="icon fas fa-check"></i></button></div>
      <div className="col"><p className="blue">{list.invoiceId}</p></div>
      <div className="col"><p>{list.companyName}</p></div>
      <div className="col"><p>{list.name}</p></div>
      <div className="col"><p>&yen;{parseInt(1.1 * ((list.unit* list.qty) + (list.unit2* list.qty2) + (list.unit3 * list.qty3))).toLocaleString()}</p></div>
      <div className="col"><p>{list.day}/{list.month}/{list.year}</p></div>
      <div className="col"><p>{list.day}/{list.month + 1}/{list.year}</p></div>
    </div>
  );
  return (
    <div className="listContents">{listItems}</div>
  );
}

const removeListItem = (idx, e) => {

  if (window.confirm('Are you sure you wish to delete this item ?')) {
    if (e.target.parentElement.classList.contains('delete-item')){
      e.target.parentElement.parentElement.parentElement.remove();
    }
    // console.log(idx);
    // console.log(list);
    list.splice(idx, 1);
    localStorage.setItem('list', JSON.stringify(list));
  }
}


// const Checked = () => {
//   this.setState(() => {
//     return { checked: !this.state.checked };
//   });
// }


class List extends React.Component {

  componentDidMount() {
    console.log("componentDidMount done!");
  }

  constructor(props) {
    super(props);
    this.clearList = this.clearList.bind(this);
  }

  clearList = (e) => {

    if (window.confirm('Are you sure you wish to delete all the items?')) {
        const listBox = document.querySelector('.listContents');
        listBox.style.display = 'none';
        localStorage.clear();
    }

  }


  render(){

    return(
      <div className="invoice-list">
        <h2 className="text-center">INVOICE LIST</h2>
        <ListHeader/>
        <ListContents list={this.list}/>
        <button className="clearBtn" onClick={this.clearList}>CLEAR ALL</button>
      </div>
      )
    }

  }


export default List;
import React from 'react';
import InvoiceForm from '../invoice-form/InvoiceForm';
import List from '../list/List';
import './App.css';

function App() {
  return (
      <div className="App">
        <h2>My invoices</h2>
        <List/>
        <h2>Add a new invoice</h2>
        <InvoiceForm/>
      </div>
  );
}

export default App;

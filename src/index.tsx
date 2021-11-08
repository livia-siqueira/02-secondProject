import React from 'react';
import ReactDOM from 'react-dom';
import { createServer, Model }  from 'miragejs';
import { App } from './App';

createServer ({
  models: {
  transaction: Model
  },

  seeds(server) {
    server.db.loadData({
      transactions: [
        {
          id:1,
          title: 'Freenlance de website',
          type: 'deposit',
          category: 'Dev',
          amount: 6000,
          createAt: new Date('2021-02-12 09:31:00')
        },
        {
          id:2,
          title: 'Casa',
          type: 'withdraw',
          category: 'Casa',
          amount: 600,
          createAt: new Date('2021-11-01 09:31:00')
        },
        {
          id:3,
          title: 'Freenlance de website',
          type: 'deposit',
          category: 'Dev',
          amount: 6000,
          createAt: new Date('2021-02-12 09:31:00')
        }
      ]
    })
  },

  routes() {

    this.namespace = 'api';

    this.get('/transactions', () => {
      return [
        this.schema.all('transaction')
      ]
    })

    this.post('/transactions', (schema, request) => {

      const data = JSON.parse(request.requestBody);

      return schema.create('transaction', data);
    })
  }
})

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

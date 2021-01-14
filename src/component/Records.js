import "bootstrap/dist/css/bootstrap.min.css"
import React,{Component} from "react"
import Record from './Record'

class Records extends Component {
  constructor() {
    super();
    this.state = {
      records: [
        {"id": 1, "Date": "2018-01-09", "Title": "salary", "Amount": 20},
        {"id": 2, "Date": "2018-01-03", "Title": "salary", "Amount": 199},
        {"id": 2, "Date": "2018-01-03", "Title": "salary", "Amount": 199}
      ]
    }
  }

  render() {
    return (
      <div>
        <h2>Records</h2>
        <table className="table table-bordered">
          <thead>
            <tr>
                <th>Date</th>
                <th>Title</th>
                <th>Amount</th>
            </tr>
          </thead>
          <tbody>
            {this.state.records.map((record,i) => <Record record = {record}/>)}
          </tbody>
        </table>
      </div>
    );
  }
}

export default Records;
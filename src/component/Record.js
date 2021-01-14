import React, { Component } from 'react';

class Record extends Component {
  render() {
    return (
      <tr >
        <td>{this.props.record.Date}</td>
        <td>{this.props.record.Title}</td>
        <td>{this.props.record.Amount}</td>
        
      </tr>
    );
  }
}

export default Record;
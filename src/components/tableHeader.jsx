import React, { Component } from "react";

// columns: array

class TableHeader extends Component {
  render() {
    const { columns } = this.props;
    return (
      <thead className="head-dark">
        <tr>
          {columns.map((column) => (
            <th key={column.path || column.key}>{column.label}</th>
          ))}
        </tr>
      </thead>
    );
  }
}

export default TableHeader;

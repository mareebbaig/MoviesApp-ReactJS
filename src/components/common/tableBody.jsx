import React, { Component } from "react";
import _ from "lodash";

//movie array
//delete button

class TableBody extends Component {
  getTableItem = (item, column) => {
    if (column.content) return column.content(item);

    return _.get(item, column.path);
  };

  generateKey = (item, column) => {
    return item.id + (column.path || column.key);
  };

  render() {
    const { Data, columns } = this.props;
    return (
      <tbody>
        {Data.map((item) => (
          <tr key={item.id}>
            {columns.map((column) => (
              <td key={this.generateKey(item, column)}>
                {this.getTableItem(item, column)}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    );
  }
}

export default TableBody;

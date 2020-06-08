import React from "react";
import { TableWrap } from "@style/CustomStyle";

const Table = ({ renderTableTopMenu, renderTableList }) => {
  return (
    <TableWrap>
      {renderTableTopMenu && renderTableTopMenu}
      {renderTableList && renderTableList}
    </TableWrap>
  );
};

export default Table;

import * as React from 'react';

import { DataGrid } from '@mui/x-data-grid';


const handleCellClick = (param, event) => {
  event.stopPropagation();
};

const handleRowClick = (param, event) => {
  event.stopPropagation();
};

function DataTable ({rows, columns}) {
  return (
    <div style={{ height: '100%', width: '100%' }}>
      <DataGrid
        rows={rows}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: { page: 0, pageSize: 5 },
          },
        }}
        pageSizeOptions={[5, 10]}
        checkboxSelection

        rowHeight={120}
        pageSize={100}
        onCellClick={handleCellClick}
        onRowClick={handleRowClick}
      />
    </div>
  );
}

export default DataTable;
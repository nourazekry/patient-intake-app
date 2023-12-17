import * as React from 'react';

import { DataGrid, GridToolbar } from '@mui/x-data-grid';
import { useTheme } from '@mui/material/styles';

const handleCellClick = (param, event) => {
  event.stopPropagation();
};

const handleRowClick = (param, event) => {
  event.stopPropagation();
};

function DataTable ({rows, columns}) {
  const theme = useTheme();

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
        sx={{borderColor: 'info.main'}}
        pageSizeOptions={[5, 10]}
        checkboxSelection
        rowHeight={120}
        pageSize={100}
        onCellClick={handleCellClick}
        onRowClick={handleRowClick}
        slots={{ toolbar: GridToolbar }}
        slotProps={{
          toolbar: {
            showQuickFilter: true,
          },
        }}
      />
    </div>
  );
}

export default DataTable;
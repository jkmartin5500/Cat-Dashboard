import * as React from 'react';
import Link from '@mui/material/Link';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Title from './Title';
import * as types from '../types';

function preventDefault(event: React.MouseEvent) {
  event.preventDefault();
}

export default function Sheet({ data }: {data: any[] }) {
  if (!data || data.length === 0) {
    return <div>No data</div>;
  }
  console.log(data)

  return (
    <React.Fragment>
      <Title>Recent Orders</Title>
      <Table size="small">
        <TableHead>
          <TableRow>
            {Object.keys(data[0]).map((key, index) => (
              <TableCell key={index}>{key}</TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((row, rowIndex) => (
            <TableRow key={rowIndex}>
              {Object.keys(row).map((key, colIndex) => (
                <TableCell key={colIndex}>{row[key]}</TableCell>
              ))}
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <Link color="primary" href="#" onClick={preventDefault} sx={{ mt: 3 }}>
        See more orders
      </Link>
    </React.Fragment>
  );
}

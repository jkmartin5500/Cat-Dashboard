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

export default function Sheet({ data }: {data: types.AsvDataItem[] }) {
  return (
    <React.Fragment>
      <Title>Recent Orders</Title>
      <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell>{data[0].day1}</TableCell>
            <TableCell>{data[0].day2}</TableCell>
            <TableCell>{data[0].day3}</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.slice(1).map((data) => (
            <TableRow key={data.id}>
              <TableCell>{data.name}</TableCell>
              <TableCell>{data.day1}</TableCell>
              <TableCell>{data.day2}</TableCell>
              <TableCell>{data.day3}</TableCell>
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

import React from 'react'
import './table.scss'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
const List = () => {
    const rows = [
        {
          id: 1143155,
          Driver: "Manish ji",
          img: "https://m.media-amazon.com/images/I/81bc8mA3nKL._AC_UY327_FMwebp_QL65_.jpg",
          customer: "Sumit",
          date: "1 March",
          amount: 785,
          method: "Cash on Delivery",
          status: "Approved",
        },
        {
          id: 2235235,
          Driver: "Dubey ji",
          img: "https://m.media-amazon.com/images/I/31JaiPXYI8L._AC_UY327_FMwebp_QL65_.jpg",
          customer: "Abhay",
          date: "1 March",
          amount: 900,
          method: "Online Payment",
          status: "Pending",
        },
        {
          id: 2342353,
          Driver: "Joshi ji",
          img: "https://m.media-amazon.com/images/I/71kr3WAj1FL._AC_UY327_FMwebp_QL65_.jpg",
          customer: "Kanak ",
          date: "1 March",
          amount: 315,
          method: "Cash on Delivery",
          status: "Pending",
        },
        {
          id: 2357741,
          Driver: "Tiwari ji",
          img: "https://m.media-amazon.com/images/I/71wF7YDIQkL._AC_UY327_FMwebp_QL65_.jpg",
          customer: "Arpit",
          date: "1 March",
          amount: 920,
          method: "Online",
          status: "Approved",
        },
        {
          id: 2342355,
          Driver: "Bisht ji",
          img: "https://m.media-amazon.com/images/I/81hH5vK-MCL._AC_UY327_FMwebp_QL65_.jpg",
          customer: "Aaron",
          date: "1 March",
          amount: 2000,
          method: "Online",
          status: "Pending",
        },
      ];
  return ( <TableContainer component={Paper} className="table">
  <Table sx={{ minWidth: 650 }} aria-label="simple table">
    <TableHead>
      <TableRow>
      <TableCell className="tableCell">User ID</TableCell>
            <TableCell className="tableCell">Driver ID</TableCell>
            <TableCell className="tableCell">User</TableCell>
            <TableCell className="tableCell">Date</TableCell>
            <TableCell className="tableCell">Amount</TableCell>
            <TableCell className="tableCell">Payment Method</TableCell>
            <TableCell className="tableCell">Status</TableCell>
      </TableRow>
    </TableHead>
    <TableBody>
      {rows.map((row) => (
        <TableRow
          key={row.id}
        >
          <TableCell component="th" scope="row">
            {row.id}
          </TableCell>
          <TableCell className="tableCell">{row.Driver}</TableCell>
          <TableCell className="tableCell">{row.customer}</TableCell>
          <TableCell className="tableCell">{row.date}</TableCell>
          <TableCell className="tableCell">{row.amount}</TableCell>
          <TableCell className="tableCell">{row.method}</TableCell>
          <TableCell className="tableCell">{row.status}</TableCell>
        </TableRow>
      ))}
    </TableBody>
  </Table>
</TableContainer>
  )
}

export default List
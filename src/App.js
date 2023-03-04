import React, { useState, useEffect } from "react";
import axios from "axios";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import './App.css';

function App() {

  const [data, setData] = useState([]); 

  useEffect(() => {
    axios.get('https://dummyjson.com/products').then((response) => {
      setData(response.data.products);
    })
  })
  return (
    <div>
            <TableContainer component={Paper}>
              <Table sx={{minWidth: 650}} aria-label="simple table" >
                <TableHead>
                  <TableRow>
                    <TableCell align="center">Title</TableCell>
                    <TableCell align="center">Description</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {
                    data.map((singleData) => (
                      <TableRow
                        key={singleData.id}
                        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                      >
                        <TableCell align="center" component="th" scope="row">
                          {singleData.title}
                        </TableCell>
                        <TableCell align="center">{singleData.description}</TableCell>
                      </TableRow>
                    ))
                  }
                </TableBody>
              </Table>
            </TableContainer>
    </div>
  )
}

export default App;

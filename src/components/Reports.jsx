import * as React from "react";
import Link from "@mui/material/Link";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Title from "./Title";

export default function Reports({ pcrs, totalPcrs }) {
  // Generate Order Data
  function createData(id, date, pcrs, totals) {
    return { id, date, pcrs, totals };
  }

  const rows = [
    createData(0, pcrs[0].date, pcrs[0].pcr_count, pcrs[0].pcr_count),
    createData(1, pcrs[1].date, pcrs[1].pcr_count, pcrs[1].pcr_count),
    createData(2, pcrs[2].date, pcrs[2].pcr_count, pcrs[2].pcr_count),
    createData(3, pcrs[3].date, pcrs[3].pcr_count, pcrs[3].pcr_count),
    createData(4, pcrs[4].date, pcrs[4].pcr_count, pcrs[4].pcr_count),
    createData(5, pcrs[5].date, pcrs[5].pcr_count, pcrs[5].pcr_count),
    createData(6, pcrs[6].date, pcrs[6].pcr_count, pcrs[6].pcr_count),
    createData(7, pcrs[7].date, pcrs[7].pcr_count, pcrs[7].pcr_count),
  ];

  function preventDefault(event) {
    event.preventDefault();
  }
  console.log(totalPcrs);
  return (
    <React.Fragment>
      <Title>PCR Reports</Title>
      <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell>Date</TableCell>
            <TableCell>PCR Tets</TableCell>
            <TableCell align="right">Total tests</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.id}>
              <TableCell>{row.date}</TableCell>
              <TableCell>{row.pcrs}</TableCell>
              <TableCell align="right">{totalPcrs - row.totals}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </React.Fragment>
  );
}

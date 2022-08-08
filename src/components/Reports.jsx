import * as React from "react";
import Link from "@mui/material/Link";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Title from "./Title";
import { useState } from "react";
import IconButton from "@mui/material/IconButton";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import { Grid, Tooltip } from "@mui/material";
import { CSVLink, CSVDownload } from "react-csv";

export default function Reports({ pcrs, totalPcrs }) {
  const [showCount, setShowCount] = useState(10);
  const rows = [];

  pcrs?.map((item) =>
    rows.push({
      id: Math.random(),
      date: item?.date,
      pcrs: item?.pcr_count,
      pcrs: item?.pcr_count,
    })
  );

  function preventDefault(event) {
    event.preventDefault();
  }

  return (
    <React.Fragment>
      <Grid container spacing={2}>
        <Grid item xs={8}>
          <Title>PCR Reports</Title>
        </Grid>
        <Grid item xs={4}>
          <CSVLink data={pcrs}>Download pcrs</CSVLink>
        </Grid>
      </Grid>

      <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell>Date</TableCell>
            <TableCell>PCR Tets</TableCell>
            <TableCell>Total tests</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows?.slice(0, showCount).map((row) => (
            <TableRow key={row?.id}>
              <TableCell>{row?.date}</TableCell>
              <TableCell>{row?.pcrs}</TableCell>
              <TableCell>{totalPcrs - row?.totals}</TableCell>
            </TableRow>
          ))}
        </TableBody>
        <Grid margin={1}>
          <Tooltip title="Show more">
            <IconButton
              onClick={() => {
                setShowCount(showCount + 10);
              }}
            >
              <MoreHorizIcon />
            </IconButton>
          </Tooltip>
          <Tooltip title="Show less">
            <IconButton
              color="error"
              onClick={() => {
                setShowCount(10);
              }}
            >
              <MoreHorizIcon />
            </IconButton>
          </Tooltip>
        </Grid>
      </Table>
    </React.Fragment>
  );
}

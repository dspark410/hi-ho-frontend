import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import API from "../../utils/API";
import SubmitBtn from "../SubmitBtn";
import Help from "../Help"
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
      width: "25ch",
    },
    table: {
      minWidth: 650,
    },
  },
}));





export default function APIInput() {
  const classes = useStyles();

  const [location, setLocation] = useState("");
  const [range, setRange] = useState("");
  const [job, setJob] = useState("");
  const [zipResult, setZipResult] = useState([])

  const handleSubmit = (e) => {
    e.preventDefault();
    API.zipRecruiter(job, location, range).then((res) => {
      setZipResult(res.jobs)
      console.log("ziprecruiter",zipResult)
    })

    API.ItemPrices(location).then((res) => {
      console.log("itemprices", res)
    });

    API.CostOfLiving(location).then((res) => {
      console.log("costofliving", res)
    });
  };

  // useEffect(()=>{
  //   console.log("ziprecruiter outside",zipResult)
  // }, [zipResult])


  return (
    <div>
      <form className={classes.root} noValidate autoComplete="off" style={{display: "flex"}}>
      <TextField
        required
        id="outlined-required"
        label="Job Keyword"
        placeholder="ex. Engineer"
        variant="outlined"
        onChange={(e) => setJob(e.target.value)}
        value={job}
      />

      <TextField
        required
        id="outlined-required"
        label="Location"
        placeholder="ex. Berkeley"
        variant="outlined"
        onChange={(e) => setLocation(e.target.value)}
        value={location}
      />


      <TextField
        required
        id="outlined-required"
        label="Mile Radius"
        placeholder="ex. 25"
        variant="outlined"
        onChange={(e) => setRange(e.target.value)}
        value={range}
      />
      <Help />

    </form>
    
      <SubmitBtn handleSubmit={handleSubmit} >Submit</SubmitBtn>


      <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Job Title</TableCell>
            <TableCell align="left">Company</TableCell>
            <TableCell align="left">Location</TableCell>
            <TableCell align="left">Summary</TableCell>
            <TableCell align="left">Days Posted</TableCell>
            <TableCell align="left">Link</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {zipResult.map((row) => (
            <TableRow key={row.id}>
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="left">{row.hiring_company.name}</TableCell>
              <TableCell align="left">{row.location}</TableCell>
              <TableCell align="left">
                <p>
                {row.snippet}
                </p>
                </TableCell>
              <TableCell align="left">{row.job_age}</TableCell>
              <TableCell align="left">
                <a href={row.url} target="_blank">Link</a>
                </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>



    </div>
    
  );
}
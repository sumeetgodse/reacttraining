import Button from '@material-ui/core/Button';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    table: {
      minWidth: 650,
    },
  });

const Records = (props) => {
    const classes = useStyles();

    return (
        <TableContainer style = {{width: "96%", marginLeft: "2%"}} component={Paper}>
        <Table className={classes.table} aria-label="simple table">
        <TableBody>
        <TableRow>
          <TableCell><b>Name</b></TableCell>
          <TableCell><b>Email</b></TableCell>
          <TableCell><b>Date of Birth</b></TableCell>
          <TableCell><b>Education</b></TableCell>
          <TableCell><b>Gender</b></TableCell>
          <TableCell><b>Profile Pic Url</b></TableCell>
          <TableCell><b>Password</b></TableCell>
          <TableCell><b>Confirmed Password</b></TableCell>
        </TableRow>
        {
          props.userData.map((data, i) => {
            return(
              <TableRow key = {i}>
                <TableCell>{data.name}</TableCell>
                <TableCell>{data.email}</TableCell>
                <TableCell>{data.dob}</TableCell>
                <TableCell>{data.education}</TableCell>
                <TableCell>{data.gender}</TableCell>
                <TableCell>{data.profilePicUrl}</TableCell>
                <TableCell>{data.password}</TableCell>
                <TableCell>{data.confirmPassword}</TableCell>
                <TableCell>
                    <Button variant="contained" color="primary" onClick={() => props.handleEdit(i)}>
                        Edit
                    </Button>
                </TableCell>
                <TableCell>
                    <Button variant="contained" color="secondary" onClick={() => props.handleDelete(i)}>
                        Delete
                    </Button>
                </TableCell> 
              </TableRow>
            )
          })
        }
        </TableBody>
        </Table>
        </TableContainer>
    )
}

export default Records;

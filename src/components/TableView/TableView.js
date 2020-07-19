import React, {Component} from 'react';
import Typography from "@material-ui/core/Typography";
import TableContainer from "@material-ui/core/TableContainer";
import Paper from "@material-ui/core/Paper";
import Table from "@material-ui/core/Table";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";
import TableBody from "@material-ui/core/TableBody";
import CircularProgress from "@material-ui/core/CircularProgress";
import IconButton from "@material-ui/core/IconButton";
import DeleteIcon from "@material-ui/icons/Delete";

class TableView extends Component {

    deleteUser =(event, userId)=>{
        event.preventDefault();
        this.props.deleteUser(userId);
    }


    render() {
        return (
            <div>
                <Typography variant="h6" gutterBottom>
                    List of All Users
                </Typography>
                <TableContainer  component={Paper}>
                    <Table aria-label="simple table">
                        <TableHead>
                            <TableRow>
                                <TableCell>Name</TableCell>
                                <TableCell align="left">Email</TableCell>
                                <TableCell align="left">username</TableCell>
                                <TableCell align="left">Phone</TableCell>
                                <TableCell align="left">Actions</TableCell>
                            </TableRow>
                        </TableHead>
                        {
                            this.props.data.length === 0 ?
                                <TableBody>
                                    <CircularProgress/>
                                </TableBody>
                                :
                                <TableBody>
                                    {this.props.data.map((row) => (
                                        <TableRow key={row.name}>
                                            <TableCell component="th" scope="row">
                                                {row.name}
                                            </TableCell>
                                            <TableCell align="left">{row.email}</TableCell>
                                            <TableCell align="left">{row.address.city}</TableCell>
                                            <TableCell align="left">{row.phone}</TableCell>
                                            <TableCell align="left">
                                                <IconButton aria-label="delete">
                                                    <DeleteIcon fontSize="medium" onClick={event => this.deleteUser(event, row.id)}/>
                                                </IconButton>
                                            </TableCell>
                                        </TableRow>
                                    ))}
                                </TableBody>
                        }
                    </Table>
                </TableContainer>
            </div>
        );
    }
}

export default TableView;
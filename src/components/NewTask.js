import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import CheckRoundedIcon from '@material-ui/icons/CheckRounded';
import FormControl from '@material-ui/core/FormControl';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
import Fab from '@material-ui/core/Fab'; 
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import './Login.css';

//inspirado de https://github.com/mui-org/material-ui/ 
export default class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = { descripcion: '', responsable: '', status: '', dueDate: '' };
        this.handleDescripcionChange = this.handleDescripcionChange.bind(this);
        this.handleResponsableChange = this.handleResponsableChange.bind(this);
        this.handleStatusChange = this.handleStatusChange.bind(this);
        this.handleDateChange = this.handleDateChange.bind(this);
    }

    handleDescripcionChange = (e) => {
        this.setState({
            user: e.target.value
        });
    }

    handleResponsableChange = (e) => {
        this.setState({
            pass: e.target.value
        });
    }
    handleStatusChange = (e) => {
        this.setState({
            pass: e.target.value
        });
    }
    handleDateChange = (e) => {
        this.setState({
            pass: e.target.value
        });
    }


    /* 
      handleStatusChange = (e) => {
        e.preventDefault();
        if (this.state.user === localStorage.getItem('user') && this.state.pass === localStorage.getItem('pass')) {
          //alert("jelou");
          //this.props.settrue();
          this.props.changeView();
          localStorage.setItem('isLoggedIn', 'true');
               //alert(localStorage.getItem('isLoggedIn'));
        }
      } */


    render() {
        return (
            <Container component="main" maxWidth="xs">
                <CssBaseline />
                <div className="paper">
                    <Typography component="h1" variant="h3">
                        New Task
                    </Typography>
                    <form className="form">
                        <TextField
                            variant="outlined"
                            margin="normal"
                            required
                            fullWidth
                            id="descripcion"
                            label="descripcion"
                            name="descripcion"
                            autoComplete="descripcion"
                            onChange={this.handleDescripcionChange}
                        />
                        <TextField
                            variant="outlined"
                            margin="normal"
                            required
                            fullWidth
                            name="responsable"
                            label="responsable"
                            type="responsable"
                            id="responsable"
                            onChange={this.handleResponsableChange}
                        />
                        <FormControl margin="normal" required fullWidth>
                            <InputLabel htmlFor="status">Status</InputLabel>
                            <Select
                                labelId="status"
                                id="status"
                                onChange={this.handleStatusChange}
                            >
                            <MenuItem value={"Ready"}>Ready</MenuItem>
                            <MenuItem value={"In Progress"}>In Progress</MenuItem>
                            <MenuItem value={"Done"}>Done</MenuItem>
                            </Select>
                        </FormControl>
                        <TextField
                            variant="outlined"
                            margin="normal"
                            required
                            fullWidth
                            name="dueDate"
                            label="dueDate"
                            type="dueDate"
                            id="dueDate"
                            onChange={this.handleDateChange}
                        />
                        <FormControl margin="normal" required fullWidth>
                            <div style={{ textAlign: "center" }}>
                                <Fab style={{ backgroundColor: "green" }} aria-label="Cancel" >
                                    <CheckRoundedIcon />
                                </Fab>
                            </div>
                        </FormControl>
                    </form>
                </div>
            </Container >
        );
    }

}


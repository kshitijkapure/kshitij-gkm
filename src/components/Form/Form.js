import React, {Component} from 'react';
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import axios from "axios";

class Form extends Component {
    constructor(props) {
        super(props);
        this.state={
            step: 0,
            allUsers : []
        }
    }

    onNext =() =>{
        this.setState({
            step: this.state.step + 1
        })
    }

    onPrev =() =>{
        this.setState({
            step: this.state.step - 1
        })
    }

    handleChange= (event) => {
        this.setState({[event.target.name]: event.target.value})
    }

    createUser =()=>{

        const user = {
            name: this.state.name,
            email: this.state.email,
            address: {
                city: this.state.address
            },
            phone: this.state.phone,
            username: this.state.username,
            company:this.state.company,
            website: this.state.website
        }
        this.props.formData(user)
    }

    render() {
        return (
            <div>
                <Grid container spacing={3}>
                    <Grid item xs={2} sm={2}>
                    </Grid>
                    <Grid item xs={12} sm={8}>
                        <Typography variant="h5" align={"left"}>
                            User Management System
                        </Typography>
                        <Paper style={{padding: '5%', margin: '15px 0'}}>
                            <div>
                                <Typography variant="h6" gutterBottom>
                                    Create New User
                                </Typography>
                                {
                                    this.state.step === 0 ?
                                        <Grid container spacing={3}>
                                            <Grid item xs={12} sm={12}>
                                                <TextField
                                                    variant="outlined"
                                                    required
                                                    id="name"
                                                    name="name"
                                                    label="Name"
                                                    fullWidth
                                                    value={this.state.name}
                                                    onChange={event => this.handleChange(event)}
                                                    autoComplete="given-name"
                                                />
                                            </Grid>
                                            <Grid item xs={12} sm={12}>
                                                <TextField
                                                    variant="outlined"
                                                    required
                                                    id="email"
                                                    name="email"
                                                    label="Email"
                                                    fullWidth
                                                    value={this.state.email}
                                                    onChange={event => this.handleChange(event)}
                                                    autoComplete="email"
                                                />
                                            </Grid>
                                            <Grid item xs={12}>
                                                <TextField
                                                    required
                                                    id="address"
                                                    name="address"
                                                    label="Address"
                                                    fullWidth
                                                    value={this.state.address}
                                                    onChange={event => this.handleChange(event)}
                                                    variant="outlined"
                                                    autoComplete="shipping address-line1"
                                                />
                                            </Grid>
                                            <Grid item xs={12} sm={12}>
                                                <TextField
                                                    variant="outlined"
                                                    required
                                                    id="phone"
                                                    name="phone"
                                                    label="Phone"
                                                    fullWidth
                                                    value={this.state.phone}
                                                    onChange={event => this.handleChange(event)}
                                                    autoComplete="given-phone"
                                                />
                                            </Grid>
                                        </Grid> :
                                        this.state.step === 1 ?
                                            <Grid container spacing={3}>
                                                <Grid item xs={12} sm={12}>
                                                    <TextField
                                                        variant="outlined"
                                                        required
                                                        id="username"
                                                        name="username"
                                                        label="User Name"
                                                        fullWidth
                                                        value={this.state.username}
                                                        onChange={event => this.handleChange(event)}
                                                        autoComplete="given-user-name"
                                                    />
                                                </Grid>
                                                <Grid item xs={12} sm={12}>
                                                    <TextField
                                                        variant="outlined"
                                                        required
                                                        id="company"
                                                        name="company"
                                                        label="Company"
                                                        fullWidth
                                                        value={this.state.company}
                                                        onChange={event => this.handleChange(event)}
                                                        autoComplete="email"
                                                    />
                                                </Grid>
                                                <Grid item xs={12}>
                                                    <TextField
                                                        required
                                                        id="website"
                                                        name="website"
                                                        label="Website"
                                                        fullWidth
                                                        value={this.state.website}
                                                        onChange={event => this.handleChange(event)}
                                                        variant="outlined"
                                                        autoComplete="website"
                                                    />
                                                </Grid>
                                            </Grid>
                                            : ''
                                }
                            </div>
                            <div style={{margin : '10px'}}>
                                <Button disabled={this.state.step === 0} onClick={this.onPrev}>
                                    Back
                                </Button>
                                <Button onClick={this.state.step === 0 ? this.onNext : this.createUser} variant={"contained"} color={"primary"}>
                                    {this.state.step === 0 ? "Next" : "Create New User"}
                                </Button>
                            </div>
                        </Paper>
                    </Grid>
                    <Grid item xs={2} sm={2}>
                    </Grid>
                </Grid>
            </div>
        );
    }
}

export default Form;
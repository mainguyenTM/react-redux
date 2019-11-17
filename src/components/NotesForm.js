import React, {Component} from 'react'
import { connect } from 'react-redux';
import { addNote } from '../actions/note';
import { InputLabel, Input, TextField, Button } from '@material-ui/core';

class NotesForm extends Component{
    constructor(props){
        super(props);
        this.state = {
            title: '',
            note: ''
        }
    }

    handleChange = (e) =>{
        this.setState({[e.target.name]: e.target.value});
    }

    handleSummision = (e) => {
        e.preventDefault();
        this.props.addNote(this.state.title, this.state.content);
        this.clearAllTextFiled();
    }

    clearAllTextFiled = () => {
        this.setState({ title: "", content: "" });
    };

    render(){

        return (
            <form onSubmit={this.handleSummision}>
                <div>
                    <InputLabel>Title</InputLabel>
                    <Input name="title" value={this.state.title} onChange={this.handleChange}></Input>
                </div>
                <div>
                    <TextField
                        id="outlined-textarea"
                        label="Note content"
                        placeholder="Placeholder"
                        multiline
                        margin="normal"
                        variant="outlined"
                        name="content"
                        value={this.state.content}
                        onChange={this.handleChange}
                    />
                </div>
                <div><Button type="submit" variant="contained" color="primary">Add Note</Button></div>
            </form>
        )
    };
}

const mapDispathToProps = {
    addNote: addNote
}

export default connect(
    null,
    mapDispathToProps
)(NotesForm);
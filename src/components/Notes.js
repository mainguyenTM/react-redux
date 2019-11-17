import React, {Component} from 'react';
import {Typography, Box} from '@material-ui/core';
import NotesList from './NotesList';
import NotesForm from './NotesForm';

export default class Notes extends Component{
    render(){
        return(
            <React.Fragment>
                <Typography variant="h3" align="center">Wellcome to Note app!</Typography>
                <Box component="div" p={10}>
                    <NotesForm></NotesForm>
                    <Box mt={5}><NotesList></NotesList></Box>
                </Box>
            </React.Fragment>
        )
    };
}
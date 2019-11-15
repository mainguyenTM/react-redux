import React, {Component} from 'react';
import {Typography, Box} from '@material-ui/core';
import NotesList from './NotesList';
import { blackBright } from 'ansi-colors';

export default class Notes extends Component{
    render(){
        return(
            <React.Fragment>
                <Typography variant="h3" align="center">Wellcome to Note app!</Typography>
                <Box component="div" p={10}>
                    <NotesList></NotesList>
                </Box>
            </React.Fragment>
        )
    };
}
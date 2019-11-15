import React, { Component } from 'react';
import { connect } from 'react-redux';
import { removeNote } from '../actions/note';
import { Box, Grid, Typography, Button } from '@material-ui/core';

class NotesList extends Component {
    removeNote = index => {
        this.props.removeNote(index);
    }

    render(){
        const notesItem = this.props.notes.map((item, index) => (
            <Grid item key={index}>
                <Box bgcolor="#b2dfdb" mb={2} p={2} boxShadow={2}>
                    <Box fontSize={16} fontWeight="fontWeightMedium">{item.title}</Box>
                    <p>{item.content}</p>
                    <Button variant="contained" color="secondary" onClick={() => this.removeNote(index)}>Delete</Button>
                </Box>
            </Grid>
        ))

        return(
            <React.Fragment>
                <Typography variant="h5">Note List</Typography>
                {notesItem}
            </React.Fragment>
        )
    }
}

const mapStateToProps = state =>{
    return {
        notes: state.notes
    }
}

const mapDispatchToProps = {
    removeNote: removeNote
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(NotesList);
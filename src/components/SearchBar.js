
import React, { Component } from 'react'
import { Paper, TextField } from '@material-ui/core'

class SearchBar extends Component {
    state={
        searchTerm:''
    }
    
    handleChange = (event) => {
        this.setState({searchTerm: event.target.value})
    }

    handleSubmit = (event) => {
        const { searchTerm } = this.state
        const { onFormSubmit } = this.props
        onFormSubmit(searchTerm)

        event.preventDefault()

    }

    render() {
        return (
            <div>
                <Paper elevation={6} style={{padding:'20px', marginTop:"20px", marginBottom:"20px", marginLeft:"220px"}}>
                    <form onSubmit={this.handleSubmit}>
                        <TextField fullWidth label="Search here.." onChange={this.handleChange}/>
                    </form>
                </Paper>
            </div>
        )
    }
}

export default SearchBar

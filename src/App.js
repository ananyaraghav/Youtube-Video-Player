import React, {Component} from 'react'
import {Grid} from '@material-ui/core'
import SearchBar from './components/SearchBar'
import VideoList from './components/VideoList'
import VideoDetails from './components/VideoDetails'
import youtube from './api/youtube'


class App extends Component{
  state = {
    videos: [],
    selectedVideo: null
  }

  componentDidMount(){
    this.handleSubmit('Javascript')
  }

  onVideoSelect = (video) => {
    this.setState({selectedVideo: video})
  }

  handleSubmit = async (searchTerm) => {
    const response = await youtube.get('search', {
      params: {
        part: 'snippet',
        maxResults: 8,
        key: 'AIzaSyDfhN-3QAqiVGkP8TQgCIuaa2DMvZW8wzU',
        q: searchTerm
      }
    })
    this.setState({videos: response.data.items, selectedVideo: response.data.items[0]})
  }
  render(){
    const {selectedVideo, videos} = this.state
    return(
      <Grid justify='center' conatiner spacing={10}>
        <Grid item xs={12}>
          <Grid conatiner spacing={10}>
            <Grid item xs={10}>
              <SearchBar onFormSubmit={this.handleSubmit} />
            </Grid>
            <Grid item xs={8}>
              <VideoDetails video={selectedVideo} />
            </Grid>
            <Grid item xs={4} margin="10px" padding='10px'>
              <VideoList videos={videos} onVideoSelect={this.onVideoSelect}/>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    );
  }
}

export default App;

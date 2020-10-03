import React, { Component } from 'react'
import { connect } from 'react-redux';


class SongDetail extends Component {

    render() {
        return (
            <div>
                {(this.props.song) ?
                    <div>
                        <h3> <u> Details for</u> : </h3>
                        <p> <b> Title : </b> {this.props.song.title} </p>
                        <p> <b> Duration : </b> {this.props.song.duration} </p>
                    </div>
                    :
                    <div>
                        <h1>
                            Please Select a song
                    </h1>
                    </div>
                }
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return { song: state.selectedSong }
}

export default connect(mapStateToProps)(SongDetail);

import React from 'react'
import SongList from './SongList'
import SongDetail from './SongDetail'

import '../assets/css/custom.css'
const App = () => {
    return (
        <div className="main">
            <div class="ui inverted vertical masthead center aligned segment h-100 pt-50px">

                <div class="ui text container">
                    <h1 class="ui inverted header"> Redux Play </h1>
                    <h3>Song playlist using redux. Select any song to see details of song.</h3>
                </div>

                <div className="ui container grid">
                    <div className="ui row song-panel">
                        <div className="column eight wide">
                            <SongList />
                        </div>
                        <div className="column eight wide left aligned">
                            <SongDetail />
                        </div>
                    </div>
                </div>
            </div>



        </div>
    )
}

export default App

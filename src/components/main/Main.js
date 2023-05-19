import React from 'react'
import { BsPlus } from 'react-icons/bs';
import './Main.css'

const Main = () => {
  return (
    <div className='main-container'>

        <div className='page-word'>
            <h1 className='party-fun'>Make your party fun!</h1>
            <p className='create-playlist'>Create your own custom playlist today.</p>
            <button className='btn-play'>Create playlist</button>
        </div>

        <div className='card-playlist'>
            <div>
                <div className='card-title'>
                <h2>Trending songs</h2>
                </div>

                <div className='btn-playlist'>
                    <button className='btn-playlist'>
                          
                             <span className='song-title'><h2>Unavailable by 
                            <span style={{fontStyle: 'italic'}}>Davido</span></h2></span>
                        
                         <BsPlus className='icon' size={25} />
                    </button>
                </div>
                <br/>
                <div className='btn-playlist'>
                    <button className='btn-playlist'>
                        
                             <span className='song-title'><h2>Unavailable by 
                            <span style={{fontStyle: 'italic'}}>Davido</span></h2></span>
                        
                        <BsPlus className='icon' size={25}/>
                    </button>
                </div>

                <br/>

                <div className='btn-playlist'>
                    <button className='btn-playlist'>
                      
                             <span className='song-title'><h2>Unavailable by 
                            <span style={{fontStyle: 'italic'}}>Davido</span></h2></span>
                        
                        <BsPlus className='icon' size={25}/>
                    </button>
                </div>

                <br/>

                <div className='btn-playlist'>
                    <button className='btn-playlist'>
                        
                             <span className='song-title'><h2>Unavailable by 
                            <span style={{fontStyle: 'italic'}}>Davido</span></h2></span>
                        
                        <BsPlus className='icon' size={25} />
                    </button>
                </div>

                <br/>

                <div className='btn-playlist'>
                    <button className='btn-playlist'>
                        
                             <span className='song-title'><h2>Unavailable by 
                            <span style={{fontStyle: 'italic'}}>Davido</span></h2></span>
                    
                        <BsPlus className='icon' size={25}/>
                    </button>
                </div>
            </div>
        </div>

    </div>
  )
}

export default Main
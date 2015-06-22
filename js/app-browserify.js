"use strict";


// es5 polyfills, powered by es5-shim
require("es5-shim")
// es6 polyfills, powered by babel
require("babel/register")

var Promise = require('es6-promise').Promise
// just Node?
// var fetch = require('node-fetch')
// Browserify?
// require('whatwg-fetch') //--> not a typo, don't store as a var

// other stuff that we don't really use in our own code
// var Pace = require("../bower_components/pace/pace.js")

// require your own libraries, too!
// var Router = require('./app.js')

// window.addEventListener('load', app)

// function app() {
    // start app
    // new Router()
// }

// SC.initialize({
//   client_id: "5b8f3d60c3820482bc3fdef04ffdde6f",
//   redirect_uri: "http://example.com/callback",
// });

// SC.get("/users/{210097699}/tracks", {limit: 1}, function(tracks){
//   alert("Latest track: " + tracks[0].title);
// });

  


var $ = require('jquery')
var Backbone = require('backbone')
var React = require('react')
var apikey = '5b8f3d60c3820482bc3fdef04ffdde6f'
var qs = (s, d) => (d || document).querySelector(s)

var SoundCloudModel = Backbone.Model.extend({

})

var SoundcloudCollection = Backbone.Collection.extend({
    model: SoundCloudModel,
    initialize: function(optionsObj){
        this.options = optionsObj || ""
        
    },

    url: function() {
        return `https://api.soundcloud.com/tracks?client_id=${apikey}&limit=10&q=${this.options.searchQuery}`
    }

})

SC.initialize({});



SC.stream("/tracks/293", function(sound){
  sound.play();
});




class SoundcloudItem extends React.Component {
    constructor(props){
        super(props)
    }
    render(){
            
  



            var music_url = 'https://api.soundcloud.com/tracks.json?client_id=5b8f3d60c3820482bc3fdef04ffdde6f';
             if(!(music_url)){ 
                music_url = 'https://api.soundcloud.com/tracks/210097699.json?client_id=5b8f3d60c3820482bc3fdef04ffdde6f';
            }

            var url = this.props.item.get('permalink_url'),
            artwork_url = this.props.item.get('artwork_url');
            console.log(artwork_url);
            if(!(artwork_url)){ 
                artwork_url = 'https://worldvectorlogo.com/logos/soundcloud-icon.svg';
            }

            var img = <img src={artwork_url} size= "200" />

            var sounds = <div src={sounds}> </div>

            var track_title = this.props.item.get('title'),
            title = this.props.item.get('title');

            var favorites = this.props.item.get('favoritings_count'),
            favorites = this.props.item.get('favoritings_count');

            var sounds = this.props.item.get('sounds'),
            sounds = this.props.item.get('sounds');

            var username = this.props.item.get('user').username,
            username = this.props.item.get('user').username;

            var plays = this.props.item.get('playback_count'),
            plays = this.props.item.get('playback_count');

            var stream_url = this.props.item.get('stream_url'),
            stream_url = this.props.item.get('stream_url');
            // var player = this.props.item.get()

        return (
            <div>
                <div className="art">
                    <div className="play_pause"> 
                        <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg"  x="0px" y="0px"
                             viewBox="0 0 24 24" enable-background="new 0 0 24 24" >
                        <path d="M10,16.5l6-4.5l-6-4.5V16.5z M12,2C6.5,2,2,6.5,2,12s4.5,10,10,10s10-4.5,10-10S17.5,2,12,2z M12,20c-4.4,0-8-3.6-8-8
                            s3.6-8,8-8s8,3.6,8,8S16.4,20,12,20z"/>
                        </svg>
                    <a href={url}>{img} </a>
                        
                        </div>
                </div>

                <div className="soundbar"> 
                    {track_title} 
                    <div className="soundbar">
                    {username} 
                    </div>
                    <div className="icon_top"> <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg"  x="0px" y="0px"
                     viewBox="0 0 24 24" enable-background="new 0 0 24 24">
                <path d="M12,5V1L7,6l5,5V7c3.3,0,6,2.7,6,6s-2.7,6-6,6s-6-2.7-6-6H4c0,4.4,3.6,8,8,8s8-3.6,8-8S16.4,5,12,5z"/>
                </svg> <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg"  x="0px" y="0px"
                     viewBox="0 0 24 24" enable-background="new 0 0 24 24">
                <path d="M3,9v6h4l5,5V4L7,9H3z M16.5,12c0-1.8-1-3.3-2.5-4V16C15.5,15.3,16.5,13.8,16.5,12z M14,3.2v2.1c2.9,0.9,5,3.5,5,6.7
                    s-2.1,5.9-5,6.7v2.1c4-0.9,7-4.5,7-8.8S18,4.1,14,3.2z"/>
                </svg>
                    </div>


                </div>

                <div className="scrubber"> 
                </div>

                <div className="bottom_bar"> 
                     
                    <div className="icon_bottom"> 
                         <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg"  x="0px" y="0px"
                         viewBox="0 0 24 24" enable-background="new 0 0 24 24" >
                        <path fill="none" d="M0,0h24v24H0V0z"/>
                        <path d="M19.4,10c-0.7-3.4-3.7-6-7.4-6C9.1,4,6.6,5.6,5.3,8C2.3,8.4,0,10.9,0,14c0,3.3,2.7,6,6,6h13c2.8,0,5-2.2,5-5
                        C24,12.4,22,10.2,19.4,10z"/>
                        </svg>
                    </div>


                    <div className="icon_bottom">
                        <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg"  x="0px" y="0px"
                         viewBox="0 0 24 24" enable-background="new 0 0 24 24" >
                        <path d="M12,2C6.5,2,2,6.5,2,12s4.5,10,10,10s10-4.5,10-10S17.5,2,12,2z M10,16.5v-9l6,4.5L10,16.5z"/>
                        </svg>
                    </div>

                    <div className="icon_bottom">
                        {favorites}
                    </div>

                    <div className="icon_bottom">
                        <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
                             viewBox="0 0 24 24" enable-background="new 0 0 24 24">
                            <path d="M12,21.4L10.6,20C5.4,15.4,2,12.3,2,8.5C2,5.4,4.4,3,7.5,3c1.7,0,3.4,0.8,4.5,2.1C13.1,3.8,14.8,3,16.5,3
                            C19.6,3,22,5.4,22,8.5c0,3.8-3.4,6.9-8.6,11.5L12,21.4z"/>
                        </svg>
                    </div>

                    <div className="icon_bottom">
                        {plays}
                    </div>

                </div>
             </div>
        )
    }
}

class SoundcloudItems extends React.Component {
    constructor(props){
        super(props)
        this.props.items.on('sync', () => this.forceUpdate()) //--> Backbone.Collection
    }

    render() {
        return (<div>
            { this.props.items.map((model) => <SoundcloudItem item={model} key={model.id}/>) }
            </div>)
    }
}

class Search extends React.Component {
    constructor(props){
        super(props)
        this.props.view_collection.on('change', () => this.forceUpdate())
        this.state = {
            searchString: " "
        } 
    }


    handleChange(e){
        console.log(e.target);
        console.log(this);
        console.log(this.refs.search_input.getDOMNode().value);
        
        var search_input_value = this.refs.search_input.getDOMNode().value

        
        var new_collection = new SoundcloudCollection({searchQuery: search_input_value})
        console.log(new_collection)
            new_collection.fetch().then((response) => {
                console.log(response[0].title)
                this.props.view_collection.reset()
                console.log(this.props.view_collection);

                this.props.view_collection.add(new_collection.models)
                this.props.view_collection.options.searchQuery = search_input_value
                this.setState({"searchString": search_input_value})
                
            })
    }


    render(){

        var soundcloud_group = this.props.view_collection.models.map( (model) => {

            return <SoundcloudItem item={model}/>
         } )

        return  <div>

                <input type="text"  ref = 'search_input' onBlur={ this.handleChange.bind(this) } placeholder="Search Songs" />
                

                    {soundcloud_group}
                </div>;
    }
}



var sc_collection = new SoundcloudCollection({searchQuery: 'flume'})
// var collection = new SoundcloudCollection()
// React.render(<SoundcloudItems  items={collection} />, qs('.container'))

sc_collection.fetch().then((response) => {
  
    console.log(sc_collection)

    

    React.render(
        <Search view_collection = {sc_collection}/>,
        document.body
    );


})


    // var sc_url = `https://api.soundcloud.com/tracks?client_id=${apikey}`
//             var sound_url = 'https://api.soundcloud.com/tracks.json?client_id=5b8f3d60c3820482bc3fdef04ffdde6f';
//             $.getJSON(url, function(tracks) {
//             $(tracks).each(function(track) {
    
//   }
// })
// SC.initialize({
//   client_id: 'ff508288606264cb4f1469b5ba4f23e8'
// })

// var SC_Collection = Backbone.Collection.extend({
//     query: '',

//     url: function(){
//         return `${sc_url}&q=${this.query}`
//     }
// })

// var collection = new SC_Collection()
// collection.fetch().then(() => {
//     console.log(collection.toJSON())
// })

// class Bottom_bar extends React.Component {
//        constructor(props){
//         super(props)
//     }
//     render(){
//         var  = this.props.item.get('permalink_url'),
//             artwork_url = this.props.item.get('artwork_url'),
//             img = artwork_url ? (<img src={artwork_url} />) : '';

//         return (
//             <a href={url}>
//                 {img}
//             </a>
//         )
//     }
// }

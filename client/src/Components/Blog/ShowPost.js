import React, { Component } from 'react'
import axios from 'axios' 
import OnePost from './OnePost';

class ShowPost extends Component { 
    state = { 
        pageRefresh: false, 
        posts: [] 
    } 

    

    pageRefreser = () => { 
        setTimeout(async () => {
            const result = await axios.get('/api/posts') 
            this.setState({ 
                posts: result.data.data.reverse() 
            }) 
        }, 10) 
    } 



    componentDidMount() { 
        try {
            axios.get('/api/posts') 
                .then(result => { 
                    this.setState({ 
                        posts: result.data.data.reverse() 
                    }) 
                }) 
                .catch(err => { 
                    console.log(err); 
                }) 
        } catch (error) {} 
    } 


    render() { 
        if(this.props.reload) { 
            this.pageRefreser() 
        } 

        return ( 
            <div className="mt-3"> 
                { 
                    this.state.posts.map((post, i) => { 
                        return ( 
                            <OnePost 
                                refreshFun={ this.pageRefreser } 
                                post={post} 
                                key={i} 
                            /> 
                        ) 
                    }) 
                } 
            </div> 
        ) 
    } 
} 

export default ShowPost
import React, { Component } from 'react'
import OneList from './OneList';
import axios from 'axios' 

class ShowTutorials extends Component { 
    state = { 
        articles: [], 
        error: ''
    } 

    componentDidMount() { 
        axios.get('/api/tutorials') 
            .then(result => { 
                this.setState({ 
                    articles: result.data.result 
                }) 
            }) 
            .catch(err => { 
                this.setState({ 
                    error: 'Server error or connection lost' 
                }) 
            }) 
    } 
    
    render() { 
        return ( 
            <div>
                { 
                    this.state.articles.length > 0
                    ?
                    <div 
                        className="mt-3"> 
                        { 
                            this.state.articles.map((article, i) => { 
                                return ( 
                                    <OneList 
                                        article={article} 
                                        key={i} 
                                    /> 
                                ) 
                            }) 
                        } 
                    </div> 
                    :
                    <h1>No tutorial available</h1>
                }
            </div>
        )
    }
}

export default ShowTutorials  
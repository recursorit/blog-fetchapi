import React from 'react'
import axios from 'axios'
import { useState, useEffect } from 'react'
import { Card } from 'react-bootstrap'
import CardColumns from 'react-bootstrap/CardColumns'
import ReactReadMoreReadLess from "react-read-more-read-less";

const cardStyle = {
    width: '22rem',
    height: '30rem',
    marginBottom: '15px',
    marginTop: '50px'
}

const Data = () => {
    const [posts, setPosts] = useState([])

    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/posts')
            .then(res => {
                console.log(res)
                setPosts(res.data)
            })
            .catch(err => {
                console.log(err)
            })
        return () => {

        }
    }, [])

    return (
        <div className='container '>
            <h1 className='text-center mt-3 text-primary'>...</h1>
            <div className='row'>
                <CardColumns>
                    <div className='col-12 col-lg-6 col-md-6 '>
                        {
                            posts.map((post, id) => {
                                // console.log(id)
                                return (<Card className='externalcard' style={cardStyle} key={post.id}>
                                    <Card.Img variant="top" src={'https://source.unsplash.com/random/286x180?sig=' + (id)} />

                                    <Card.Body>
                                        <Card.Title className='cardtitle py-3 text-capitalize '>{post.title}</Card.Title>
                                        <Card.Text className='cardbody'>
                                            <ReactReadMoreReadLess
                                                charLimit={50}
                                                readMoreText={"Read more ▼"}
                                                readLessText={"Read less ▲"}
                                            >
                                                {post.body}
                                            </ReactReadMoreReadLess>
                                        </Card.Text>
                                    </Card.Body>
                                </Card>)
                            })}
                    </div>
                </CardColumns>
            </div>
        </div>
    )
}

export default Data
// https://source.unsplash.com/286x180/?technology,developer,devices+ toString(index)}
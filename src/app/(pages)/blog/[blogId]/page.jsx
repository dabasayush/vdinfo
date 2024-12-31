"use client"

import React from 'react'
import useSinglePost from '../../../../hooks/useSinglePost'
import LoaderSpinner from '../../../../components/loader/LoaderSpinner';
import { Container, Row, Col, Card } from 'react-bootstrap';

export default function SinglePost({params}) {
    const {blogId} = params;
    console.log(blogId)
    const {singlePost, isLoading, isError} = useSinglePost(blogId)
    console.log("single post" ,singlePost)
    if(isLoading) return <LoaderSpinner />
    
    
  return (
    <div>
        <Container className="my-5">
            <Row className="justify-content-center">
                <Col md={8}>
                    <Card>
                        <Card.Img src={singlePost?.post?.url|| ""} />
                        <Card.Body>
                            <Card.Title>{singlePost?.post?.title}</Card.Title>
                            {/* <Card.Subtitle className="mb-2 text-muted">
                                {new Date(post?.date).toLocaleDateString()}
                            </Card.Subtitle> */}
                            <Card.Text style={{color:"black"}}>{singlePost?.post?.description}</Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    </div>
  )
}

"use client"
import React from 'react'
import BlogCard from '../../../../../componentsAdmin/cards/BlogCard'
// import data from '../../../../../lib/data'
import useAllPosts from '../../../../../hooks/useAllPosts';
import { Container } from 'react-bootstrap';
import LoaderSpinner from '../../../../../components/loader/LoaderSpinner'

export default function Blog() {

    // const {posts} = data; 
    const {data, isError, isLoading} = useAllPosts();
    if (isError) return <><h3>Failed to load!</h3></>
    if (isLoading) return <LoaderSpinner />
    return (
        <Container>
            <div>
                <h1>blogs</h1>
                <div style={{display:"grid", gridTemplateColumns:"repeat(4, 1fr)"}}>
                    {
                        data?.posts?.length > 0 ? data?.posts.map((post, id) => (
                            <BlogCard post={post} key={id}/>
                        )) :
                        <> <h3>No post found!</h3></>
                    }
                </div>
            </div>
        </Container>
    )
}

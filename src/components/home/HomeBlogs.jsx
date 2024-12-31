import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import BlogCard from '../Cards/BlogCard/BlogCard'
import styles from './styles.module.scss'
import { DUMMY_POSTS } from '../../../DUMMY_DATA'
import Link from 'next/link'

export default function HomeBlogs({post}) {
    // console.log("post", post)
  return (
    <section className={styles.home_blogs}>
        <Container className={styles.home_blogs__container}>
            <Row className={styles.home_blogs__content}>
                <Col md={12}>
                    <h3 className='text-center text-uppercase'>From 
                    <span> The Blogs</span>
                    </h3>
                </Col>
            </Row>

            <Row>
                {
                    post?.posts.slice(0,3).map((post, id) => (
                        <Col key={id} className='mt-4 pt-4' lg={4} md={6}>
                            <Link href={`/blog/${post._id}`}>
                                <BlogCard post={post}/>
                            </Link>
                        </Col>
                    ))
                }
            </Row>
        </Container>
    </section>
  )
}

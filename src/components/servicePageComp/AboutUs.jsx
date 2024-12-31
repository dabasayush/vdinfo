import React from 'react'
import { Col, Row } from 'react-bootstrap'

import styles from "./styles.module.scss"

export default function AboutUs() {
  return (
    <div className={styles.about_us}>
        <Row>
            <Col>
                <h1 className='text-center'>
                    About <span>Us</span>
                </h1>
            </Col>
        </Row>
        <Row>
            <Col>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime animi nihil voluptas quis maiores voluptatibus dolores placeat expedita non doloremque? Rerum doloremque quo natus sequi laborum at expedita, cumque quasi blanditiis corporis, dolor odit, ea neque molestias molestiae adipisci omnis nemo iusto reiciendis exercitationem. Commodi quidem beatae harum aperiam exercitationem? Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae ducimus voluptatem, earum laudantium tempora unde explicabo consequuntur, hic magni suscipit libero maxime illum! Molestiae corrupti aspernatur expedita dicta, placeat, alias voluptatibus consequatur repellendus nihil sequi recusandae nesciunt, velit maiores quo maxime commodi odio omnis eius consectetur excepturi debitis mollitia doloremque?
                </p>
            </Col>
        </Row>
    </div>
  )
}

import Container from 'react-bootstrap/Container';
import { useState } from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import InfoModal from "../components/modal"

function Majors () {
    
    const getDescription = () => {
        
    }

    let test_description = "In this program, you'll take courses such as the mathematics of finance, risk theory, and pension mathematics taught by professional actuaries in one of North America’s top actuarial schools. \n \n Waterloo Actuarial Science graduates commonly pursue careers in finance, management, education, actuary, risk analysis, and consulting. They often work at insurance companies, financial institutions, schools, and more \n \n Jobs that students pursue after graduation include: \n • Financial Business Analyst \n • Senior Actuarial Analyst \n • Advisory Analyst \n • Risk Modeling Analyst"

    return (
        <>
            <div style={{ 
                background: 'linear-gradient(90deg,#6488ea,#102c7a)',
                minHeight: '100vh'
                }}>
            <Container>
                <Row className="mb-4" style={{paddingTop: '20px'}}>
                    <Col>
                        <Card bg="dark" text= "light" style={{ width: '18rem' }}>
                            <Card.Img variant="top" src="../assets/applied.jpg" />
                            <Card.Body>
                                <Card.Title>Acturial Science</Card.Title>
                                <InfoModal major="Acturial Science" description={test_description}></InfoModal>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card bg="dark" text= "light" style={{ width: '18rem' }}>
                            <Card.Img variant="top" src="holder.js/100px180" />
                            <Card.Body>
                                <Card.Title>Applied Math</Card.Title>
                                <InfoModal major="Acturial Science" description="test"></InfoModal>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card bg="dark" text= "light" style={{ width: '18rem' }}>
                            <Card.Img variant="top" src="holder.js/100px180" />
                            <Card.Body>
                                <Card.Title>Biostatistics</Card.Title>
                                <InfoModal major="Acturial Science" description="test"></InfoModal>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
                <Row className="mb-4">
                    <Col>
                        <Card bg="dark" text= "light" style={{ width: '18rem' }}>
                            <Card.Img variant="top" src="holder.js/100px180" />
                            <Card.Body>
                                <Card.Title>Combinatorics and Optimization</Card.Title>
                                <InfoModal major="Acturial Science" description="test"></InfoModal>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card bg="dark" text= "light" style={{ width: '18rem' }}>
                            <Card.Img variant="top" src="holder.js/100px180" />
                            <Card.Body>
                                <Card.Title>Computational Mathematics</Card.Title>
                                <InfoModal major="Acturial Science" description="test"></InfoModal>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card bg="dark" text= "light" style={{ width: '18rem' }}>
                            <Card.Img variant="top" src="holder.js/100px180" />
                            <Card.Body>
                                <Card.Title>Data Science</Card.Title>
                                <InfoModal major="Acturial Science" description="test"></InfoModal>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
                <Row className="mb-4">
                    <Col>
                        <Card bg="dark" text= "light" style={{ width: '18rem' }}>
                            <Card.Img variant="top" src="holder.js/100px180" />
                            <Card.Body>
                                <Card.Title>Mathematical Economics</Card.Title>
                                <InfoModal major="Acturial Science" description="test"></InfoModal>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card bg="dark" text= "light" style={{ width: '18rem' }}>
                            <Card.Img variant="top" src="holder.js/100px180" />
                            <Card.Body>
                                <Card.Title>Mathematical Finance</Card.Title>
                                <InfoModal major="Acturial Science" description="test"></InfoModal>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card bg="dark" text= "light" style={{ width: '18rem' }}>
                            <Card.Img variant="top" src="holder.js/100px180" />
                            <Card.Body>
                                <Card.Title>Mathematical Optimization</Card.Title>
                                <InfoModal major="Acturial Science" description="test"></InfoModal>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
                <Row className="mb-4" style={{paddingBottom: '20px'}}>
                    <Col>
                        <Card bg="dark" text= "light" style={{ width: '18rem' }}>
                            <Card.Img variant="top" src="holder.js/100px180" />
                            <Card.Body>
                                <Card.Title>Mathematical Physics</Card.Title>
                                <InfoModal major="Acturial Science" description="test"></InfoModal>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card bg="dark" text= "light" style={{ width: '18rem' }}>
                            <Card.Img variant="top" src="holder.js/100px180" />
                            <Card.Body>
                                <Card.Title>Pure Mathematics</Card.Title>
                                <InfoModal major="Acturial Science" description="test"></InfoModal>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card bg="dark" text= "light" style={{ width: '18rem' }}>
                            <Card.Img variant="top" src="holder.js/100px180" />
                            <Card.Body>
                                <Card.Title>Statistics</Card.Title>
                                <InfoModal major="Acturial Science" description="test"></InfoModal>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
            </div>
        </>
    )
}

export default Majors;
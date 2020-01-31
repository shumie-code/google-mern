import React from "react";
import { Col, Row, Container } from "../components/Grid";
import Jumbotron from "../components/Jumbotron";

function NoMatch() {
    return (
        <Container fluid>
            <Row>
                <Col size="md-12">
                    <Jumbotron>
                        <h1 className="text-center">404 no page exists</h1>
                        <h1 className="text-center">
                            <span role="img" aria-label="Face with rolling eyes emoji">
                            🙄
                            </span>
                        </h1>
                    </Jumbotron>
                </Col>
            </Row>
        </Container>
    );
}

export default NoMatch;
'use client';

import React, {useEffect, useState} from 'react';
import {Card, Button, Container, Badge, Row, Col} from 'react-bootstrap';
//import WebApp from "@twa-dev/sdk";

export interface Dungeon {
    id: number;
    name: string;
    level: number;
}

interface DungeonListProps {
    dungeons: Dungeon[];
}

const DungeonList: React.FC<DungeonListProps> = ({dungeons}) => {
    return (
        <Container className="mt-4">{window.Telegram.WebApp.version}
            <Row className="g-3">
                {dungeons.map(dungeon => (
                    <Col key={dungeon.id} xs={12} sm={6} md={3}>
                        <Card>
                            <Card.Body>
                                <Card.Title>{dungeon.name}</Card.Title>
                                <Card.Text>Уровень - <Badge bg="secondary">{dungeon.level}</Badge></Card.Text>
                                <Button variant="primary" className="mt-1">Войти</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>
        </Container>
    );
};

export default DungeonList;
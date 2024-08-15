import React from 'react';
import { ProgressBar, Badge, Container } from 'react-bootstrap';

interface ExperienceBarProps {
    experience: number;
    maxExperience: number;
    level: number;
}

const ExperienceBar: React.FC<ExperienceBarProps> = ({ experience, maxExperience, level }) => {
    const percent = Math.min((experience / maxExperience) * 100, 100);

    return (
        <Container fluid="sm"
                   className="mt-4">
            <div className="d-flex justify-content-between align-items-center mb-2">
                <h5>Level: <Badge bg="secondary">{level}</Badge></h5>
                <span>{experience}/{maxExperience} XP</span>
            </div>
            <ProgressBar now={percent}
                         label={`${percent.toFixed(0)}%`} />
        </Container>
    );
};

export default ExperienceBar;
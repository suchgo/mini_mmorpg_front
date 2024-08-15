import React from 'react';
import { Container, Alert } from 'react-bootstrap';

const ErrorPage: React.FC = () => (
    <Container className="flex justify-content-center align-items-center vh-100">
        <Alert variant="danger">
            Ошибка загрузки данных. Проверьте соединение с интернетом или попробуйте снова позже.
        </Alert>
    </Container>
);

export default ErrorPage;
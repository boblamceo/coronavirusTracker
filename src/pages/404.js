import React from 'react';

import Layout from 'components/Layout';
import Container from 'components/Container';

const NotFoundPage = () => {
    return (
        <Layout>
            <Container type="content" className="text-center">
                <h1 style={{ backgroundColor: 'red' }}>Uncaught ReferenceError: 404 error lol at anonymous:1:1</h1>
            </Container>
        </Layout>
    );
};

export default NotFoundPage;

import React, { Component } from 'react';
import { clearFix } from 'polished';
import styled from 'styled-components';

const Container = styled.div`
    width: 100%;
    min-height: 100px;
    background-color: #fffad0;
    ${clearFix()};
`;

class App extends Component {
    constructor(props) {
        super(props);
        console.log('App constructor');
    }

    componentWillMount() {
        console.log('Layout component will mount');
    }

    componentDidMount() {
        console.log('Layout component did mount');
    }

    componentWillUnmount() {
        console.log('Layout component will unmount');
    }

    render() {
        // eslint-disable-next-line no-undef
        console.log('LTI', $LTI_VARS);

        return (
            <Container>
                This is a component for App
                {$LTI.courseID}
                <br />
                {$LTI.userID}
                <br />
                {$LTI.user_role}
                <br />
            </Container>
        );
    }
}

export default App;

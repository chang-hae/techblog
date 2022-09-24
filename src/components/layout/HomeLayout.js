import * as React from 'react';
import CommonLayout from './CommonLayout';
import { Title } from './CommonLayoutItem';

const Header = ({ title }) => {
    return (
        <>
            <Title>{title}</Title>
        </>
    );
}

const HomeLayout = (props) => {
    const { title, content } = props;
    return (
        <CommonLayout
            header={<Header title={title} />}
            content={content}        
        />
    )
}

export default HomeLayout;
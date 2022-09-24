import * as React from 'react';
import CommonLayout from './CommonLayout';
import { Author, Datetime, Nickname, Profile, Title } from './CommonLayoutItem';

const Header = ({ title, datetime }) => {
    return (
        <>
            <Title>{title}</Title>
            <Author>
                <Datetime>{datetime}</Datetime>
                <Nickname>ChangHae</Nickname>
                <Profile src="/images/changhae.png" />
            </Author>
        </>
    );
}

const PostLayout = (props) => {
    const { title, datetime, content } = props;
    return (
        <CommonLayout
            header={<Header title={title} datetime={datetime} />}
            content={content}        
        />
    )
}

export default PostLayout;
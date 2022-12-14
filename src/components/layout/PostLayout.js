import * as React from 'react';
import CommonLayout from './CommonLayout';
import { Author, Datetime, Nickname, Profile, Title, Underline } from './CommonLayoutItem';

const Header = ({ title, datetime }) => {
    return (
        <>
            <Underline>
                <Title>{title}</Title>
            </Underline>
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
            content={<>
                {content}
                <Underline />
            </>}
        />
    )
}

export default PostLayout;
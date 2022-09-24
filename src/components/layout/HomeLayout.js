import * as React from 'react';
import CommonLayout from './CommonLayout';
import { BigProfile, FlexRowContainer, Title, Underline } from './CommonLayoutItem';

const Header = ({ title }) => {
    return (
        <Underline>
            <FlexRowContainer>
                <Title>{title}</Title>
                <BigProfile src="/images/changhae.png" />
            </FlexRowContainer>
        </Underline>
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
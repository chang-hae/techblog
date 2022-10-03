import * as React from 'react';
import { ThemeContext } from '../../context/Theme';
import { StyledLink } from '../layout/CommonLayoutItem';
import { Datetime, Division, FlexContainer, Title, Wall, PostCardWrapper } from './PostCardLayoutItem';

const PostCardLayout = (props) => {
    const { primary } = React.useContext(ThemeContext);
    
    const { no, title, division, datetime } = props;

    return (
        <PostCardWrapper primary={primary}>
            <StyledLink to={`/${no}`} primary={primary} >
                <FlexContainer>
                    <Datetime>
                        {datetime}
                    </Datetime>
                    <Wall>|</Wall>
                    <Division>
                        {division}
                    </Division>
                    <Wall>|</Wall>
                    <Title>
                        {title}
                    </Title>
                </FlexContainer>
            </StyledLink>
        </PostCardWrapper>
    )
}

export default PostCardLayout;
import * as React from 'react';
import { ThemeContext } from '../../context/Theme';
import { Datetime, Division, FlexContainer, StyledLink, Title, Wall, Wrapper } from './PostCardLayoutItem';

const PostCardLayout = (props) => {
    const { primary } = React.useContext(ThemeContext);
    
    const { no, title, division, datetime } = props;

    return (
        <Wrapper primary={primary}>
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
        </Wrapper>
    )
}

export default PostCardLayout;
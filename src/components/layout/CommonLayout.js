import * as React from 'react';
import { useRecoilValue } from 'recoil';
import { ThemeContext } from '../../context/Theme';
import { postState } from '../../store/atom';
import PostCardList from '../card/PostCardList';
import { Content, ContentContainer, NavigationBar, NavigationContainer, FlexContainer, Header, Container, NavigationTitle, NavigationIconLink, NavigationLinks, StyledLink } from './CommonLayoutItem';

const Navigation = ({ primary }) => {
    return (
        <NavigationContainer>
            <NavigationBar>
                <NavigationTitle>
                    <StyledLink to="/" primary={primary}>
                        창해 기술블로그
                    </StyledLink>
                </NavigationTitle>
                <NavigationLinks>
                    <a target="_blank" href="https://www.youtube.com/channel/UCE5SXo5FWYFVWEzeh39c-JA">
                        <NavigationIconLink src="/icons/youtube.png" />
                    </a>
                </NavigationLinks>
            </NavigationBar>
        </NavigationContainer>
    );
}

const CommonLayout = (props) => {
    const postCards = useRecoilValue(postState);
    const { primary } = React.useContext(ThemeContext);
    const { header, content } = props;
    return (
        <Container>
            <Navigation primary={primary} />
            <FlexContainer>
                {
                    !!header
                        ? <Header>
                            {header}
                        </Header>
                        : null
                }
                {
                    !!content
                        ? <ContentContainer>
                            <Content>
                                {content}
                            </Content>
                        </ContentContainer>
                        : null
                }
            </FlexContainer>
            <PostCardList postCards={postCards} />
        </Container>
    )
}

export default CommonLayout;
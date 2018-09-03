import styled from 'react-emotion';
import { Link } from 'gatsby';

const StyledLink = styled(Link)`
    color: rgba(255, 255, 255, 0.6);
    font-size: 1em;
    font-weight: 400;
    text-transform: uppercase;
    letter-spacing: .1em;
    text-decoration: none;
    -webkit-transition-duration: 0.4s;
    transition-duration: 0.4s; 
    &:hover {
        color:  rgba(255, 255, 255, 1);;
    }
`;

export default StyledLink;
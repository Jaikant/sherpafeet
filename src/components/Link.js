import styled from 'react-emotion';
import { Link } from 'gatsby';

const Link_ = styled(Link)`
    text-decoration:none;
    color:rgba(59,89,152,.6);
    &:hover {
      color: #23527c;
    }
    font-size:18px;
`
export default Link_;
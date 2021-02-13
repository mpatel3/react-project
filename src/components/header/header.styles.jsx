import styled, {css } from 'styled-components';
import {Link} from 'react-router-dom';

// css blocks
const optionCommonStyles = css`
    padding: 5px;
`;

export const HeaderContainer = styled.div`
    display: block;
`;

// <Link className = "logo-container" to="/"></Link>
// will be replaced with
// <LogoContainer to="/"></LogoContainer>

export const LogoContainer = styled(Link)`
    padding: 5px;
`;

// <Link className=""></Link>
// <Component1 to="/"></Component1>

export const Component1 = styled(Link)`
    ${optionCommonStyles}
`;

// <div className=""></div>
// <Component2 to="/"></Component2>
// OR
// <Component1 as='div' to="/"></Component1> // if using this way then below code is not required.
export const Component2 = styled.div`
    ${optionCommonStyles}
`;
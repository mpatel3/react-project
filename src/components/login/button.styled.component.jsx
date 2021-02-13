import styled, {css} from 'styled-components';
// common css property OR basic css property.
const buttonStyles = css`
    color: inherit;
`;

const invertedStyledButton = css`
    background-color: white;
    &:hover {}
`;

const googleSignInStyles = css`
    background-color: red;
    &:hover {}
`;
// as this is JSX, we can write JS.
const getButtonStyles = props => {
    // if props received with googgleSignIn as true
    if(props.googleSignIn) {
        return googleSignInStyles;
    }
    // if props received with inverted as true.
    props.inverted ? invertedStyledButton : buttonStyles
}

/**
 * @description - common style will render and other style will render depending upon the props we are passing
 */
export const CustomButtonContainer = styled.button`
    display:block;

    &:hover {
        display: block;
        ${getButtonStyles}
    }
`;

// Usage
// <CustomButtonContainer googleSignIn='true' inverted='false'></CustomButtonContainer>


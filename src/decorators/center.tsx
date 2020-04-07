import * as React from 'react';
import styled from 'styled-components';

interface Props {}

const Wrapper = styled.div`
  background: ${(props) => props.theme.colors.backgroundBlue};
`;

const BackgroundBlue: React.FunctionComponent<Props> = ({ children }) => {
  return <Wrapper>{children}</Wrapper>;
};

export default BackgroundBlue;

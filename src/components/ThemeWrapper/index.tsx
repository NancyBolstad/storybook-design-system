import * as React from 'react';
import { ThemeProvider } from 'styled-components';
import { defaultTheme } from '../../util/defaultTheme';
import { GlobalStyle } from './styles';

export interface Props {}

const ThemeWrapper: React.FunctionComponent<Props> = ({ children }) => (
  <ThemeProvider theme={defaultTheme}>
    <div>
      <GlobalStyle />
        <div>{children}</div>
    </div>
  </ThemeProvider>
);

export default ThemeWrapper;

import React from 'react';

import styled from 'styled-components/native';

export const AuthButText = styled.Text<{
  size: string;
}>`
  font-size: ${props => (props.size === 'small' ? '16px' : '30px')};
  color: rgb(255, 255, 255);
  font-weight: 900;
`;

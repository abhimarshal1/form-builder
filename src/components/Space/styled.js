import styled, { css } from 'styled-components';

const flexStyles = css`
  display: flex;
  flex-direction: ${(props) => props.direction && props.direction};
  gap: ${(props) => (props.gap ? props.gap * 8 : 0)}px;
  flex-wrap: ${(props) => props.wrap && 'wrap'};
  align-items: ${(props) => props.alignItems && props.alignItems};
  justify-content: ${(props) => props.justifyContent && props.justifyContent};
`;

export const Space = styled.div`
  ${flexStyles}
`;

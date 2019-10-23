import {css} from 'react-emotion';
import styled from '../../themes/styled';

const Notification = styled.span`
  align-items: center;
  display: flex;
  font-weight: 900;
  font-size: 0.85rem;
  justify-content: center;
  height: 1.75rem;
  width: 1.75rem;
  position: absolute;
  right: 2em;
  border-radius: 1.75rem;
`;

export const Marketing = styled(Notification)`
  background-color: rgb(27, 188, 155);
  color: rgb(27, 32, 35);
`;

export const Counter = styled(Notification)`
  background-color: ${({theme}) => theme.colors.reds.base};
  color: white;
`;

const hideOnOpen = ({opened}) =>
  opened &&
  css`
    color: transparent;
    background-color: transparent;
    box-shadow: none;
  `;

export const NotificationCounter = styled(Counter)`
  position: absolute;
  z-index: 2;
  top: 15px;
  right: 10px;
  box-shadow: 0px 0px 1px 5px #373c43;
  cursor: pointer;
  user-select: none;

  ${hideOnOpen}

  @media screen and (min-width: ${props => props.theme.breakpoints.large}) {
    visibility: hidden;
  }
`;
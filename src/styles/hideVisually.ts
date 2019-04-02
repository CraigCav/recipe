import {css} from 'emotion';

const visuallyHidden = css`
  border: 0;
  clip: rect(0 0 0 0);
  clip-path: inset(50%);
  height: 1px;
  margin: -1px;
  overflow: hidden;
  padding: 0;
  position: absolute;
  white-space: nowrap;
  width: 1px;
`;

function hideVisually() {
  return visuallyHidden;
}

export default hideVisually;

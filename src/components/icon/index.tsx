import * as React from 'react';
import styled       from '../../config/styled';
import '../../../static/t721-icons/t721-icons.less';

export interface IconProps extends React.ComponentProps<any> {
  color?: string;
  icon: string;
  size: string;
}

const IconSpan = styled.span<IconProps>`
  display: block;
  flex-shrink: 0;
  color: ${props => props.color ? props.color : props.theme.primaryColor};
  font-size: ${props => props.size};
  transition: all 300ms ease;
`;

export const Icon: React.FunctionComponent<IconProps & {className?: string}> = (props: IconProps): JSX.Element => {
  return <IconSpan className={`t721-font-${props.icon} ${props.className}`} />
};

Icon.defaultProps = {
  size: '24px',
};

export default Icon;

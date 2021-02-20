/* tslint:disable */
/* eslint-disable */

import React, { FunctionComponent } from 'react';
import { ViewProps } from 'react-native';
import { Svg, GProps, Path } from 'react-native-svg';
import { getIconColor } from './helper';

interface Props extends GProps, ViewProps {
  size?: number;
  color?: string | string[];
}

let IconZiyuan: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1280 1024" width={size} height={size} {...rest}>
      <Path
        d="M640.00224 256m-64 0a64 64 0 1 0 128 0 64 64 0 1 0-128 0Z"
        fill={getIconColor(color, 0, '#333333')}
      />
      <Path
        d="M1024.00224 640m-64 0a64 64 0 1 0 128 0 64 64 0 1 0-128 0Z"
        fill={getIconColor(color, 1, '#333333')}
      />
      <Path
        d="M256.00224 640m-64 0a64 64 0 1 0 128 0 64 64 0 1 0-128 0Z"
        fill={getIconColor(color, 2, '#333333')}
      />
      <Path
        d="M323.20224 323.2a64 64 0 1 0 90.56 0 64 64 0 0 0-90.56 0zM956.80224 323.2a64 64 0 1 0 0 90.56 64 64 0 0 0 0-90.56z"
        fill={getIconColor(color, 3, '#333333')}
      />
      <Path
        d="M1092.48224 187.52A640 640 0 0 0 0.00224 640a634.88 634.88 0 0 0 128 384l91.52-91.52A512 512 0 0 1 1001.92224 278.08a512 512 0 0 1 58.24 654.4L1152.00224 1024a640 640 0 0 0-59.52-836.48z"
        fill={getIconColor(color, 4, '#333333')}
      />
      <Path
        d="M556.80224 752a96 96 0 0 0 166.4 96c26.56-45.76 92.8-352 92.8-352s-232.64 210.24-259.2 256z"
        fill={getIconColor(color, 5, '#333333')}
      />
    </Svg>
  );
};

IconZiyuan.defaultProps = {
  size: 15,
};

IconZiyuan = React.memo ? React.memo(IconZiyuan) : IconZiyuan;

export default IconZiyuan;

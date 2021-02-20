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

let IconShezhi: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1030 1024" width={size} height={size} {...rest}>
      <Path
        d="M943.321212 577.163636c12.412121 18.618182 31.030303 31.030303 55.854546 37.236364 6.206061 0 12.412121 6.206061 12.412121 6.206061 6.206061 6.206061 18.618182 18.618182 18.618182 31.030303v24.824242c-6.206061 24.824242-12.412121 43.442424-24.824243 62.060606l-6.20606 12.412121c-6.206061 12.412121-12.412121 18.618182-24.824243 24.824243-6.206061 6.206061-18.618182 6.206061-24.824242 6.20606-6.206061 0-12.412121 0-18.618182-6.20606-18.618182-6.206061-37.236364-6.206061-55.854546-6.206061h6.206061-12.412121c-18.618182 0-31.030303 6.206061-43.442424 12.412121 0 0-12.412121 6.206061-24.824243 18.618182-12.412121 12.412121-24.824242 37.236364-24.824242 62.060606 0 18.618182 0 37.236364 12.412121 62.060606 6.206061 12.412121 6.206061 31.030303-6.206061 43.442425-12.412121 12.412121-24.824242 18.618182-37.236363 24.824242-6.206061 6.206061-37.236364 18.618182-68.266667 24.824242 37.236364-6.206061 12.412121 0-12.412121 0h-6.206061c-6.206061 0-12.412121 0-18.618182-6.20606-6.206061-6.206061-12.412121-12.412121-12.412121-24.824243v6.206061c-12.412121-31.030303-31.030303-55.854545-55.854545-68.266667 0-6.206061-24.824242-12.412121-49.648485-12.412121s-49.648485 6.206061-68.266667 24.824243c-24.824242 18.618182-43.442424 43.442424-49.648485 74.472727 0-6.206061-6.206061 0-12.412121 0 0 0-12.412121 6.206061-18.618182 6.20606-12.412121 0-18.618182 0-37.236363-6.20606-12.412121-6.206061-24.824242-6.206061-37.236364-12.412121l-37.236364-18.618182c-12.412121-6.206061-18.618182-12.412121-24.824242-24.824243-6.206061-6.206061-6.206061-12.412121-6.206061-18.618181 0-6.206061 0-18.618182 6.206061-31.030304 6.206061-6.206061 12.412121-24.824242 12.412121-49.648484s-12.412121-43.442424-31.030303-62.060606c-12.412121-12.412121-24.824242-18.618182-43.442424-24.824243h-24.824242-6.206061c-12.412121 0-31.030303 6.206061-49.648485 6.206061h-12.412121c-6.206061 0-12.412121 0-18.618182-6.206061-6.206061 0-12.412121-12.412121-24.824242-18.618182-18.618182-31.030303-31.030303-68.266667-37.236364-105.50303v-6.206061c0-18.618182 12.412121-24.824242 24.824242-31.030303 24.824242-6.206061 43.442424-24.824242 62.060606-43.442424 18.618182-6.206061 24.824242-31.030303 24.824243-55.854545s-6.206061-49.648485-24.824243-68.266667C62.060606 415.806061 31.030303 397.187879 0 390.981818c18.618182 6.206061 12.412121 0 12.412121-6.20606-6.206061-6.206061-6.206061-18.618182-6.20606-24.824243 0-6.206061 0-18.618182 6.20606-31.030303 6.206061-24.824242 18.618182-49.648485 31.030303-68.266667-12.412121 24.824242-6.206061 12.412121 0 6.206061 0-12.412121 6.206061-18.618182 12.412121-24.824242 6.206061 0 6.206061-6.206061 12.412122-6.206061s12.412121 0 18.618181 6.206061c24.824242 6.206061 49.648485 12.412121 74.472728 6.20606 24.824242 0 43.442424-12.412121 62.060606-31.030303 12.412121-12.412121 18.618182-24.824242 18.618182-43.442424 6.206061 0 6.206061-12.412121 6.20606-24.824242v-18.618182-18.618182c0-18.618182-6.206061-43.442424-12.412121-62.060606 6.206061 31.030303 0 18.618182 0 6.20606v0c12.412121-6.206061 18.618182-12.412121 31.030303-18.618181l37.236364-18.618182c12.412121-6.206061 24.824242-6.206061 37.236363-12.412121 12.412121-6.206061 24.824242-6.206061 31.030303-6.206061 12.412121 0 18.618182 0 24.824243 12.412121 6.206061 6.206061 12.412121 18.618182 12.412121 31.030303 6.206061 12.412121 18.618182 24.824242 37.236364 43.442424s37.236364 24.824242 62.060606 24.824243 49.648485-6.206061 68.266666-18.618182c24.824242-24.824242 37.236364-43.442424 43.442425-68.266667 0-6.206061 6.206061-12.412121 12.412121-18.618181 6.206061 0 12.412121-6.206061 18.618182-6.206061 12.412121 0 18.618182 0 31.030303 6.206061 12.412121 0 24.824242 6.206061 37.236363 12.412121 12.412121 6.206061 24.824242 12.412121 31.030303 18.618182 12.412121 6.206061 18.618182 18.618182 24.824243 24.824242 0 6.206061 6.206061 6.206061 6.20606 12.412121v6.206061c0 6.206061-6.206061 18.618182-6.20606 24.824242 0 6.206061-6.206061 24.824242-6.206061 37.236364v18.618182c6.206061 24.824242 12.412121 43.442424 31.030303 62.060606 18.618182 18.618182 37.236364 24.824242 62.060606 31.030303 24.824242 0 49.648485 0 68.266667-12.412121 6.206061 0 12.412121-6.206061 18.618182-6.206061h6.20606c6.206061 0 18.618182 6.206061 24.824243 12.412121 12.412121 12.412121 18.618182 24.824242 31.030303 43.442424 6.206061 18.618182 12.412121 43.442424 18.618182 62.060607 0 12.412121 0 24.824242-6.206061 31.030303-6.206061 6.206061-12.412121 12.412121-24.824242 18.618181-24.824242 6.206061-49.648485 31.030303-62.060606 55.854546-6.206061 6.206061-12.412121 24.824242-12.412122 49.648485-6.206061 24.824242 0 49.648485 18.618182 68.266666zM682.666667 341.333333c-43.442424-43.442424-105.50303-68.266667-167.563637-68.266666-31.030303 0-62.060606 6.206061-93.090909 18.618181-43.442424 18.618182-80.678788 49.648485-105.50303 86.884849-6.206061-6.206061-24.824242 37.236364-37.236364 80.678788 0-18.618182-6.206061 12.412121-6.20606 49.648485 0 31.030303 6.206061 62.060606 18.618181 93.090909 12.412121 31.030303 31.030303 55.854545 49.648485 74.472727 18.618182 24.824242 49.648485 37.236364 74.472728 49.648485 31.030303 12.412121 62.060606 18.618182 93.090909 18.618182s62.060606-6.206061 93.090909-18.618182c43.442424-18.618182 80.678788-49.648485 105.50303-86.884849-6.206061 12.412121 12.412121-12.412121 24.824243-43.442424 12.412121-31.030303 18.618182-62.060606 18.618181-93.090909s-6.206061-62.060606-18.618181-93.090909C713.69697 372.363636 682.666667 335.127273 645.430303 310.30303l37.236364 31.030303z"
        fill={getIconColor(color, 0, '#333333')}
      />
    </Svg>
  );
};

IconShezhi.defaultProps = {
  size: 15,
};

IconShezhi = React.memo ? React.memo(IconShezhi) : IconShezhi;

export default IconShezhi;
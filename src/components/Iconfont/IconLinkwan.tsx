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

let IconLinkwan: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M475.733333 699.733333c-21.333333 21.333333-21.333333 55.466667 0 76.8 10.666667 10.666667 23.466667 14.933333 38.4 14.933334s27.733333-6.4 38.4-14.933334c21.333333-21.333333 21.333333-55.466667 0-76.8-19.2-21.333333-55.466667-21.333333-76.8 0zM629.333333 548.266667c-29.866667-17.066667-61.866667-27.733333-96-32h-36.266666c-34.133333 2.133333-68.266667 12.8-96 32-14.933333 8.533333-29.866667 21.333333-42.666667 32l-6.4 6.4 66.133333 66.133333 6.4-6.4c19.2-19.2 40.533333-29.866667 66.133334-36.266667 14.933333-2.133333 32-2.133333 46.933333 0 25.6 4.266667 49.066667 17.066667 66.133333 36.266667l6.4 6.4 66.133334-66.133333-6.4-6.4c-10.666667-12.8-23.466667-23.466667-40.533334-32z"
        fill={getIconColor(color, 0, '#333333')}
      />
      <Path
        d="M795.733333 456.533333c-46.933333-46.933333-104.533333-81.066667-168.533333-100.266666-72.533333-21.333333-151.466667-21.333333-226.133333 0-64 19.2-121.6 53.333333-168.533334 100.266666l-6.4 6.4 66.133334 66.133334 6.4-6.4c40.533333-40.533333 89.6-68.266667 145.066666-81.066667 46.933333-10.666667 91.733333-10.666667 138.666667 0 55.466667 12.8 106.666667 40.533333 145.066667 81.066667l6.4 6.4 66.133333-66.133334-4.266667-6.4z"
        fill={getIconColor(color, 1, '#333333')}
      />
      <Path
        d="M145.066667 605.866667c-4.266667-19.2-4.266667-40.533333-4.266667-61.866667 0-68.266667 19.2-132.266667 51.2-187.733333 42.666667-74.666667 110.933333-132.266667 192-164.266667 12.8-4.266667 27.733333-8.533333 40.533333-12.8 14.933333 36.266667 51.2 59.733333 91.733334 59.733333s76.8-25.6 91.733333-59.733333c4.266667-12.8 8.533333-25.6 8.533333-38.4 0-8.533333 0-14.933333-2.133333-21.333333-12.8-42.666667-51.2-76.8-100.266667-76.8-46.933333 0-87.466667 34.133333-96 76.8l-44.8 12.8c-100.266667 34.133333-183.466667 104.533333-234.666666 194.133333-36.266667 64-59.733333 138.666667-59.733334 217.6 0 27.733333 2.133333 55.466667 8.533334 83.2 17.066667-10.666667 36.266667-17.066667 57.6-21.333333zM492.8 110.933333c6.4-4.266667 12.8-6.4 21.333333-6.4s14.933333 2.133333 21.333334 6.4c10.666667 6.4 17.066667 19.2 17.066666 32 0 10.666667-4.266667 21.333333-12.8 29.866667-6.4 6.4-14.933333 10.666667-25.6 10.666667s-19.2-4.266667-25.6-10.666667c-8.533333-6.4-12.8-17.066667-12.8-29.866667 0-14.933333 6.4-25.6 17.066667-32zM753.066667 834.133333c-64 53.333333-147.2 85.333333-236.8 85.333334-89.6 0-172.8-32-236.8-85.333334-10.666667-8.533333-21.333333-19.2-32-29.866666 12.8-17.066667 21.333333-36.266667 21.333333-59.733334 0-55.466667-44.8-100.266667-100.266667-100.266666-4.266667 0-8.533333 0-12.8 2.133333-21.333333 2.133333-40.533333 12.8-55.466666 25.6-19.2 19.2-32 44.8-32 72.533333 0 55.466667 44.8 100.266667 100.266666 100.266667 10.666667 0 19.2-2.133333 27.733334-4.266667 10.666667 10.666667 21.333333 21.333333 34.133333 32 76.8 66.133333 177.066667 106.666667 285.866667 106.666667S725.333333 938.666667 802.133333 870.4c-19.2-6.4-36.266667-19.2-49.066666-36.266667zM204.8 755.2c-4.266667 17.066667-19.2 29.866667-38.4 29.866667-6.4 0-12.8-2.133333-19.2-4.266667-10.666667-6.4-19.2-19.2-19.2-34.133333 0-21.333333 17.066667-38.4 38.4-38.4 4.266667 0 8.533333 0 10.666667 2.133333 14.933333 4.266667 27.733333 19.2 27.733333 36.266667v8.533333zM930.133333 674.133333c4.266667-14.933333 8.533333-29.866667 10.666667-44.8 4.266667-27.733333 8.533333-55.466667 8.533333-83.2 0-78.933333-21.333333-153.6-59.733333-217.6-51.2-89.6-136.533333-160-234.666667-194.133333v8.533333c0 19.2-4.266667 36.266667-10.666666 53.333334 81.066667 29.866667 149.333333 89.6 192 164.266666 32 55.466667 51.2 119.466667 51.2 187.733334 0 21.333333-2.133333 40.533333-4.266667 59.733333-2.133333 14.933333-6.4 27.733333-8.533333 42.666667-4.266667 0-8.533333-2.133333-12.8-2.133334-55.466667 0-100.266667 44.8-100.266667 100.266667 0 21.333333 8.533333 42.666667 19.2 59.733333 12.8 17.066667 29.866667 29.866667 49.066667 36.266667 8.533333 2.133333 19.2 4.266667 29.866666 4.266667 55.466667 0 100.266667-44.8 100.266667-100.266667 4.266667-32-8.533333-57.6-29.866667-74.666667z m-49.066666 106.666667c-4.266667 2.133333-10.666667 4.266667-17.066667 4.266667-19.2 0-34.133333-12.8-38.4-29.866667V746.666667c0-17.066667 10.666667-32 25.6-36.266667 4.266667-2.133333 8.533333-2.133333 12.8-2.133333 21.333333 0 38.4 17.066667 38.4 36.266666v2.133334c0 14.933333-8.533333 27.733333-21.333333 34.133333z"
        fill={getIconColor(color, 2, '#333333')}
      />
    </Svg>
  );
};

IconLinkwan.defaultProps = {
  size: 15,
};

IconLinkwan = React.memo ? React.memo(IconLinkwan) : IconLinkwan;

export default IconLinkwan;
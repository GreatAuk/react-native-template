/* tslint:disable */
/* eslint-disable */

import React, { FunctionComponent } from 'react';
import { ViewProps } from 'react-native';
import { GProps } from 'react-native-svg';
import IconShezhi from './IconShezhi';
import IconZiyuan from './IconZiyuan';
import IconXiaoxi from './IconXiaoxi';
import IconLinkwan from './IconLinkwan';
import IconCheliangziliao from './IconCheliangziliao';

export type IconNames = 'shezhi' | 'ziyuan' | 'xiaoxi' | 'linkwan' | 'cheliangziliao';

interface Props extends GProps, ViewProps {
  name: IconNames;
  size?: number;
  color?: string | string[];
}

let IconFont: FunctionComponent<Props> = ({ name, ...rest }) => {
  switch (name) {
    case 'shezhi':
      return <IconShezhi key="1" {...rest} />;
    case 'ziyuan':
      return <IconZiyuan key="2" {...rest} />;
    case 'xiaoxi':
      return <IconXiaoxi key="3" {...rest} />;
    case 'linkwan':
      return <IconLinkwan key="4" {...rest} />;
    case 'cheliangziliao':
      return <IconCheliangziliao key="5" {...rest} />;
  }

  return null;
};

IconFont = React.memo ? React.memo(IconFont) : IconFont;

export default IconFont;

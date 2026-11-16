import type { ComponentType, SVGProps } from 'react';
import {
  ArrowRight02Icon,
  CancelCircleIcon as DgaCancelCircle,
  Chatting01Icon,
  CheckmarkCircle04Icon,
  CookieIcon as DgaCookie,
  HeadsetIcon as DgaHeadset,
  MultiplicationSignIcon,
  SortByDown02Icon,
} from './dga-icons';

type IconProps = SVGProps<SVGSVGElement> & { size?: number };

function sized(Icon: ComponentType<SVGProps<SVGSVGElement>>) {
  return function SizedIcon({ size = 24, ...props }: IconProps) {
    return <Icon width={size} height={size} focusable="false" {...props} />;
  };
}

export const CloseIcon = sized(MultiplicationSignIcon);
export const CancelCircleIcon = sized(DgaCancelCircle);
export const CheckCircleIcon = sized(CheckmarkCircle04Icon);
export const CookieIcon = sized(DgaCookie);
export const ChatIcon = sized(Chatting01Icon);
export const HeadsetIcon = sized(DgaHeadset);
export const SendIcon = sized(ArrowRight02Icon);
export const SortIcon = sized(SortByDown02Icon);

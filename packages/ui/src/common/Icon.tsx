import React from "react";
import { IconType } from "react-icons";
import {
  SiApple,
  SiBeatport,
  SiInstagram,
  SiSoundcloud,
  SiSpotify,
  SiYoutube,
} from "react-icons/si";

export type IconName =
  | "SiApple"
  | "SiBeatport"
  | "SiInstagram"
  | "SiSoundcloud"
  | "SiSpotify"
  | "SiYoutube";

const iconMap: Record<IconName, IconType> = {
  SiApple: SiApple,
  SiBeatport: SiBeatport,
  SiInstagram: SiInstagram,
  SiSoundcloud: SiSoundcloud,
  SiSpotify: SiSpotify,
  SiYoutube: SiYoutube,
};

interface IconProps {
  name: IconName;
  size?: number | string;
  color?: string;
  className?: string;
}

export const Icon: React.FC<IconProps> = ({
  name,
  size = 24,
  color = "currentColor",
  className = "",
  ...rest
}) => {
  const Component = iconMap[name];
  return (
    <Component size={size} color={color} className={className} {...rest} />
  );
};

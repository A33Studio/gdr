import type { Icon, IconProps } from '@phosphor-icons/react';
import {
  AirplaneTiltIcon, ArrowDownIcon, ArrowUpIcon, ArrowUpRightIcon,
  BookOpenTextIcon, BriefcaseMetalIcon, CompassToolIcon, DownloadSimpleIcon,
  GraduationCapIcon, MapPinLineIcon, MoonStarsIcon, SunHorizonIcon, UsersThreeIcon,
} from '@phosphor-icons/react/ssr';

// One restrained weight across both server-rendered content and client controls.
function light(IconComponent: Icon) {
  return function SiteIcon(props: IconProps) {
    return <IconComponent weight="light" aria-hidden="true" {...props} />;
  };
}
export const Plane = light(AirplaneTiltIcon);
export const ArrowDown = light(ArrowDownIcon);
export const ArrowUp = light(ArrowUpIcon);
export const ArrowUpRight = light(ArrowUpRightIcon);
export const BookOpen = light(BookOpenTextIcon);
export const BriefcaseBusiness = light(BriefcaseMetalIcon);
export const Wrench = light(CompassToolIcon);
export const ArrowDownToLine = light(DownloadSimpleIcon);
export const GraduationCap = light(GraduationCapIcon);
export const MapPin = light(MapPinLineIcon);
export const Moon = light(MoonStarsIcon);
export const Sun = light(SunHorizonIcon);
export const Users = light(UsersThreeIcon);

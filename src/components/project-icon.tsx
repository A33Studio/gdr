import { Orbit, Hand, Wrench, Gamepad2, Users, Droplets, Rocket, Folder } from 'lucide-react';
const icons = { orbit: Orbit, hand: Hand, wrench: Wrench, gamepad: Gamepad2, users: Users, droplet: Droplets, rocket: Rocket };
export function ProjectIcon({name, size=20}:{name:string;size?:number}) {
  const Icon = icons[name as keyof typeof icons] ?? Folder;
  return <Icon size={size} strokeWidth={1.65} aria-hidden="true"/>;
}

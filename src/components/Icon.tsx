import { icons } from 'lucide-react';

interface IconProps {
    name: string;
    size?: number | string;
    color?: string;
    className?: string;
}

export const Icon = ({ name, size, color, className}: IconProps) => {
    const LucideIcon = icons[name as keyof typeof icons]; 
    return LucideIcon ? <LucideIcon size={size} color={color} className={className} /> : null;
}
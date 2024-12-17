import React from 'react';
import { LucideIcon } from 'lucide-react';

interface IconCardProps {
  icon: LucideIcon;
  title: string;
}

export default function IconCard({ icon: Icon, title }: IconCardProps) {
  return (
    <div className="flex flex-col items-center space-y-2">
      <Icon className="h-16 w-16 text-indigo-600" />
      <span className="text-sm font-medium">{title}</span>
    </div>
  );
}
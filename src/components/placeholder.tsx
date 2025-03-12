import { LucideMessageSquareWarning } from 'lucide-react';

type PlaceholderProps = {
  label: string;
  icon?: React.ReactNode;
  button?: React.ReactNode;
};

export default function Placeholder({
  label,
  icon = <LucideMessageSquareWarning className="size-16" />,
  button = <div className="h-10" />,
}: PlaceholderProps) {
  return (
    <div className="flex-1 flex flex-col items-center justify-center gap-y-4">
      {icon}
      <h2>{label}</h2>
      {button}
    </div>
  );
}

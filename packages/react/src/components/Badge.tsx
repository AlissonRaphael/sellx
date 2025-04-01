import { DynamicIcon, IconName } from 'lucide-react/dynamic'

import { Badge } from "@/components/ui/badge"

interface BadgeProps {
  title: string, 
  variant?: "default" | "secondary" | "destructive" | "outline" | null | undefined,
  icon?: IconName,
}

export default function BadgeTitle({ title, variant, icon }: BadgeProps) {
  return <Badge 
    className="px-3 text-base text-transparent bg-linear-to-br from-gray-300 to-gray-950 bg-clip-text border-gray-600 rounded-sm"
    variant={variant || "outline"}
  >
    {icon ? <div className='p-1'>
      <DynamicIcon name={icon} size="20px" className="stroke-gray-500 stroke-1" />
    </div> : null}
    {title}_
  </Badge>
}

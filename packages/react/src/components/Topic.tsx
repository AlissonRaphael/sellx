import { Badge } from "@/components/ui/badge"
import { cn } from "@/lib/utils"

export type Topic = {
  title: string, 
  variant?: "default" | "secondary" | "destructive" | "outline" | null | undefined,
  className?: string | undefined,
}

export function Topic({ title, variant, className }: Topic) {
  return <Badge 
    className={cn("px-3 text-base text-transparent bg-linear-to-br from-gray-300 to-gray-950 bg-clip-text border-gray-600 rounded-sm", className)}
    variant={variant || "outline"}
  >
    {title}
  </Badge>
}

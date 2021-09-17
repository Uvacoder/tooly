import * as React from 'react'

export interface ToolCardProps {
  title: string
  description: string
}

export function ToolCard(props: ToolCardProps) {
  const { description, title } = props

  return (
    <div className="bg-gray-800 rounded-lg p-2 hover:bg-gray-700 cursor-pointer select-none">
      <h4 className="font-semibold text-xl">{title}</h4>
      <p className="mt-1 text-gray-300">{description}</p>
    </div>
  )
}

import React, { useState } from 'react'
import { cn } from "@/lib/utils"

const Switch = ({ 
  className, 
  defaultChecked = false, 
  onChange, 
  disabled = false, 
  ...props 
}) => {
  const [checked, setChecked] = useState(defaultChecked)

  const handleToggle = () => {
    if (!disabled) {
      const newCheckedState = !checked
      setChecked(newCheckedState)
      onChange && onChange(newCheckedState)
    }
  }

  return (
    <button
      type="button"
      role="switch"
      aria-checked={checked}
      disabled={disabled}
      onClick={handleToggle}
      className={cn(
        "peer inline-flex h-5 w-9 shrink-0 cursor-pointer items-center rounded-full border-2 border-transparent shadow-sm transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:cursor-not-allowed disabled:opacity-50",
        checked ? "bg-primary" : "bg-input",
        className
      )}
      {...props}
    >
      <span
        className={cn(
          "pointer-events-none block h-4 w-4 rounded-full bg-background shadow-lg ring-0 transition-transform",
          checked ? "translate-x-4" : "translate-x-0"
        )}
      />
    </button>
  )
}

export { Switch }
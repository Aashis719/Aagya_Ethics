"use client";

import { forwardRef } from "react";
import { cn } from "@/lib/utils";

interface TextareaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
  error?: string;
}

const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, label, error, id, ...props }, ref) => {
    return (
      <div className="w-full">
        {label && (
          <label
            htmlFor={id}
            className="block mb-2 text-sm font-body font-normal tracking-wide text-text-secondary"
          >
            {label}
          </label>
        )}
        <textarea
          ref={ref}
          id={id}
          className={cn(
            "w-full px-5 py-4 font-body font-light text-base text-text-primary bg-pearl",
            "border border-gold-light rounded-none resize-none",
            "transition-all duration-300 ease-out",
            "placeholder:text-text-muted",
            "focus:outline-none focus:border-gold focus:shadow-[0_0_0_3px_rgba(201,169,98,0.1)]",
            "disabled:opacity-50 disabled:cursor-not-allowed",
            error && "border-red-400 focus:border-red-400",
            className
          )}
          rows={5}
          {...props}
        />
        {error && (
          <p className="mt-2 text-sm text-red-500 font-body">{error}</p>
        )}
      </div>
    );
  }
);

Textarea.displayName = "Textarea";

export default Textarea;


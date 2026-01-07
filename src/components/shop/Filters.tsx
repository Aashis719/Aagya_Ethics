"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface FiltersProps {
  sizes: string[];
  selectedSize: string | null;
  onSizeChange: (size: string | null) => void;
  sortBy: string;
  onSortChange: (sort: string) => void;
}

const sortOptions = [
  { value: "featured", label: "Featured" },
  { value: "newest", label: "Newest" },
  { value: "price-low", label: "Price: Low to High" },
  { value: "price-high", label: "Price: High to Low" },
];

export default function Filters({
  sizes,
  selectedSize,
  onSizeChange,
  sortBy,
  onSortChange,
}: FiltersProps) {
  return (
    <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 py-6 border-b border-gold-light/30">
      {/* Size Filters */}
      <div className="flex items-center gap-4 overflow-x-auto pb-2 md:pb-0 scrollbar-hide">
        <span className="text-xs tracking-[0.15em] uppercase text-text-muted font-body flex-shrink-0">
          Size:
        </span>
        <div className="flex gap-2">
          <FilterChip
            active={selectedSize === null}
            onClick={() => onSizeChange(null)}
          >
            All
          </FilterChip>
          {sizes.map((size) => (
            <FilterChip
              key={size}
              active={selectedSize === size}
              onClick={() => onSizeChange(size)}
            >
              {size}
            </FilterChip>
          ))}
        </div>
      </div>

      {/* Sort Dropdown */}
      <div className="flex items-center gap-3">
        <span className="text-xs tracking-[0.15em] uppercase text-text-muted font-body">
          Sort:
        </span>
        <select
          value={sortBy}
          onChange={(e) => onSortChange(e.target.value)}
          className={cn(
            "px-5 py-2.5 bg-[#EDE8E0] border border-[#A17F4A]/30 font-body text-sm text-[#1A1412]",
            "focus:outline-none focus:border-[#A17F4A] focus:ring-1 focus:ring-[#A17F4A]/20 cursor-pointer",
            "hover:border-[#A17F4A] transition-all duration-300",
            "appearance-none bg-[url('data:image/svg+xml;charset=US-ASCII,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2212%22%20height%3D%2212%22%20viewBox%3D%220%200%2012%2012%22%3E%3Cpath%20fill%3D%22%23A17F4A%22%20d%3D%22M6%208L1%203h10z%22%2F%3E%3C%2Fsvg%3E')] bg-no-repeat bg-[center_right_12px] pr-10"
          )}
        >
          {sortOptions.map((option) => (
            <option key={option.value} value={option.value} className="bg-[#EDE8E0] text-[#1A1412]">
              {option.label}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}

function FilterChip({
  children,
  active,
  onClick,
}: {
  children: React.ReactNode;
  active: boolean;
  onClick: () => void;
}) {
  return (
    <motion.button
      className={cn(
        "px-4 py-2 text-xs tracking-[0.1em] uppercase font-body transition-all duration-200",
        active
          ? "bg-maroon text-text-light"
          : "bg-transparent text-text-secondary hover:text-text-primary border border-gold-light/50 hover:border-gold"
      )}
      onClick={onClick}
      whileTap={{ scale: 0.97 }}
    >
      {children}
    </motion.button>
  );
}


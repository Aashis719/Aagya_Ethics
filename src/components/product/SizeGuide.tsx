"use client";

import Modal from "@/components/ui/Modal";

interface SizeGuideProps {
  isOpen: boolean;
  onClose: () => void;
}

const sizeChart = [
  { size: "XS", bust: "32", waist: "24", hip: "34", length: "40" },
  { size: "S", bust: "34", waist: "26", hip: "36", length: "41" },
  { size: "M", bust: "36", waist: "28", hip: "38", length: "42" },
  { size: "L", bust: "38", waist: "30", hip: "40", length: "43" },
  { size: "XL", bust: "40", waist: "32", hip: "42", length: "44" },
  { size: "XXL", bust: "42", waist: "34", hip: "44", length: "45" },
];

export default function SizeGuide({ isOpen, onClose }: SizeGuideProps) {
  return (
    <Modal isOpen={isOpen} onClose={onClose} title="Size Guide">
      <div className="space-y-6">
        {/* Size Chart Table */}
        <div className="overflow-x-auto">
          <table className="w-full text-sm font-body">
            <thead>
              <tr className="border-b border-gold-light">
                <th className="py-3 px-4 text-left font-normal tracking-wide text-text-muted">
                  Size
                </th>
                <th className="py-3 px-4 text-center font-normal tracking-wide text-text-muted">
                  Bust (in)
                </th>
                <th className="py-3 px-4 text-center font-normal tracking-wide text-text-muted">
                  Waist (in)
                </th>
                <th className="py-3 px-4 text-center font-normal tracking-wide text-text-muted">
                  Hip (in)
                </th>
                <th className="py-3 px-4 text-center font-normal tracking-wide text-text-muted">
                  Length (in)
                </th>
              </tr>
            </thead>
            <tbody>
              {sizeChart.map((row, index) => (
                <tr
                  key={row.size}
                  className={index % 2 === 0 ? "bg-pearl" : "bg-cream"}
                >
                  <td className="py-3 px-4 font-heading text-text-primary">
                    {row.size}
                  </td>
                  <td className="py-3 px-4 text-center text-text-secondary">
                    {row.bust}
                  </td>
                  <td className="py-3 px-4 text-center text-text-secondary">
                    {row.waist}
                  </td>
                  <td className="py-3 px-4 text-center text-text-secondary">
                    {row.hip}
                  </td>
                  <td className="py-3 px-4 text-center text-text-secondary">
                    {row.length}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Measurement Tips */}
        <div className="p-4 bg-pearl border border-gold-light/30">
          <h4 className="font-heading text-lg text-text-primary mb-3">
            How to Measure
          </h4>
          <ul className="space-y-2 text-sm text-text-secondary font-body font-light">
            <li>
              <strong className="text-text-primary">Bust:</strong> Measure around
              the fullest part of your bust.
            </li>
            <li>
              <strong className="text-text-primary">Waist:</strong> Measure around
              your natural waistline.
            </li>
            <li>
              <strong className="text-text-primary">Hip:</strong> Measure around
              the fullest part of your hips.
            </li>
            <li>
              <strong className="text-text-primary">Length:</strong> Measure from
              shoulder to desired hemline.
            </li>
          </ul>
        </div>

        {/* Note */}
        <p className="text-xs text-text-muted font-body text-center">
          If you&apos;re between sizes, we recommend choosing the larger size for a
          more comfortable fit.
        </p>
      </div>
    </Modal>
  );
}


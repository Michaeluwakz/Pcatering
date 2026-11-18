import React from "react";
import { Info } from "lucide-react";

interface ClientNoticeProps {
  title?: string;
  description: string;
  className?: string;
}

export const ClientNotice: React.FC<ClientNoticeProps> = ({
  title = "Client Customization Note",
  description,
  className = "",
}) => {
  return (
    <div
      className={`rounded-lg p-3.5 bg-burgundy/10 border border-burgundy/30 text-warmWhite text-xs flex items-start gap-2.5 ${className}`}
    >
      <Info className="w-4 h-4 text-mutedGold shrink-0 mt-0.5" />
      <div>
        <span className="font-semibold text-mutedGold block mb-0.5">{title}</span>
        <span className="text-warmWhite/80 leading-relaxed">{description}</span>
      </div>
    </div>
  );
};

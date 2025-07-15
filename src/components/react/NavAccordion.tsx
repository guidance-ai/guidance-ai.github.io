import {
  ChevronDownRegular,
  ChevronUpRegular,
  type FluentIcon,
} from "@fluentui/react-icons";
import React, { useState } from "react";

// 🆕 Add defaultOpen to the props interface
interface NavAccordionProps {
  title: string;
  iconComponent: React.ReactNode;
  children: React.ReactNode;
  defaultOpen?: boolean;
}

const NavAccordion: React.FC<NavAccordionProps> = ({
  title,
  iconComponent,
  children,
  defaultOpen = false, // 🆕 default to false
}) => {
  const [isExpanded, setIsExpanded] = useState(defaultOpen); // 🆕 use defaultOpen here

  const handleToggle = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div>
      <div className="grid grid-cols-[auto_1fr_auto] items-start">
        <div>{iconComponent}</div>
        <button
          className="w-full flex items-center justify-between self-center ml-2"
          onClick={handleToggle}
        >
          <span className="font-semibold text-md">{title}</span>
          {isExpanded ? <ChevronUpRegular /> : <ChevronDownRegular />}
        </button>
        {isExpanded && (
          <div className="col-start-2 ml-2 mt-2">
            {children}
          </div>
        )}
      </div>
    </div>
  );
};

export default NavAccordion;

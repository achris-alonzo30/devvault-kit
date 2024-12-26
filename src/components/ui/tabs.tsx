"use client";
import React, { ReactNode, Children, isValidElement, useState } from 'react';

// Tab interface for type safety
interface TabProps {
  label: string;
  children: ReactNode;
}

// Tabs component
export function Tabs({ children }: { children: ReactNode }) {
  const [activeTab, setActiveTab] = useState<number>(0);

  const handleTabClick = (index: number) => {
    setActiveTab(index);
  };

  return (
    <div>
      <div className="tabs">
        {/* Render tab buttons */}
        {Children.map(children, (child, index) => {
          if (isValidElement<TabProps>(child)) {
            return (
              <button
                className={`tab-button ${index === activeTab ? 'active' : ''}`}
                onClick={() => handleTabClick(index)}
              >
                {child.props.label}
              </button>
            );
          }
          return null;
        })}
      </div>

      <div className="tab-content">
        {/* Render content for the active tab */}
        {Children.toArray(children)[activeTab]}
      </div>
    </div>
  );
}

// TabsContent component to wrap active tab content
export function TabsContent({ children }: { children: ReactNode }) {
  return <div className="tab-panel">{children}</div>;
}

// Tab component to define individual tabs
export function Tab({ children }: { children: ReactNode }) {
  return <>{children}</>;
}

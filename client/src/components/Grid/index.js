import React from "react";

// Exporting the container, row and col components

// The container component allows for bootstrap use without class names
export function COntainer({ fluid, children }) {
  return <div className={`container${fluid ? "-fluid" : ""}`}>{children}</div>;
}

// The Row component
export function Row({ fluid, children }) {
    return <div className={`row${fluid ? "-fluid" : ""}`}>{children}</div>;
}

// This col component lets us size bootstrap columns with less syntax
export function Col({ size, children }) {
    return (
        <div 
        className={size
        .split("")
        .map(size => "col-" + size)
        .join("")}
        >
            {children}
        </div>
    );
}
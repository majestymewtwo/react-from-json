import React from "react";

import { Link } from "react-router-dom";

const DynamicComponent = ({ config, pageKey, eventListeners }) => {
  const renderComponent = (component) => {
    const {
      tag,
      content,
      props,
      children,
      contentcopy,
      value,
      onChange,
      onClick,
      onKeyDown,
      pageKey: componentPageKey,
    } = component;
    const ComponentTag = tag;

    if (componentPageKey && componentPageKey !== pageKey) {
      return null;
    }

    if (
      ComponentTag === "input" ||
      ComponentTag === "img" ||
      ComponentTag === "hr"
    ) {
      return (
        <ComponentTag
          {...props}
          value={eventListeners[value]}
          onChange={eventListeners[onChange]}
          onClick={eventListeners[onClick]}
          onKeyDown={eventListeners[onKeyDown]}
        />
      );
    }
    if (ComponentTag === "Link") {
      return <Link {...props}>{content}</Link>;
    }

    if (contentcopy) {
      return (
        <ComponentTag {...props} onClick={eventListeners[onClick]}>
          {children && children.map(renderComponent)}
        </ComponentTag>
      );
    }

    return (
      <ComponentTag {...props} onClick={eventListeners[onClick]}>
        {content}
        {children && children.map(renderComponent)}
      </ComponentTag>
    );
  };

  return (
    <div>
      {config.map((component, index) => (
        <React.Fragment key={index}>
          {renderComponent(component)}
        </React.Fragment>
      ))}
    </div>
  );
};

export default DynamicComponent;

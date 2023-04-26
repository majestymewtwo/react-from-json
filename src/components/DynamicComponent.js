import React from "react";
import "../css/configurecss.css";
import { Link } from "react-router-dom";

const onclick1 = {
  alert: () => {
    alert("Hello! I am an alert box!");
  },
  alert2: () => {
    alert("Alert2 Alert2 Alert2");
  },
};

const DynamicComponent = ({ config, pageKey }) => {
  const renderComponent = (component) => {
    const {
      tag,
      content,
      props,
      children,
      onClick,
      pageKey: componentPageKey,
    } = component;
    const ComponentTag = tag;

    if (componentPageKey && componentPageKey !== pageKey) {
      return null;
    }
    if (ComponentTag == "img" || ComponentTag == "input") {
      return <ComponentTag {...props} onClick={onclick1[onClick]} />;
    }

    if(ComponentTag =="Link"){
      return <Link {...props}>{content}</Link>
    }

    return (
      <ComponentTag {...props} onClick={onclick1[onClick]}>
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

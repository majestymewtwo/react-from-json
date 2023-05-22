import React, { useState, useContext } from "react";
import "../css/configurecss.css";
import amazonlogo from "../assets/amazonlogo.png";
import { MyContext } from "../context/inputCopy";
import { Link } from "react-router-dom";
const DynamicComponent = ({ config, pageKey, onclick1 }) => {
  const { val } = useContext(MyContext);
  const [inputValue, setInputValue] = val;
  const [inputValue1, setInputValue1] = useState(" ");

  const renderComponent = (component) => {
    const {
      tag,
      content,  
      props,
      children,
      contentcopy,
      value,
      variable,
      onChange,
      onClick,
      pageKey: componentPageKey,
    } = component;
    const ComponentTag = tag;

    if (componentPageKey && componentPageKey !== pageKey) {
      return null;
    }

    if (
      ComponentTag == "input" ||
      ComponentTag == "img" ||
      ComponentTag == "hr"
    ) {
      return (
        <ComponentTag
          {...props}
          value={onclick1[value]}
          onChange={onclick1[onChange]}
          onClick={onclick1[onClick]}
        />
      );
    }
    if (ComponentTag == "Link") {
      return <Link {...props}>{content}</Link>;
    }

    if (contentcopy) {
      return (
        <ComponentTag {...props} onClick={onclick1[onClick]}>
          {inputValue}

          {children && children.map(renderComponent)}
        </ComponentTag>
      );
    }
    return (
      <ComponentTag {...props} onClick={onclick1[onClick]}>
        {content}
        {onclick1[variable]}
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
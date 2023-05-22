import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../css/configurecss.css";

const onclick1 = {
  alert: () => {
    alert("Hello! I am an alert box!");
  },
  alert2: () => {
    alert("Alert2 Alert2 Alert2");
  },
};

const SearchBar = ({ config, pageKey }) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [inputValue, setInputValue] = useState("");

  const toggleDropdown = () => {
    setIsDropdownOpen(inputValue.trim() !== "");
    if (inputValue.trim() === "") {
      setIsDropdownOpen(false);
    }
  };  

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
    toggleDropdown();
  };

  const renderComponent = (component, isDropdownOpen) => {
    const {
      tag,
      content,
      props,
      children,
      onClick,
      condition,
      pageKey: componentPageKey,
    } = component;
    const ComponentTag = tag;
  
    if (componentPageKey && componentPageKey !== pageKey) {
      return null;
    }
  
    if (ComponentTag === "img" || ComponentTag === "input") {
      return (
        <ComponentTag
          {...props}
          onClick={
            typeof onclick1[onClick] === "function"
              ? onclick1[onClick]
              : undefined
          }
          value={inputValue}
          onChange={handleInputChange}
        />
      );
    }
  
    if (ComponentTag === "Link") {
      return <Link {...props}>{content}</Link>;
    }
  
    if (condition && !eval(condition)) {
      return null;
    }
  
    if (
      tag === "div" &&
      props.style &&
      props.style.backgroundColor === "white"
    ) {
      if (!isDropdownOpen) {
        return null;
      }
    }
  
    return (
      <ComponentTag
        {...props}
        onClick={
          typeof onclick1[onClick] === "function"
            ? onclick1[onClick]
            : undefined
        }
      >
        {content}
        {children &&
          children.map((child) => {
            return renderComponent(child, isDropdownOpen);
          })}
      </ComponentTag>
    );
  };
  

  return (
    <div style={{ position: "relative" }}>
      {config.map((component, index) => {
        if (index === 0 && component.tag === "div") {
          return (
            <div {...component.props} onClick={toggleDropdown}>
              {renderComponent(component, isDropdownOpen)}
            </div>
          );
        }
        return renderComponent(component, isDropdownOpen);
      })}
    </div>
  );
};

export default SearchBar;

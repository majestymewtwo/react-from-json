import React,{useState,useContext} from "react";
import "../css/configurecss.css";
import { MyContext } from "../context/inputCopy";

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
  const { val } = useContext(MyContext);
  const [inputValue, setInputValue] = val;
  const [inputValue1, setInputValue1] = useState(" ");
  const inp = {
    inputValue,
    inputValue1,
  };
  const setVal = {
    handleChange: (event) => {
      setInputValue(event.target.value);
    },
    handleChange1: (event) => {
      setInputValue1(event.target.value);
    },
  };
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
          value={inp[value]}
          onChange={setVal[onChange]}
          onClick={onclick1[onClick]}
        />
      );
    }
    if (ComponentTag === "Link") {
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
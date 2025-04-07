import React from "react";

function alert(props) {
  const capitalize = (word) => {
    const tolower = word.toLowerCase();
    return tolower.charAt(0).toUpperCase() + tolower.slice(1);
  };
  return (
    props.alert && (
      <div>
        <div className={`alert alert-${props.alert.msg} role="alert" `}>
          <strong> {capitalize(props.alert.type)}</strong> {props.alert.msg}
        </div>
      </div>
    )
  );
}

export default alert;

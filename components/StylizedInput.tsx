import React, { FC } from 'react';

type InputProps = {
  value: string,
  onChange: Function,
  placeholder: string,
}

const StylizedInput: FC<InputProps> = (props) => {
  const toTop = {
    left: '20px',
    top: '-5px',
    fontSize: '12px',
  };
  return (
    <div className="input-wrapper stylized">
      <input
        type="text"
        className="input-stylized"
        value={props.value}
        onChange={(e) => props.onChange(e)}
      />
      <label style={(props.value.length > 0) ? toTop : {}} className="form-label">{props.placeholder}</label>
    </div>
  )
}

export { };
export default StylizedInput;

import { IInputMainTypesProps } from './interfaces/InputInterface';

const Input = ({ placeholder, value, onChange }: IInputMainTypesProps) => {
  return <input value={value} placeholder={placeholder} onChange={onChange} />;
};

export default Input;

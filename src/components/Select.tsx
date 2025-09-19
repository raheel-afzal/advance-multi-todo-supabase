import { SelectProps } from '../types';

export default function Select({ formData, handledropdownchange, options }: SelectProps) {
  return (
    <select
      className="border-gray-400 bg-gray-400 border-2 rounded text-white p-2"
      value={formData.priorities.priority}
      onChange={(e) => handledropdownchange(e)}
    >
      {options.map((item, index) => {
        return <option key={index} value={item.value}>{item.name}</option>;
      })}
    </select>
  );
}

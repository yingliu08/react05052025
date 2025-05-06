interface CheckboxProps {
  checked: boolean;
  onChange: () => void;
  label?: string;
}

export default function Checkbox({ checked, onChange, label }: CheckboxProps) {
  return (
    <label>
      <input type="checkbox" checked={checked} onChange={onChange} />
      <span>{label}</span>
    </label>
  );
}

import { ChangeEvent } from "react";

interface Props<T> {
    value: T;
    options: { value: T }[];
    onChange: (value: T) => void; 
}

function SelectDropdown<T extends string>(props: Props<T>) {
    const { value, options, onChange } = props;

    const handleChange = (event: ChangeEvent<HTMLSelectElement>) => {
        const option = options.find((option) => option.value === event.target.value);

        option && onChange(option.value);
    }

    return (
        <select value={value} onChange={handleChange}>
            {options.map((option) => (
                <option key={option.value} value={option.value}>{option.value}</option>
            ))}
        </select>
    )
}

export default SelectDropdown;
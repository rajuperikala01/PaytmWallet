"use client";

export const TextInput = ({
  placeholder,
  onChange,
  label,
  type = "text",
  required,
}: {
  placeholder: string;
  onChange: (value: string) => void;
  label: string;
  type: string;
  required: boolean;
}) => {
  return (
    <div className="pt-2">
      <label className="block mb-2 text-sm font-semibold text-gray-800">
        {label}
      </label>
      <input
        onChange={(e) => onChange(e.target.value)}
        required={required}
        type={type}
        id="first_name"
        className="border border-gray-300 text-gray-900
        text-sm rounded-sm outline-none focus:ring-blue-500
         focus:border-blue-500 block w-full p-2.5
         bg-stone-50 placeholder:text-gray-400"
        placeholder={placeholder}
      />
    </div>
  );
};

import { useState } from "react";

type ToggleSwitchProps = {
	checked?: boolean;
	onChange?: (checked: boolean) => void;
	label?: string;
	labelOn?: string;
	labelOff?: string;
};

export default function ToggleSwitch({
	checked: controlledChecked,
	onChange,
	label,
	labelOn = "ON",
	labelOff = "OFF",
}: ToggleSwitchProps) {
	const [internalChecked, setInternalChecked] = useState(false);
	const checked = controlledChecked ?? internalChecked;

	const handleToggle = () => {
		const newValue = !checked;
		if (onChange) {
			onChange(newValue);
		} else {
			setInternalChecked(newValue);
		}
	};

	const handleKeyDown = (e: React.KeyboardEvent) => {
		if (e.key === "Enter" || e.key === " ") {
			e.preventDefault();
			handleToggle();
		}
	};

	return (
		<div className="toggle-container">
			{label && <span className="toggle-label">{label}</span>}
			<button
				type="button"
				className={`toggle-switch ${checked ? "toggle-switch-on" : ""}`}
				onClick={handleToggle}
				onKeyDown={handleKeyDown}
				role="switch"
				aria-checked={checked}
				aria-label={label || "Toggle switch"}
			>
				<span className="toggle-track">
					<span className="toggle-thumb" />
				</span>
				<span className="toggle-state">{checked ? labelOn : labelOff}</span>
			</button>
		</div>
	);
}

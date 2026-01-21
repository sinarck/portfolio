import { useCallback, useRef, useState } from "react";

type KnobProps = {
	size?: number;
	value?: number;
	min?: number;
	max?: number;
	onChange?: (value: number) => void;
	label?: string;
};

export default function Knob({
	size = 48,
	value: controlledValue,
	min = 0,
	max = 100,
	onChange,
	label,
}: KnobProps) {
	const [internalValue, setInternalValue] = useState(50);
	const value = controlledValue ?? internalValue;
	const knobRef = useRef<HTMLDivElement>(null);
	const isDragging = useRef(false);
	const startY = useRef(0);
	const startValue = useRef(0);

	// Convert value to rotation (-135deg to 135deg, 270deg range)
	const rotation = ((value - min) / (max - min)) * 270 - 135;

	const updateValue = useCallback(
		(newValue: number) => {
			const clamped = Math.max(min, Math.min(max, newValue));
			if (onChange) {
				onChange(clamped);
			} else {
				setInternalValue(clamped);
			}
		},
		[min, max, onChange],
	);

	const handlePointerDown = (e: React.PointerEvent) => {
		isDragging.current = true;
		startY.current = e.clientY;
		startValue.current = value;
		(e.target as HTMLElement).setPointerCapture(e.pointerId);
	};

	const handlePointerMove = (e: React.PointerEvent) => {
		if (!isDragging.current) return;

		const deltaY = startY.current - e.clientY;
		const sensitivity = (max - min) / 100;
		const newValue = startValue.current + deltaY * sensitivity;
		updateValue(newValue);
	};

	const handlePointerUp = () => {
		isDragging.current = false;
	};

	// Keyboard support
	const handleKeyDown = (e: React.KeyboardEvent) => {
		const step = (max - min) / 20;
		if (e.key === "ArrowUp" || e.key === "ArrowRight") {
			e.preventDefault();
			updateValue(value + step);
		} else if (e.key === "ArrowDown" || e.key === "ArrowLeft") {
			e.preventDefault();
			updateValue(value - step);
		}
	};

	return (
		<div className="knob-container">
			{label && <span className="knob-label">{label}</span>}
			<div
				ref={knobRef}
				className="knob"
				style={{ width: size, height: size }}
				onPointerDown={handlePointerDown}
				onPointerMove={handlePointerMove}
				onPointerUp={handlePointerUp}
				onPointerCancel={handlePointerUp}
				onKeyDown={handleKeyDown}
				tabIndex={0}
				role="slider"
				aria-valuemin={min}
				aria-valuemax={max}
				aria-valuenow={Math.round(value)}
				aria-label={label || "Rotary control"}
			>
				{/* Outer ring */}
				<div className="knob-ring" />

				{/* Rotating cap */}
				<div
					className="knob-cap"
					style={{ transform: `rotate(${rotation}deg)` }}
				>
					{/* Indicator line */}
					<div className="knob-indicator" />
				</div>

				{/* Center dot */}
				<div className="knob-center" />
			</div>
			<span className="knob-value">{Math.round(value)}</span>
		</div>
	);
}

import { type ReactNode, useState } from "react";
import BlueprintBackground from "./blueprint-background";
import Knob from "./ui/knob";
import ToggleSwitch from "./ui/toggle-switch";

type DeviceFrameProps = {
	children: ReactNode;
};

export default function DeviceFrame({ children }: DeviceFrameProps) {
	const [brightness, setBrightness] = useState(85);
	const [gridVisible, setGridVisible] = useState(true);
	const [scanlines, setScanlines] = useState(false);

	return (
		<div
			className="device-outer"
			style={
				{
					"--screen-brightness": `${brightness}%`,
				} as React.CSSProperties
			}
		>
			<div className="device-shell">
				{/* Top edge markings */}
				<div className="device-edge device-edge-top">
					<span className="device-marking">▲ TOP</span>
					<div className="device-edge-line" />
					<span className="device-marking">M3×0.5</span>
				</div>

				{/* Main content area with controls sidebar */}
				<div className="device-main">
					{/* Screen area */}
					<div className="device-screen">
						{gridVisible && <BlueprintBackground />}
						{scanlines && <div className="device-scanlines" />}
						<div
							className="device-viewport"
							style={{ opacity: brightness / 100 }}
						>
							{children}
						</div>
					</div>

					{/* Control panel - right side (desktop only) */}
					<aside className="device-controls">
						<div className="device-controls-inner">
							{/* Brightness knob */}
							<Knob
								size={52}
								value={brightness}
								onChange={setBrightness}
								min={20}
								max={100}
								label="BRT"
							/>

							{/* Grid toggle */}
							<ToggleSwitch
								checked={gridVisible}
								onChange={setGridVisible}
								label="GRID"
							/>

							{/* Scanlines toggle */}
							<ToggleSwitch
								checked={scanlines}
								onChange={setScanlines}
								label="CRT"
							/>
						</div>
					</aside>
				</div>

				{/* Mobile control bar (bottom) */}
				<div className="device-controls-mobile">
					<div className="mobile-control">
						<span className="mobile-control-label">BRT</span>
						<input
							type="range"
							min={20}
							max={100}
							value={brightness}
							onChange={(e) => setBrightness(Number(e.target.value))}
							className="mobile-slider"
							aria-label="Brightness"
						/>
						<span className="mobile-control-value">{brightness}</span>
					</div>
					<button
						type="button"
						className={`mobile-toggle ${gridVisible ? "mobile-toggle-on" : ""}`}
						onClick={() => setGridVisible(!gridVisible)}
						aria-label="Toggle grid"
					>
						GRID
					</button>
					<button
						type="button"
						className={`mobile-toggle ${scanlines ? "mobile-toggle-on" : ""}`}
						onClick={() => setScanlines(!scanlines)}
						aria-label="Toggle CRT effect"
					>
						CRT
					</button>
				</div>

				{/* Bottom edge - technical specs */}
				<div className="device-edge device-edge-bottom">
					<div className="device-specs-left">
						<span className="device-spec-item">5V⎓1.2A</span>
						<span className="device-spec-dot" />
						<span className="device-spec-item">SN:2025-0117</span>
					</div>
					<div className="device-specs-right">
						<span className="device-compliance">CE</span>
						<span className="device-compliance">FCC</span>
						<span className="device-spec-item">STOCKHOLM SE</span>
					</div>
				</div>
			</div>

			{/* Side label - rotated */}
			<div className="device-side-label">
				<span>PF-01</span>
			</div>
		</div>
	);
}

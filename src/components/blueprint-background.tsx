import { useEffect, useRef } from "react";

// Grid configuration
const MINOR_GRID = 6; // 1/4 of major grid
const MAJOR_GRID = 24; // Base grid size
const SUPER_GRID = 120; // Every 5th major line (coordinate markers)

// Colors (matching theme)
const COLORS = {
	minorLine: "rgba(42, 42, 42, 0.25)",
	majorLine: "rgba(42, 42, 42, 0.5)",
	minorMarker: "rgba(102, 102, 102, 0.3)",
	majorMarker: "rgba(255, 85, 0, 0.35)",
	label: "rgba(102, 102, 102, 0.5)",
	registration: "rgba(255, 85, 0, 0.4)",
};

// Marker sizes
const MINOR_MARKER_SIZE = 2; // Small + at every intersection
const MAJOR_MARKER_SIZE = 5; // Larger + at super grid intersections
const MAJOR_MARKER_HOLLOW = 2; // Hollow center radius

export default function BlueprintBackground() {
	const canvasRef = useRef<HTMLCanvasElement>(null);

	useEffect(() => {
		// SSR safety
		if (typeof window === "undefined") return;

		const canvas = canvasRef.current;
		if (!canvas) return;

		const ctx = canvas.getContext("2d");
		if (!ctx) return;

		let resizeTimeout: ReturnType<typeof setTimeout>;

		const draw = () => {
			const dpr = window.devicePixelRatio || 1;
			const width = window.innerWidth;
			const height = window.innerHeight;

			// Set canvas size with device pixel ratio for crisp lines
			canvas.width = width * dpr;
			canvas.height = height * dpr;
			canvas.style.width = `${width}px`;
			canvas.style.height = `${height}px`;
			ctx.scale(dpr, dpr);

			// Clear canvas
			ctx.clearRect(0, 0, width, height);

			// Calculate offsets to center the grid
			const offsetX = (width % SUPER_GRID) / 2;
			const offsetY = (height % SUPER_GRID) / 2;

			// 1. Draw minor grid lines (6px)
			ctx.strokeStyle = COLORS.minorLine;
			ctx.lineWidth = 0.5;
			ctx.beginPath();

			for (let x = offsetX; x <= width; x += MINOR_GRID) {
				// Skip if this is a major grid line
				if ((x - offsetX) % MAJOR_GRID === 0) continue;
				ctx.moveTo(x, 0);
				ctx.lineTo(x, height);
			}
			for (let y = offsetY; y <= height; y += MINOR_GRID) {
				if ((y - offsetY) % MAJOR_GRID === 0) continue;
				ctx.moveTo(0, y);
				ctx.lineTo(width, y);
			}
			ctx.stroke();

			// 2. Draw major grid lines (24px)
			ctx.strokeStyle = COLORS.majorLine;
			ctx.lineWidth = 0.5;
			ctx.beginPath();

			for (let x = offsetX; x <= width; x += MAJOR_GRID) {
				ctx.moveTo(x, 0);
				ctx.lineTo(x, height);
			}
			for (let y = offsetY; y <= height; y += MAJOR_GRID) {
				ctx.moveTo(0, y);
				ctx.lineTo(width, y);
			}
			ctx.stroke();

			// 3. Draw minor intersection markers (small +)
			ctx.strokeStyle = COLORS.minorMarker;
			ctx.lineWidth = 0.5;

			for (let x = offsetX; x <= width; x += MAJOR_GRID) {
				for (let y = offsetY; y <= height; y += MAJOR_GRID) {
					// Skip super grid intersections (they get bigger markers)
					const isSuperX = (x - offsetX) % SUPER_GRID === 0;
					const isSuperY = (y - offsetY) % SUPER_GRID === 0;
					if (isSuperX && isSuperY) continue;

					ctx.beginPath();
					ctx.moveTo(x - MINOR_MARKER_SIZE, y);
					ctx.lineTo(x + MINOR_MARKER_SIZE, y);
					ctx.moveTo(x, y - MINOR_MARKER_SIZE);
					ctx.lineTo(x, y + MINOR_MARKER_SIZE);
					ctx.stroke();
				}
			}

			// 4. Draw major intersection markers (larger + with hollow center)
			ctx.strokeStyle = COLORS.majorMarker;
			ctx.lineWidth = 1;

			for (let x = offsetX; x <= width; x += SUPER_GRID) {
				for (let y = offsetY; y <= height; y += SUPER_GRID) {
					// Draw the cross
					ctx.beginPath();
					// Horizontal arms (with gap in center)
					ctx.moveTo(x - MAJOR_MARKER_SIZE, y);
					ctx.lineTo(x - MAJOR_MARKER_HOLLOW, y);
					ctx.moveTo(x + MAJOR_MARKER_HOLLOW, y);
					ctx.lineTo(x + MAJOR_MARKER_SIZE, y);
					// Vertical arms (with gap in center)
					ctx.moveTo(x, y - MAJOR_MARKER_SIZE);
					ctx.lineTo(x, y - MAJOR_MARKER_HOLLOW);
					ctx.moveTo(x, y + MAJOR_MARKER_HOLLOW);
					ctx.lineTo(x, y + MAJOR_MARKER_SIZE);
					ctx.stroke();

					// Draw hollow circle in center
					ctx.beginPath();
					ctx.arc(x, y, MAJOR_MARKER_HOLLOW, 0, Math.PI * 2);
					ctx.stroke();
				}
			}

			// 5. Draw coordinate labels
			ctx.font = "9px 'Geist Mono', monospace";
			ctx.fillStyle = COLORS.label;
			ctx.textAlign = "center";
			ctx.textBaseline = "middle";

			// Top edge labels (X axis)
			let coordIndex = 0;
			for (let x = offsetX; x <= width; x += SUPER_GRID) {
				const label = coordIndex.toString().padStart(2, "0");
				ctx.fillText(label, x, 12);
				coordIndex++;
			}

			// Left edge labels (Y axis)
			ctx.textAlign = "right";
			coordIndex = 0;
			for (let y = offsetY; y <= height; y += SUPER_GRID) {
				// Skip the origin (0,0) since it's covered by top label
				if (coordIndex > 0) {
					const label = coordIndex.toString().padStart(2, "0");
					ctx.fillText(label, 16, y);
				}
				coordIndex++;
			}

			// 6. Draw registration marks (corners)
			ctx.strokeStyle = COLORS.registration;
			ctx.lineWidth = 1;

			const regSize = 24;
			const regInset = 8;

			// Top-left
			ctx.beginPath();
			ctx.moveTo(regInset, regInset + regSize);
			ctx.lineTo(regInset, regInset);
			ctx.lineTo(regInset + regSize, regInset);
			ctx.stroke();

			// Top-right
			ctx.beginPath();
			ctx.moveTo(width - regInset - regSize, regInset);
			ctx.lineTo(width - regInset, regInset);
			ctx.lineTo(width - regInset, regInset + regSize);
			ctx.stroke();

			// Bottom-left
			ctx.beginPath();
			ctx.moveTo(regInset, height - regInset - regSize);
			ctx.lineTo(regInset, height - regInset);
			ctx.lineTo(regInset + regSize, height - regInset);
			ctx.stroke();

			// Bottom-right
			ctx.beginPath();
			ctx.moveTo(width - regInset - regSize, height - regInset);
			ctx.lineTo(width - regInset, height - regInset);
			ctx.lineTo(width - regInset, height - regInset - regSize);
			ctx.stroke();
		};

		// Initial draw
		draw();

		// Debounced resize handler
		const handleResize = () => {
			clearTimeout(resizeTimeout);
			resizeTimeout = setTimeout(draw, 100);
		};

		window.addEventListener("resize", handleResize);

		return () => {
			window.removeEventListener("resize", handleResize);
			clearTimeout(resizeTimeout);
		};
	}, []);

	return <canvas ref={canvasRef} className="blueprint-canvas" />;
}

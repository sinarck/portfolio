type AsciiPatternProps = {
	className?: string;
};

const CHARS = ".:;+*#%@";

// Simple seeded PRNG (mulberry32)
function createSeededRandom(seed: number) {
	return () => {
		seed = (seed + 0x6d2b79f5) | 0;
		let t = Math.imul(seed ^ (seed >>> 15), 1 | seed);
		t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
		return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
	};
}

function generatePattern(
	lines: number,
	charsPerLine: number,
	seed: number,
): string {
	const random = createSeededRandom(seed);
	const result: string[] = [];
	for (let i = 0; i < lines; i++) {
		let line = "";
		for (let j = 0; j < charsPerLine; j++) {
			line += CHARS[Math.floor(random() * CHARS.length)];
		}
		result.push(line);
	}
	return result.join("\n");
}

// Pre-generate pattern at module level for consistency
const STATIC_PATTERN = generatePattern(2, 120, 42);

export default function AsciiPattern({ className = "" }: AsciiPatternProps) {
	return (
		<pre className={`ascii-pattern ${className}`} aria-hidden="true">
			{STATIC_PATTERN}
		</pre>
	);
}

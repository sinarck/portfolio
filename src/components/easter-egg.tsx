import { useCallback, useState } from "react";
import { useKonamiCode } from "@/hooks/use-konami-code";

type Particle = {
	id: number;
	x: number;
	y: number;
	color: string;
	rotation: number;
	scale: number;
};
const COLORS = ["#fafafa", "#a1a1a1", "#10b981", "#3b82f6", "#f59e0b"];

export default function EasterEgg() {
	const [particles, setParticles] = useState<Particle[]>([]);

	const triggerConfetti = useCallback(() => {
		const newParticles = Array.from({ length: 150 }, (_, i) => ({
			id: Date.now() + i,
			x: Math.random() * 100,
			y: Math.random() * 100,
			color: COLORS[Math.floor(Math.random() * COLORS.length)],
			rotation: Math.random() * 360,
			scale: 0.5 + Math.random() * 0.5,
		}));
		setParticles(newParticles);
		setTimeout(() => setParticles([]), 2500);
	}, []);

	useKonamiCode(triggerConfetti);

	if (particles.length === 0) return null;

	return (
		<div
			className="fixed inset-0 pointer-events-none z-[10000]"
			aria-hidden="true"
		>
			{particles.map((particle) => (
				<div
					key={particle.id}
					className="absolute w-2 h-2 rounded-sm animate-confetti"
					style={{
						left: `${particle.x}%`,
						top: `${particle.y}%`,
						backgroundColor: particle.color,
						transform: `rotate(${particle.rotation}deg) scale(${particle.scale})`,
					}}
				/>
			))}
		</div>
	);
}

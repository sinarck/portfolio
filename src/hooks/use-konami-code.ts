import { useCallback, useEffect, useRef } from "react";

const KONAMI_CODE = [
	"ArrowUp",
	"ArrowUp",
	"ArrowDown",
	"ArrowDown",
	"ArrowLeft",
	"ArrowRight",
	"ArrowLeft",
	"ArrowRight",
	"KeyB",
	"KeyA",
];

export function useKonamiCode(callback: () => void) {
	const sequenceRef = useRef<string[]>([]);
	const callbackRef = useRef(callback);

	// Keep callback ref up to date
	useEffect(() => {
		callbackRef.current = callback;
	}, [callback]);

	const handleKeyDown = useCallback((event: KeyboardEvent) => {
		const newSequence = [...sequenceRef.current, event.code].slice(
			-KONAMI_CODE.length,
		);
		sequenceRef.current = newSequence;

		if (newSequence.join(",") === KONAMI_CODE.join(",")) {
			callbackRef.current();
			sequenceRef.current = [];
		}
	}, []);

	useEffect(() => {
		window.addEventListener("keydown", handleKeyDown);
		return () => window.removeEventListener("keydown", handleKeyDown);
	}, [handleKeyDown]);
}

import { useCallback, useEffect, useRef } from "react";

const KONAMI =
	"ArrowUp,ArrowUp,ArrowDown,ArrowDown,ArrowLeft,ArrowRight,ArrowLeft,ArrowRight,KeyB,KeyA";

export function useKonamiCode(callback: () => void) {
	const sequenceRef = useRef<string[]>([]);
	const callbackRef = useRef(callback);

	useEffect(() => {
		callbackRef.current = callback;
	}, [callback]);

	const handleKeyDown = useCallback((e: KeyboardEvent) => {
		sequenceRef.current = [...sequenceRef.current, e.code].slice(-10);
		if (sequenceRef.current.join(",") === KONAMI) {
			callbackRef.current();
			sequenceRef.current = [];
		}
	}, []);

	useEffect(() => {
		window.addEventListener("keydown", handleKeyDown);
		return () => window.removeEventListener("keydown", handleKeyDown);
	}, [handleKeyDown]);
}

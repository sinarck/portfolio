import { createRouter } from "@tanstack/react-router";

import ErrorPage from "@/components/error-page";
import { routeTree } from "./routeTree.gen";

export const getRouter = () =>
	createRouter({
		routeTree,
		context: {},
		scrollRestoration: true,
		defaultPreloadStaleTime: 0,
		defaultErrorComponent: ({ error, reset }) => (
			<ErrorPage
				label="Error"
				title="Something went wrong"
				description={error.message || "An unexpected error occurred."}
				action={{ type: "reset", reset }}
			/>
		),
	});

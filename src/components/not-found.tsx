import ErrorPage from "@/components/error-page";

export default function NotFound() {
	return (
		<ErrorPage
			label="404"
			title="Not Found"
			description="The requested page does not exist."
		/>
	);
}

import { Spinner } from "@/components/spinners/spinner";

type LoadingPageProps = {};

const Loading = ({}: LoadingPageProps) => {
	return (
		<div className="flex items-center justify-center h-screen">
			<Spinner size="8" />
		</div>
	);
};

export default Loading;

import { Metadata } from "next";

type ComponentsPageProps = {};

export const metadata: Metadata = {
	title: "Components",
	description: "Example of components built using the components.",
};

const ComponentsPage = ({}: ComponentsPageProps) => {
	return <section className="relative container pt-8">Components Page</section>;
};

export default ComponentsPage;

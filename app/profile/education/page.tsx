import { Metadata } from "next";

import { Timeline } from "@/app/profile/components/timeline";

export const metadata: Metadata = {
	title: "Education",
	description: "Jiranop Phinyo was graduated from Mea Fah Luang University with a Bachelor's degree in Science (Food Science & Technology) - First Class Honors.",
};

type EducationPageProps = {};

const EducationPage = ({}: EducationPageProps) => {
	return (
		<section>
			<Timeline defaultValue="education" />
		</section>
	);
};

export default EducationPage;

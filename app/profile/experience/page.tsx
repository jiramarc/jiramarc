import { Metadata } from "next";

import { Timeline } from "@/app/profile/components/timeline";

export const metadata: Metadata = {
	title: "Experience",
	description: "Experienced software engineer with 5 years of expertise with passionate about developing a JavaScript/TypeScript web development. Expertise in agile development, adept at crafting innovative features and technologies using contemporary web development tools and frameworks such as React, Vue.js and Node.js. Demonstrated commitment to every aspect of software development, emphasizing security, user-friendliness, reliability and value.",
};

type ExperiencePageProps = {};

const ExperiencePage = ({}: ExperiencePageProps) => {
	return (
		<section>
			<Timeline defaultValue="experience" />
		</section>
	);
};

export default ExperiencePage;

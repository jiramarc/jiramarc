import { Timeline } from "@/app/profile/components/timeline";

type ExperiencePageProps = {};

const ExperiencePage = ({}: ExperiencePageProps) => {
	return (
		<section>
			<Timeline defaultValue="experience" />
		</section>
	);
};

export default ExperiencePage;

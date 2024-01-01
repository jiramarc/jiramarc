import { Timeline } from "@/app/profile/components/timeline";

type EducationPageProps = {};

const EducationPage = ({}: EducationPageProps) => {
	return (
		<section>
			<Timeline defaultValue="education" />
		</section>
	);
};

export default EducationPage;

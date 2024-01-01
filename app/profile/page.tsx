import { Timeline } from "@/app/profile/components/timeline";

type ProfilePageProps = {};

const ProfilePage = ({}: ProfilePageProps) => {
	return (
		<section className="relative container pt-8">
			<Timeline />
		</section>
	);
};

export default ProfilePage;

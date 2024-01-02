import { Metadata } from "next";

type SettingsPageProps = {};

export const metadata: Metadata = {
	title: "Settings",
	description: "Settings page.",
};

const SettingsPage = ({}: SettingsPageProps) => {
	return <section className="relative container pt-8">Settings Page</section>;
};

export default SettingsPage;

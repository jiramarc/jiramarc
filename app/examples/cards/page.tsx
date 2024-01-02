import { Metadata } from "next";

import { CookiesSettingsCard } from "@/components/cards/cookies-settings-card";
import { CreateAccountCard } from "@/components/cards/create-account-card";
import { NotificationCard } from "@/components/cards/notification-card";
import { PaymentMethodCard } from "@/components/cards/payment-method-card";
import { ReportIssueCard } from "@/components/cards/report-issue-card";
import { ShareDocumentCard } from "@/components/cards/share-document-card";
import { TeamMemberCard } from "@/components/cards/team-member-card";

export const metadata: Metadata = {
	title: "Cards",
	description: "Example of cards built using the components.",
};

type ExampleCardPageProps = {};

const ExampleCardPage = ({}: ExampleCardPageProps) => {
	return (
		<section>
			<div className="grid items-start justify-center gap-6 rounded-lg lg:grid-cols-2 xl:grid-cols-3">
				<div className="col-span-2 grid items-start gap-6 lg:col-span-1">
					<CreateAccountCard />
					<PaymentMethodCard />
				</div>
				<div className="col-span-2 grid items-start gap-6 lg:col-span-1">
					<TeamMemberCard />
					<ShareDocumentCard />
					<NotificationCard />
				</div>
				<div className="col-span-2 grid items-start gap-6 lg:col-span-2 lg:grid-cols-2 xl:col-span-1 xl:grid-cols-1">
					<ReportIssueCard />
					<CookiesSettingsCard />
				</div>
			</div>
		</section>
	);
};

export default ExampleCardPage;

import { ActivityIcon, CreditCardIcon, DollarSignIcon, Users2Icon } from "lucide-react";
import { Metadata } from "next";

import { MainNav } from "@/app/examples/dashboard/components/main-nav";
import { RecentSales } from "@/app/examples/dashboard/components/recent-sales";
import { StatsCard } from "@/components/cards/stats-card";
import { ExampleOverview } from "@/components/charts/bar-chart/example-overview";
import { MainCommandMenu } from "@/components/command-menus/main-command-menu";
import { DateRangePicker } from "@/components/date-picker/date-range-picker";
import { UserDropdownMenu } from "@/components/dropdown-menu/user-dropdown-menu";
import { TeamSwitcher } from "@/components/switchers/team-switcher";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export const metadata: Metadata = {
	title: "Dashboard",
	description: "Example of dashboard built using the components.",
};

type ExampleDashboardPageProps = {};

const ExampleDashboardPage = ({}: ExampleDashboardPageProps) => {
	return (
		<section className="border rounded-lg">
			{/* NAVIGATION BAR */}
			<div className="flex flex-col">
				<div className="flex flex-row items-center justify-between h-16 px-4 border-b gap-4">
					<div className="flex flex-1 space-x-4">
						<TeamSwitcher />
						<MainNav />
					</div>
					<div className="flex flex-1 items-center justify-end space-x-4">
						<MainCommandMenu />
						<UserDropdownMenu />
					</div>
				</div>
			</div>
			<div className="flex-1 space-y-4 p-8 pt-6">
				<div className="flex flex-col sm:flex-row items-start sm:items-center justify-between space-y-2">
					<h2 className="text-2xl font-bold tracking-tight">Dashboard</h2>
					<div className="flex items-center space-x-2">
						<DateRangePicker />
						<Button>Download</Button>
					</div>
				</div>

				<Tabs
					defaultValue="overview"
					className="space-y-4">
					<TabsList>
						<TabsTrigger value="overview">Overview</TabsTrigger>
						<TabsTrigger
							value="analytics"
							disabled>
							Analytics
						</TabsTrigger>
						<TabsTrigger
							value="reports"
							disabled>
							Reports
						</TabsTrigger>
					</TabsList>
					<TabsContent
						value="overview"
						className="space-y-4">
						<div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
							<StatsCard
								title="Total Revenue"
								icon={DollarSignIcon}
								stats="$45,231.89"
								subtitle="+20.1% from last month"
							/>
							<StatsCard
								title="Subscriptions"
								icon={Users2Icon}
								stats="+2350"
								subtitle="+180.1% from last month"
							/>
							<StatsCard
								title="Sales"
								icon={CreditCardIcon}
								stats="+12,234"
								subtitle="+19% from last month"
							/>
							<StatsCard
								title="Active now"
								icon={ActivityIcon}
								stats="+573"
								subtitle="+201 since last hour"
							/>
						</div>

						<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
							<Card className="col-span-2">
								<CardHeader>
									<CardTitle>Overview</CardTitle>
									<CardDescription>Sales amount</CardDescription>
								</CardHeader>
								<CardContent>
									<ExampleOverview />
								</CardContent>
							</Card>

							<Card className="col-span-2">
								<CardHeader>
									<CardTitle>Recent Sales</CardTitle>
									<CardDescription>You made 265 sales this month.</CardDescription>
								</CardHeader>
								<CardContent>
									<RecentSales />
								</CardContent>
							</Card>
						</div>
					</TabsContent>
				</Tabs>
			</div>
		</section>
	);
};

export default ExampleDashboardPage;

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const recentSales = [
	{
		name: "Stephen Strange",
		email: "doctor-strange@marvel.com",
		sales_amount: "+$1,999.00",
	},
	{
		name: "Tony Stark",
		email: "iron-man@marvel.com",
		sales_amount: "+$39.00",
	},
	{
		name: "Peter Parker",
		email: "spiderman@marvel.com",
		sales_amount: "+$299.00",
	},
	{
		name: "Bruce Banner",
		email: "hulk@marvel.com",
		sales_amount: "+$99.00",
	},
	{
		name: "Natasha Romanoff",
		email: "black-widow@marvel.com",
		sales_amount: "+$199.00",
	},
];

type RecentSalesProps = {};

const RecentSales = ({}: RecentSalesProps) => {
	return (
		<div className="space-y-8">
			{recentSales.map((person, personIndex) => (
				<div
					className="flex items-center"
					key={personIndex}>
					<Avatar className="h-9 w-9">
						<AvatarImage
							src={`/avatars/0${personIndex}.png`}
							alt={person.name}
						/>
						<AvatarFallback>{person.name.split(" ").map((p) => p.charAt(0))}</AvatarFallback>
					</Avatar>
					<div className="ml-4 space-y-1">
						<p className="text-sm font-medium leading-none">{person.name}</p>
						<p className="text-sm text-muted-foreground">{person.email}</p>
					</div>
					<div className="ml-auto font-medium">{person.sales_amount}</div>
				</div>
			))}
		</div>
	);
};

export { RecentSales };

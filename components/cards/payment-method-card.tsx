import { FaApple, FaCreditCard, FaGoogle } from "react-icons/fa";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

type PaymentMethodCardProps = {};

const paymentMethods = [
	{
		label: "Card",
		value: "card",
		icon: FaCreditCard,
	},
	{
		label: "Google",
		value: "google",
		icon: FaGoogle,
	},
	{
		label: "Apple",
		value: "apple",
		icon: FaApple,
	},
];

const PaymentMethodCard = ({}: PaymentMethodCardProps) => {
	return (
		<Card>
			<CardHeader>
				<CardTitle>Payment Method</CardTitle>
				<CardDescription>Add a new payment method to your account.</CardDescription>
			</CardHeader>
			<CardContent className="grid gap-6">
				{/* RADIO GROUP :: PAYMENT METHODS */}
				<RadioGroup
					defaultValue="card"
					className="grid grid-cols-3 gap-4">
					{paymentMethods.map((method, index) => (
						<div key={index}>
							<RadioGroupItem
								value={method.value}
								id={method.value}
								className="peer sr-only"
							/>
							<Label
								htmlFor={method.value}
								className="flex flex-col items-center justify-between rounded-md border-2 border-muted bg-popover p-4 gap-2 transition-all hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary">
								<method.icon className="h-5 w-5" />
								{method.label}
							</Label>
						</div>
					))}
				</RadioGroup>

				{/* FIELD :: NAME */}
				<div className="grid gap-2">
					<Label htmlFor="name">Card holder name</Label>
					<Input
						id="name"
						type="text"
						placeholder="Jiranop Phinyo"
					/>
				</div>

				{/* FIELD :: CARD NUMBER */}
				<div className="grid gap-2">
					<Label htmlFor="number">Card number</Label>
					<Input
						id="number"
						type="number"
						placeholder="4242 4242 4242 4242"
					/>
				</div>

				<div className="grid grid-cols-3 gap-4">
					{/* FIELD :: EXPIRES */}
					<div className="gird gap-2">
						<Label htmlFor="month">Expires</Label>
						<Select>
							<SelectTrigger id="month">
								<SelectValue placeholder="Month" />
							</SelectTrigger>
							<SelectContent>
								{Array.from({ length: 12 }, (_, i) => (
									<SelectItem
										key={i}
										value={`${i + 1}`.padStart(2, "00")}>
										{`${i + 1}`.padStart(2, "00")}
									</SelectItem>
								))}
							</SelectContent>
						</Select>
					</div>
					{/* FIELD :: YEAR */}
					<div className="grid gap-2">
						<Label htmlFor="year">Year</Label>
						<Select>
							<SelectTrigger id="year">
								<SelectValue placeholder="Year" />
							</SelectTrigger>
							<SelectContent>
								{Array.from({ length: 10 }, (_, i) => (
									<SelectItem
										key={i}
										value={`${new Date().getFullYear() + i}`}>
										{new Date().getFullYear() + i}
									</SelectItem>
								))}
							</SelectContent>
						</Select>
					</div>
					{/* FIELD :: CVC */}
					<div className="grid gap-2">
						<Label htmlFor="cvc">CVC</Label>
						<Input
							id="cvc"
							placeholder="CVC"
						/>
					</div>
				</div>
			</CardContent>
			<CardFooter>
				<Button className="w-full">Continue</Button>
			</CardFooter>
		</Card>
	);
};

export { PaymentMethodCard };

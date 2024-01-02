import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Separator } from "@/components/ui/separator";

type ShareDocumentCardProps = {};

const ShareDocumentCard = ({}: ShareDocumentCardProps) => {
	return (
		<Card>
			<CardHeader>
				<CardTitle>Share this document</CardTitle>
				<CardDescription>Anyone with the link can view this document.</CardDescription>
			</CardHeader>
			<CardContent>
				<div className="flex space-x-2">
					<Input
						placeholder="https://example.com/link/to/document"
						readOnly
					/>
					<Button
						variant="secondary"
						className="shrink-0">
						Copy link
					</Button>
				</div>
				<Separator className="my-4" />
				<div className="space-y-4">
					<h4 className="text-sm font-medium">People with access</h4>
					<div className="grid gap-6">
						<div className="flex items-center justify-between space-x-4">
							<div className="flex items-center space-x-4">
								<Avatar>
									<AvatarImage src="/avatars/03.png" />
									<AvatarFallback>SS</AvatarFallback>
								</Avatar>
								<div>
									<p className="text-sm font-medium leading-none">Stephen Stange</p>
									<p className="text-sm text-muted-foreground">doctor.stange@marvel.com</p>
								</div>
							</div>
							<SelectPermission defaultValue="edit" />
						</div>
						<div className="flex items-center justify-between space-x-4">
							<div className="flex items-center space-x-4">
								<Avatar>
									<AvatarImage src="/avatars/05.png" />
									<AvatarFallback>TS</AvatarFallback>
								</Avatar>
								<div>
									<p className="text-sm font-medium leading-none">Tony Stark</p>
									<p className="text-sm text-muted-foreground">iron-man@marvel.com</p>
								</div>
							</div>
							<SelectPermission defaultValue="view" />
						</div>
						<div className="flex items-center justify-between space-x-4">
							<div className="flex items-center space-x-4">
								<Avatar>
									<AvatarImage src="/avatars/01.png" />
									<AvatarFallback>PP</AvatarFallback>
								</Avatar>
								<div>
									<p className="text-sm font-medium leading-none">Peter Parker</p>
									<p className="text-sm text-muted-foreground">spiderman@marvel.com</p>
								</div>
							</div>
							<SelectPermission defaultValue="view" />
						</div>
					</div>
				</div>
			</CardContent>
		</Card>
	);
};

const SelectPermission = ({ defaultValue }: { defaultValue: "edit" | "view" }) => {
	return (
		<Select defaultValue={defaultValue}>
			<SelectTrigger className="ml-auto w-[110px]">
				<SelectValue placeholder="Select" />
			</SelectTrigger>
			<SelectContent>
				<SelectItem value="edit">Can edit</SelectItem>
				<SelectItem value="view">Can view</SelectItem>
			</SelectContent>
		</Select>
	);
};

export { ShareDocumentCard };

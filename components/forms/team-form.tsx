import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { z } from "zod";

import { FormAction } from "@/components/forms/form-action";
import { useTeamModal } from "@/components/modals/team-modal";
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

type TeamFormProps = {};

const teamFormSchema = z.object({
	name: z.string({ required_error: "Team name is required", invalid_type_error: "Team name must be a string" }).min(3, { message: "Team name must be at least 3 characters" }),
	subscription_plan: z.string(),
});
type TeamFormSchema = z.infer<typeof teamFormSchema>;

const TeamForm = ({}: TeamFormProps) => {
	const teamModal = useTeamModal();

	// DEFINE A FORM
	const form = useForm({
		resolver: zodResolver(teamFormSchema),
		defaultValues: {
			name: "",
			subscription_plan: "",
		},
	});

	// ACTION :: ON SUBMIT
	const handleSubmit = (data: TeamFormSchema) => {
		teamModal.onClose();
		toast.success("Team created successfully");
	};

	return (
		<div className="space-y-4">
			<Form {...form}>
				<form
					className="space-y-6"
					onSubmit={form.handleSubmit(handleSubmit)}>
					{/* FIELD :: NAME */}
					<FormField
						control={form.control}
						name="name"
						render={({ field }) => (
							<FormItem>
								<FormLabel>Team name</FormLabel>
								<FormControl>
									<Input
										disabled={form.formState.isSubmitting}
										placeholder="Avengers"
										{...field}
									/>
								</FormControl>
								<FormDescription></FormDescription>
								<FormMessage />
							</FormItem>
						)}
					/>

					{/* FIELD :: SUBSCRIPTION PLAN */}
					<FormField
						control={form.control}
						name="subscription_plan"
						render={({ field }) => (
							<FormItem>
								<FormLabel>Subscription Plan</FormLabel>
								<Select>
									<FormControl>
										<SelectTrigger>
											<SelectValue placeholder="Select a plan" />
										</SelectTrigger>
									</FormControl>
									<SelectContent>
										<SelectItem value="free">
											<span className="font-medium">Free</span> - <span className="text-muted-foreground">Trial for 14 days.</span>
										</SelectItem>
										<SelectItem value="pro">
											<span className="forn-medium">Pro</span> - <span className="text-muted-foreground">$9 per month</span>
										</SelectItem>
										<SelectItem value="premium">
											<span className="forn-medium">Premium</span> - <span className="text-muted-foreground">$25 per month</span>
										</SelectItem>
									</SelectContent>
								</Select>
								<FormDescription></FormDescription>
								<FormMessage />
							</FormItem>
						)}
					/>

					{/* FORM :: ACTION */}
					<FormAction
						actionButtonLabel="Continue"
						actionButtonLoadingLabel="Adding new team..."
						isLoading={form.formState.isSubmitting}
						onCancel={teamModal.onClose}
					/>
				</form>
			</Form>
		</div>
	);
};

export { TeamForm };

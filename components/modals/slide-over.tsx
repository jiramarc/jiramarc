import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle } from "@/components/ui/sheet";

type SlideOverProps = React.HTMLAttributes<HTMLDivElement> & {
	title: string;
	description: string;
	isOpen: boolean;
	onClose: () => void;
};

const SlideOver = ({ title, description, isOpen, onClose, children }: SlideOverProps) => {
	const onChange = (open: boolean) => {
		// If the modal is closed, call the onClose function to close the modal
		if (!open) onClose();
	};

	return (
		<Sheet
			open={isOpen}
			onOpenChange={onChange}>
			<SheetContent>
				{/* SLIDE OVER :: HEADER */}
				<SheetHeader>
					<SheetTitle>{title}</SheetTitle>
					<SheetDescription>{description}</SheetDescription>
				</SheetHeader>

				{/* SLIDE OVER :: CONTENT */}
				<div className="flex flex-col gap-4 h-full">{children}</div>
			</SheetContent>
		</Sheet>
	);
};

export { SlideOver };

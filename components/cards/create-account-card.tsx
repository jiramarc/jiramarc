"use client";

import { FaGithub } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

type CreateAccountCardProps = {};

const CreateAccountCard = ({}: CreateAccountCardProps) => {
	return (
		<Card>
			<CardHeader>
				<CardTitle>Create an account</CardTitle>
				<CardDescription>Enter your email below to create your account</CardDescription>
			</CardHeader>
			<CardContent className="grid gap-4">
				{/* SOCIAL LOGIN */}
				<div className="grid grid-cols-2 gap-6">
					<Button variant="outline">
						<FcGoogle className="mr-2 h-4 w-4" />
						Google
					</Button>
					<Button variant="outline">
						<FaGithub className="mr-2 h-4 w-4" />
						Github
					</Button>
				</div>
				{/* SEPARATOR */}
				<div className="relative">
					<div className="absolute inset-0 flex items-center">
						<span className="w-full border-t" />
					</div>
					<div className="relative flex justify-center text-xs uppercase">
						<span className="bg-background px-2 text-muted-foreground">Or continue with</span>
					</div>
				</div>
				{/* FIELD :: EMAIL */}
				<div className="grid gap-2">
					<Label htmlFor="email">Email</Label>
					<Input
						id="email"
						type="email"
						placeholder="jiramarc@example.com"
					/>
				</div>
				{/* FIELD :: PASSWORD */}
				<div className="grid gap-2">
					<Label htmlFor="password">Password</Label>
					<Input
						id="password"
						type="password"
						placeholder="********"
					/>
				</div>
			</CardContent>
			<CardFooter>
				<Button className="w-full">Create account</Button>
			</CardFooter>
		</Card>
	);
};

export { CreateAccountCard };

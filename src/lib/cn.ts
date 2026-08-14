import clsx from "clsx";
import { twMerge } from "tailwind-merge";
import type { ClassNameValue } from "tailwind-merge";

export default function cn(...inputs: ClassNameValue[]): string {
	return twMerge(clsx(inputs));
}

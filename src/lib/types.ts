export interface ProjectProps {
	title: string;
	links: ProjectLink[];
}

export interface ProjectLink {
	label: string;
	url: string;
}

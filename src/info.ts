import { PeopleDescriptor, ProjectData } from "./structs";
import data from "./assets/info.json";

const labels: string[] = data.labels;
const email: string = data.email;
const qq: number = data.qq;
const otherContactWay = data.otherContactWay as Record<string, string>;
const mainAttacks: string[] = data.mainAttacks;
const studios: PeopleDescriptor[] = data.studios;
const teachers: PeopleDescriptor[] = data.teachers;
const cakeIsLie: PeopleDescriptor[] = data.cakeIsLie;
const xps = data.xps as Record<"lycaon" | "death", PeopleDescriptor>;
const friends: PeopleDescriptor[] = data.friends;
const projects: ProjectData[] = data.projects;
const aliases: string[] = data.aliases;

export default {
	labels,
	email,
	qq,
	otherContactWay,
	mainAttacks,
	studios,
	teachers,
	cakeIsLie,
	xps,
	friends,
	projects,
	aliases
};

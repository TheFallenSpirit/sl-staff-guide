import { DefaultTheme, defineConfig, HeadConfig } from 'vitepress';

const navConfig: DefaultTheme.NavItem[] = [
	{ text: 'Info', link: '/info/' },
	{ text: 'Commands', link: '/info/commands' },
	{ text: 'Predefined Reasons', link: '/info/reasons' },
];

const headConfig: HeadConfig[] = [
	['meta', { name: 'theme-color', content: '#EFBF04' }]
];

const sidebarConfig: DefaultTheme.Sidebar = [
	{
		text: 'Staff Info',
		items: [
			{ text: 'Useful', link: '/info/' },
			{ text: 'Commands', link: '/info/commands' },
			{ text: 'Staff Policies', link: '/info/policies/staff' },
			{ text: 'Verification Guide', link: '/info/verification' },
			{ text: 'ES Flagging Guide', link: '/info/es-flagging' },
			{ text: 'Moderation Policies', link: '/info/policies/moderation' },
			{ text: 'Predefined Reasons', link: '/info/reasons' }
		]
	},
	{
		text: 'Role Duties',
		items: [
			{ text: 'Helpers', link: '/duties/helper' },
			{ text: 'Moderators', link: '/duties/moderator' },
			{ text: 'Admins', link: '/duties/admin' },
			{ text: 'Team Leader', link: '/duties/team-lead' }
		]
	},
	{
		text: 'Other Stuff',
		items: [
			{ text: 'Scenarios', link: '/scenarios' }
		]
	}
];

// https://vitepress.dev/reference/site-config
export default defineConfig({
	srcDir: 'guide',
	cleanUrls: true,
	lastUpdated: true,
	appearance: 'force-dark',

	head: headConfig,
	title: 'SL Staff Guide',
	titleTemplate: ':title ∙ SL Staff Guide',
	description: 'The Starlight Discord server staff guide.',

	themeConfig: {
		nav: navConfig,
		outline: { level: 3 },
		sidebar: sidebarConfig,
		search: { provider: 'local' },
		editLink: { pattern: 'https://github.com/TheFallenSpirit/sl-staff-guide/edit/master/docs/:path' }
	}
});

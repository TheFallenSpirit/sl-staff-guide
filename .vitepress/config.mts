import { DefaultTheme, defineConfig, HeadConfig } from 'vitepress';

const navConfig: DefaultTheme.NavItem[] = [
	{ text: 'Info', link: '/info' },
	{ text: 'Commands', link: '/commands' },
	{ text: 'Predefined Reasons', link: '/reasons' },
];

const headConfig: HeadConfig[] = [
	['meta', { name: 'theme-color', content: '#EFBF04' }]
];

const sidebarConfig: DefaultTheme.Sidebar = [
	{
		text: 'Staff Info',
		items: [
			{ text: 'Useful', link: '/info' },
			{ text: 'Scenarios', link: '/scenarios' },
			{ text: 'Commands', link: '/commands' },
			{ text: 'Staff Policies', link: '/policies/staff' },
			{ text: 'Moderation Policies', link: '/policies/moderation' },
			{ text: 'Predefined Reasons', link: '/reasons' }
		]
	},
	{
		text: 'Guides',
		items: [
			{ text: 'Verification', link: '/guides/verification' },
			{ text: 'ES Flagging', link: '/guides/es-flagging' }
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
		sidebar: sidebarConfig,
		outline: { level: [2, 3] },
		search: { provider: 'local' },
		editLink: { pattern: 'https://github.com/TheFallenSpirit/sl-staff-guide/edit/master/docs/:path' }
	}
});

// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	site: 'https://docs.paragrafy.cloud',
	integrations: [
		starlight({
			title: 'Paragrafy Docs',
			social: [{ icon: 'github', label: 'GitHub', href: 'https://github.com/mineco-de/Paragrafy' }],
			defaultLocale: 'root',
			locales: {
				root: {
					label: 'Deutsch',
					lang: 'de',
				},
				en: {
					label: 'English',
					lang: 'en',
				},
			},
			sidebar: [
				{
					label: 'Managed Cloud',
					translations: { en: 'Managed Cloud' },
					items: [
						{ label: 'Was ist Managed Cloud?', slug: 'managed-cloud/overview', translations: { en: 'What is Managed Cloud?' } },
						{ label: 'Dein Dashboard', slug: 'managed-cloud/dashboard', translations: { en: 'Your Dashboard' } },
					],
				},
				{
					label: 'Self-Hosting',
					translations: { en: 'Self-Hosting' },
					items: [
						{ label: 'Übersicht', slug: 'self-hosting/overview', translations: { en: 'Overview' } },
						{ label: 'Installation: Apache', slug: 'self-hosting/apache', translations: { en: 'Installation: Apache' } },
						{ label: 'Installation: Docker', slug: 'self-hosting/docker', translations: { en: 'Installation: Docker' } },
						{ label: 'Konfiguration & Umgebungsvariablen', slug: 'self-hosting/configuration', translations: { en: 'Configuration & Environment Variables' } },
						{ label: 'Cron-Jobs', slug: 'self-hosting/cron-jobs', translations: { en: 'Cron Jobs' } },
						{ label: 'Upgrade-Guide', slug: 'self-hosting/upgrading', translations: { en: 'Upgrade Guide' } },
					],
				},
				{
					label: 'Funktionen',
					translations: { en: 'Features' },
					items: [
						{ label: 'Kernfunktionen', slug: 'features', translations: { en: 'Core Features' } },
						{ label: 'Compliance-Matrix & Mehrsprachigkeit', slug: 'features/compliance-matrix', translations: { en: 'Compliance Matrix & Multi-Language' } },
						{ label: 'Versionshistorie & Änderungsprotokoll', slug: 'features/versionshistorie', translations: { en: 'Version History & Change Log' } },
						{ label: 'Benutzerverwaltung', slug: 'features/benutzerverwaltung', translations: { en: 'User Management' } },
						{ label: 'Einlesemodus für Rechtstexte', slug: 'features/einlesemodus', translations: { en: 'Legal Text Import Mode' } },
						{ label: 'Backup-Wiederherstellung', slug: 'features/backup-restore', translations: { en: 'Backup Restore' } },
						{ label: 'Projekt-Export & -Import', slug: 'features/project-transfer', translations: { en: 'Project Export & Import' } },
					],
				},
				{
					label: 'Integrationen',
					translations: { en: 'Integrations' },
					items: [
						{ label: 'Webhooks', slug: 'integrations/webhooks', translations: { en: 'Webhooks' } },
						{ label: 'JSON-API & Authentifizierung', slug: 'integrations/api', translations: { en: 'JSON API & Authentication' } },
						{ label: 'Embed-Drawer & Cookie-Banner', slug: 'integrations/embeds', translations: { en: 'Embed Drawer & Cookie Banner' } },
					],
				},
			],
		}),
	],
});

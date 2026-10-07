export const languages = {
	en: 'English',
	es: 'Español',
}

export const defaultLang = 'en'

export type Lang = keyof typeof languages

export const ui = {
	en: {
		'meta.title': 'Sergio Huertas - Web Developer',
		'meta.description':
			'Hire Sergio Huertas, a web developer with more than 6 years of experience building web applications.',
		'nav.home': 'Home',
		'nav.experience': 'Experience',
		'nav.projects': 'Projects',
		'nav.about': 'About',
		'nav.contact': 'Contact',
		'nav.downloadCv': 'Download CV',
		'lang.label': 'Language',
		'theme.choose': 'Choose theme',
		'theme.light': 'Light',
		'theme.dark': 'Dark',
		'theme.system': 'System',
		'hero.badge': 'Ready to work',
		'hero.title': "Hey, I'm Sergio Huertas",
		'hero.experience': '+6 years experience. ',
		'hero.role': 'Front End Developer.',
		'hero.from': ' From Madrid, Spain 🇪🇸. ',
		'hero.speciality': 'My speciality is to develop web apps.',
		'hero.contact': 'Contact me',
		'section.experience': 'Experience',
		'section.projects': 'Projects',
		'section.about': 'About me',
		'experience.website': 'Company website',
		'projects.preview': 'Preview',
		'projects.screenshot': 'screenshot for',
		'footer.rights': 'All rights reserved.',
	},
	es: {
		'meta.title': 'Sergio Huertas - Desarrollador y Programador Web',
		'meta.description':
			'Contrata a Sergio Huertas, un desarrollador web con más de 6 años de experiencia en el desarrollo de aplicaciones web.',
		'nav.home': 'Inicio',
		'nav.experience': 'Experiencia',
		'nav.projects': 'Proyectos',
		'nav.about': 'Sobre mí',
		'nav.contact': 'Contacto',
		'nav.downloadCv': 'Descargar CV',
		'lang.label': 'Idioma',
		'theme.choose': 'Elegir tema',
		'theme.light': 'Claro',
		'theme.dark': 'Oscuro',
		'theme.system': 'Sistema',
		'hero.badge': 'Disponible para trabajar',
		'hero.title': 'Hola, soy Sergio Huertas',
		'hero.experience': '+6 años de experiencia. ',
		'hero.role': 'Desarrollador Front End.',
		'hero.from': ' De Madrid, España 🇪🇸. ',
		'hero.speciality': 'Mi especialidad es desarrollar aplicaciones web.',
		'hero.contact': 'Contáctame',
		'section.experience': 'Experiencia',
		'section.projects': 'Proyectos',
		'section.about': 'Sobre mí',
		'experience.website': 'Web de la empresa',
		'projects.preview': 'Ver proyecto',
		'projects.screenshot': 'captura de',
		'footer.rights': 'Todos los derechos reservados.',
	},
} as const

export function getLang(currentLocale: string | undefined): Lang {
	return currentLocale && currentLocale in languages
		? (currentLocale as Lang)
		: defaultLang
}

export function useTranslations(lang: Lang) {
	return function t(key: keyof (typeof ui)[typeof defaultLang]) {
		return ui[lang][key] ?? ui[defaultLang][key]
	}
}

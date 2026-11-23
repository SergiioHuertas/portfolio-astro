export const languages = {
	en: 'English',
	es: 'Español',
}

export const defaultLang = 'en'

export type Lang = keyof typeof languages

export const ui = {
	en: {
		'meta.title': 'Sergio Huertas - Frontend Developer | React & React Native',
		'meta.description':
			'Sergio Huertas develops web and mobile applications with React, React Native and TypeScript, with experience in sports betting, gaming and robotics education.',
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
		'hero.role': 'Frontend Developer.',
		'hero.from': ' Based in Madrid, Spain 🇪🇸. ',
		'hero.speciality': 'I build web and mobile apps with React, React Native and TypeScript.',
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
		'meta.title': 'Sergio Huertas - Desarrollador frontend | React y React Native',
		'meta.description':
			'Sergio Huertas desarrolla aplicaciones web y móviles con React, React Native y TypeScript, con experiencia en apuestas deportivas, videojuegos y educación robótica.',
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
		'hero.role': 'Desarrollador frontend.',
		'hero.from': ' Desde Madrid, España 🇪🇸. ',
		'hero.speciality': 'Desarrollo aplicaciones web y móviles con React, React Native y TypeScript.',
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

export function getCvUrl(lang: Lang) {
	return lang === 'es' ? '/SergioHuertasCV-es.pdf' : '/SergioHuertasCV.pdf'
}

export function useTranslations(lang: Lang) {
	return function t(key: keyof (typeof ui)[typeof defaultLang]) {
		return ui[lang][key] ?? ui[defaultLang][key]
	}
}

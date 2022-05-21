module.exports = {
	extends: ['next/core-web-vitals', 'eslint-config-christianecg'],
	plugins: ['@typescript-eslint/eslint-plugin'],
	rules: {
		"@typescript-eslint/ban-ts-comment": "off",
		"import/extensions": "off",
		"@next/next/no-img-element": "off",
	},
}

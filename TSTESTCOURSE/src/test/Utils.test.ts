import { Utils } from '../app/Utils';

describe('Utils Test Suite', () => {
	test('First Test', () => {
		const result = Utils.toUpperCase('abc');
		expect(result).toBe('ABC');
	});

	test('Parse Simple URL', () => {
		const parsedUrl = Utils.parseUrl('http://localhost:8080/login');
		expect(parsedUrl.href).toBe('http://localhost:8080/login');
		expect(parsedUrl.port).toBe('8080');
		expect(parsedUrl.protocol).toBe('http:');
		expect(parsedUrl.query).toEqual({});
	});

	test('Parse URL with Query', () => {
		const parsedUrl = Utils.parseUrl(
			'http://localhost:8080/login?user=user&password=pass'
		);
		const expectedQuery = {
			user: 'user',
			password: 'pass'
		};
		expect(parsedUrl.query).toEqual(expectedQuery);
	});
});

const assert = require('assert');
const render = require('../../render');

it('has a text input', async () => {
	const dom = await render('index.html');

	const input = dom.window.document.querySelector('input');

	assert(input);
});

it('Shows a success message with a valid email', async () => {
	const dom = await render('index.html');

	const input = dom.window.document.querySelector('input');
	input.value = 'test@test.com';
	dom.window.document.querySelector('form').dispatchEvent(new dom.window.Event('submit'));

	const header = dom.window.document.querySelector('h1');

	assert.strictEqual(header.innerHTML, 'Looks good!');
});

it('Shows a fail message with an invalid email', async () => {
	const dom = await render('index.html');

	const input = dom.window.document.querySelector('input');
	input.value = 'testtest.com';
	dom.window.document.querySelector('form').dispatchEvent(new dom.window.Event('submit'));

	const header = dom.window.document.querySelector('h1');

	assert.strictEqual(header.innerHTML, 'Invalid email');
});

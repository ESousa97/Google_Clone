import { readFile } from 'node:fs/promises';
import { test } from 'node:test';
import assert from 'node:assert/strict';

const readHtml = async () => {
  const html = await readFile(new URL('../src/index.html', import.meta.url), 'utf-8');
  return html;
};

test('index.html contém título e entrada de busca', async () => {
  const html = await readHtml();

  assert.ok(html.includes('<title>Google</title>'));
  assert.ok(html.includes('class="input-pesquisa"'));
});

test('index.html referencia CSS e JS externos', async () => {
  const html = await readHtml();

  assert.ok(html.includes('./styles/main.css'));
  assert.ok(html.includes('./scripts/main.js'));
});

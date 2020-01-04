import setTimeout from './utils/setTimeout';

export default async function typeToInput(
  query: string,
  input: HTMLInputElement,
  onChange: (value: string) => void,
  onTypingComplete?: () => void,
): Promise<void> {
  if (!query) return;
  await setTimeout();
  input.value = '';
  await setTimeout(600);
  input.focus();
  await setTimeout(600);
  for (const letter of query) {
    input.value += letter;
    onChange(input.value);
    await setTimeout(115);
  }
  await setTimeout(600);
  onTypingComplete && onTypingComplete();
}

export default function (str: string): void {
  const activeElement = document.activeElement as HTMLFormElement;
  const input = document.createElement('input');
  input.value = str;
  document.body.appendChild(input);
  input.select();
  document.execCommand('copy');
  input.remove();
  activeElement.select && activeElement.select();
};

export function playmp3(url: string): HTMLAudioElement {
  const audio = new Audio(url);
  audio.play();
  return audio;
}

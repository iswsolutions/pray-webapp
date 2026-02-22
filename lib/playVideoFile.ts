export function playVideoFile(url: string): HTMLVideoElement {
  const video = document.createElement("video");
  video.src = url;
  video.controls = true;
  video.autoplay = true;
  document.body.appendChild(video);
  video.play();
  return video;
}

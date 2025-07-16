import gravitacionalBeep from '../assets/audios/src_assets_audios_gravitational_beep.mp3';

export function loadBeepd() {
  const audio = new Audio(gravitacionalBeep);
  audio.load();

  return () => {
    audio.currentTime = 0;
    audio.play().catch(error => console.log('Erro ao tocar audio', error));
  };
}

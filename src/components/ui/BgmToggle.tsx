'use client';

import { useEffect, useRef, useState } from 'react';

const STORAGE_KEY = 'happykids-bgm-enabled';
const DEFAULT_VOLUME = 0.35;

export default function BgmToggle() {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [enabled, setEnabled] = useState(true);
  const [blocked, setBlocked] = useState(false);

  useEffect(() => {
    if (typeof window === 'undefined') {
      return;
    }

    const stored = window.localStorage.getItem(STORAGE_KEY);
    const initial = stored === null ? true : stored === 'true';
    setEnabled(initial);

    const audio = new Audio('/audio/happykids-song.mp3');
    audio.loop = true;
    audio.volume = DEFAULT_VOLUME;
    audioRef.current = audio;

    if (initial) {
      audio
        .play()
        .then(() => setBlocked(false))
        .catch(() => setBlocked(true));
    }

    return () => {
      audio.pause();
    };
  }, []);

  const toggle = async () => {
    if (!audioRef.current) {
      return;
    }

    if (enabled) {
      audioRef.current.pause();
      setEnabled(false);
      setBlocked(false);
      window.localStorage.setItem(STORAGE_KEY, 'false');
      return;
    }

    try {
      await audioRef.current.play();
      setEnabled(true);
      setBlocked(false);
      window.localStorage.setItem(STORAGE_KEY, 'true');
    } catch {
      setBlocked(true);
    }
  };

  return (
    <button
      type="button"
      onClick={toggle}
      className={`fixed right-4 bottom-20 md:bottom-5 z-50 flex items-center gap-2 px-5 py-3.5 rounded-full shadow-lg transition-all duration-200 bg-secondary text-white font-bold ${
        enabled ? 'hover:shadow-xl hover:-translate-y-0.5' : 'opacity-80'
      }`}
      aria-label="배경음악 켜기 또는 끄기"
    >
      <span aria-hidden="true" className="text-lg">
        {enabled ? '🎵' : '🔇'}
      </span>
      <span className="text-sm">
        {enabled ? 'BGM ON' : 'BGM OFF'}
      </span>
      {blocked && (
        <span className="text-xs bg-white/20 px-2 py-0.5 rounded-full">터치 필요</span>
      )}
    </button>
  );
}

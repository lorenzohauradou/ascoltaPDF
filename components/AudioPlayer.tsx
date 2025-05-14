"use client"

import type React from "react"

import { useState, useRef, useEffect } from "react"
import { Play, Pause, Volume2, Volume1, VolumeX, SkipBack, SkipForward, Download, Share2 } from "lucide-react"

interface AudioPlayerProps {
  audioUrl: string
  fileName: string
}

export default function AudioPlayer({ audioUrl, fileName }: AudioPlayerProps) {
  const [isPlaying, setIsPlaying] = useState(false)
  const [duration, setDuration] = useState(0)
  const [currentTime, setCurrentTime] = useState(0)
  const [volume, setVolume] = useState(1)
  const [isMuted, setIsMuted] = useState(false)
  const [playbackRate, setPlaybackRate] = useState(1)

  const audioRef = useRef<HTMLAudioElement>(null)
  const progressBarRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const audio = audioRef.current
    if (!audio) return

    const setAudioData = () => {
      setDuration(audio.duration)
    }

    const setAudioTime = () => {
      setCurrentTime(audio.currentTime)
    }

    const setAudioEnded = () => {
      setIsPlaying(false)
      setCurrentTime(0)
    }

    // Events
    audio.addEventListener("loadeddata", setAudioData)
    audio.addEventListener("timeupdate", setAudioTime)
    audio.addEventListener("ended", setAudioEnded)

    return () => {
      audio.removeEventListener("loadeddata", setAudioData)
      audio.removeEventListener("timeupdate", setAudioTime)
      audio.removeEventListener("ended", setAudioEnded)
    }
  }, [])

  // Handle play/pause
  const togglePlay = () => {
    const audio = audioRef.current
    if (!audio) return

    if (isPlaying) {
      audio.pause()
    } else {
      audio.play()
    }
    setIsPlaying(!isPlaying)
  }

  // Handle volume change
  const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = Number.parseFloat(e.target.value)
    setVolume(value)
    if (audioRef.current) {
      audioRef.current.volume = value
    }
    setIsMuted(value === 0)
  }

  // Handle mute toggle
  const toggleMute = () => {
    if (audioRef.current) {
      if (isMuted) {
        audioRef.current.volume = volume || 1
        setIsMuted(false)
      } else {
        audioRef.current.volume = 0
        setIsMuted(true)
      }
    }
  }

  // Handle progress bar click
  const handleProgressBarClick = (e: React.MouseEvent<HTMLDivElement>) => {
    const progressBar = progressBarRef.current
    const audio = audioRef.current

    if (!progressBar || !audio) return

    const rect = progressBar.getBoundingClientRect()
    const pos = (e.clientX - rect.left) / rect.width
    audio.currentTime = pos * duration
  }

  // Handle playback rate change
  const changePlaybackRate = (rate: number) => {
    if (audioRef.current) {
      audioRef.current.playbackRate = rate
      setPlaybackRate(rate)
    }
  }

  // Format time in MM:SS
  const formatTime = (time: number) => {
    const minutes = Math.floor(time / 60)
    const seconds = Math.floor(time % 60)
    return `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`
  }

  // Skip forward/backward
  const skip = (seconds: number) => {
    if (audioRef.current) {
      audioRef.current.currentTime += seconds
    }
  }

  return (
    <div className="bg-white border border-slate-200 rounded-2xl shadow-md p-8 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-50/30 to-purple-50/30"></div>
      <div className="absolute top-0 right-0 w-40 h-40 bg-indigo-100 rounded-full blur-3xl opacity-20 -z-10 transform translate-x-1/2 -translate-y-1/2"></div>

      <div className="relative">
        <div className="flex justify-between items-center mb-6">
          <div>
            <div className="inline-block px-3 py-1 bg-emerald-100 text-emerald-700 text-xs font-medium rounded-full mb-2">
              Conversione completata
            </div>
            <h2 className="text-2xl font-bold text-slate-800">Il tuo audio è pronto!</h2>
          </div>

          <div className="flex space-x-2">
            <button
              className="p-2 text-slate-600 hover:text-indigo-600 hover:bg-indigo-50 rounded-lg transition-colors"
              title="Scarica audio"
            >
              <Download size={20} />
            </button>
            <button
              className="p-2 text-slate-600 hover:text-indigo-600 hover:bg-indigo-50 rounded-lg transition-colors"
              title="Condividi"
            >
              <Share2 size={20} />
            </button>
          </div>
        </div>

        <div className="mb-6 text-center">
          <p className="text-slate-600 text-sm py-2 px-4 rounded-lg bg-slate-50 inline-block">
            <FileIcon className="inline-block mr-2 w-4 h-4" /> {fileName}
          </p>
        </div>

        <audio ref={audioRef} src={audioUrl} className="hidden" />

        {/* Waveform visualization */}
        <div className="relative h-16 mb-4 flex items-center justify-center overflow-hidden">
          <div className="flex items-end justify-center gap-[2px] w-full h-12">
            {Array.from({ length: 80 }).map((_, i) => {
              // Calculate a height based on a sine wave for visual effect
              const height = 30 + Math.sin(i * 0.2) * 15 + Math.random() * 10
              const isActive = (i / 80) * 100 <= (currentTime / duration) * 100

              return (
                <div
                  key={i}
                  className={`w-1 rounded-full ${isActive ? "bg-indigo-500" : "bg-slate-200"}`}
                  style={{ height: `${height}%` }}
                ></div>
              )
            })}
          </div>

          {/* Overlay for click handling */}
          <div ref={progressBarRef} className="absolute inset-0 cursor-pointer" onClick={handleProgressBarClick}></div>
        </div>

        {/* Time display */}
        <div className="flex justify-between text-xs text-slate-500 mb-6">
          <span>{formatTime(currentTime)}</span>
          <span>{formatTime(duration)}</span>
        </div>

        {/* Main controls */}
        <div className="flex items-center justify-center space-x-6 mb-8">
          {/* Skip backward */}
          <button
            onClick={() => skip(-10)}
            className="p-2 text-slate-700 hover:text-indigo-600 hover:bg-indigo-50 rounded-full transition-colors"
            aria-label="Indietro di 10 secondi"
          >
            <SkipBack size={22} />
          </button>

          {/* Play/Pause button */}
          <button
            onClick={togglePlay}
            className="w-16 h-16 flex items-center justify-center bg-indigo-600 hover:bg-indigo-700 text-white rounded-full transition-colors shadow-lg relative group"
            aria-label={isPlaying ? "Pausa" : "Riproduci"}
          >
            <div className="absolute inset-0 bg-indigo-400 rounded-full animate-ping opacity-20 group-hover:opacity-30"></div>
            {isPlaying ? <Pause size={28} /> : <Play size={28} className="ml-1" />}
          </button>

          {/* Skip forward */}
          <button
            onClick={() => skip(10)}
            className="p-2 text-slate-700 hover:text-indigo-600 hover:bg-indigo-50 rounded-full transition-colors"
            aria-label="Avanti di 10 secondi"
          >
            <SkipForward size={22} />
          </button>
        </div>

        {/* Bottom controls */}
        <div className="flex items-center justify-between border-t border-slate-100 pt-4">
          {/* Volume control */}
          <div className="flex items-center space-x-2">
            <button
              onClick={toggleMute}
              className="p-1.5 text-slate-600 hover:text-indigo-600 hover:bg-indigo-50 rounded transition-colors"
              aria-label={isMuted ? "Attiva audio" : "Disattiva audio"}
            >
              {isMuted ? <VolumeX size={18} /> : volume < 0.5 ? <Volume1 size={18} /> : <Volume2 size={18} />}
            </button>

            <input
              type="range"
              min="0"
              max="1"
              step="0.01"
              value={isMuted ? 0 : volume}
              onChange={handleVolumeChange}
              className="w-20 accent-indigo-600"
              aria-label="Volume"
            />
          </div>

          {/* Playback speed */}
          <div className="flex items-center space-x-1">
            <span className="text-xs text-slate-500 mr-1">Velocità:</span>
            {[0.5, 1, 1.5, 2].map((rate) => (
              <button
                key={rate}
                onClick={() => changePlaybackRate(rate)}
                className={`text-xs px-2 py-1 rounded ${
                  playbackRate === rate ? "bg-indigo-600 text-white" : "bg-slate-100 text-slate-700 hover:bg-slate-200"
                } transition-colors`}
                aria-label={`Velocità ${rate}x`}
              >
                {rate}x
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

// PDF Icon component
function FileIcon({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      <path
        d="M7 18H17V16H7V18ZM17 14H7V12H17V14ZM7 10H11V8H7V10ZM20.6 3.4C20.2 3 19.7 3 19.3 3H9.3C8.9 3 8.5 3.2 8.1 3.6L2.7 9C2.3 9.4 2 10 2 10.5V20C2 21.1 2.9 22 4 22H20C21.1 22 22 21.1 22 20V5C22 4.5 21.4 4 21 3.6L20.6 3.4ZM19 20H5C4.4 20 4 19.6 4 19V11L7 8H18C18.6 8 19 8.4 19 9V19C19 19.6 19.4 20 19 20ZM19 7H9V5H19V7Z"
        fill="currentColor"
      />
    </svg>
  )
}

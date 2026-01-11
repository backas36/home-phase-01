import { useEffect } from 'react'

interface ImageModalProps {
  imageSrc: string
  imageAlt: string
  onClose: () => void
}

export function ImageModal({ imageSrc, imageAlt, onClose }: ImageModalProps) {
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
    }
    document.addEventListener('keydown', handleEsc)
    return () => document.removeEventListener('keydown', handleEsc)
  }, [onClose])

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4"
      onClick={onClose}
    >
      <button
        className="absolute top-4 right-4 text-white text-3xl font-bold hover:text-gray-300"
        onClick={onClose}
        aria-label="Close"
      >
        &times;
      </button>
      <img
        src={imageSrc}
        alt={imageAlt}
        className="max-h-[90vh] max-w-[90vw] object-contain"
        onClick={(e) => e.stopPropagation()}
      />
    </div>
  )
}

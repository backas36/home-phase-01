import { useState } from 'react'
import { ImageModal } from './ImageModal'

interface ItemCardProps {
  title: string
  description?: string
  note?: string
  images: string[]
  variant: 'decided' | 'discuss'
}

export function ItemCard({ title, description, note, images, variant }: ItemCardProps) {
  const [selectedImage, setSelectedImage] = useState<string | null>(null)

  const basePath = import.meta.env.BASE_URL + 'images/'

  return (
    <div
      className={`rounded-lg border p-4 ${
        variant === 'decided'
          ? 'border-green-200 bg-green-50'
          : 'border-yellow-200 bg-yellow-50'
      }`}
    >
      <h3 className="text-lg font-semibold text-gray-800 mb-2">{title}</h3>

      {description && (
        <p className="text-sm text-gray-600 mb-2">{description}</p>
      )}

      {note && (
        <p className="text-sm text-amber-700 italic mb-2">{note}</p>
      )}

      {images.length > 0 && (
        <div className="flex flex-wrap gap-2 mt-3">
          {images.map((img) => (
            <button
              key={img}
              onClick={() => setSelectedImage(img)}
              className="relative group cursor-pointer"
            >
              <img
                src={`${basePath}${img}.jpg`}
                alt={`圖 ${img}`}
                className="w-40 h-40 object-cover rounded border border-gray-300 group-hover:border-blue-500 transition-colors"
                onError={(e) => {
                  const target = e.target as HTMLImageElement
                  target.src = `https://placehold.co/160x160/e5e7eb/9ca3af?text=${img}`
                }}
              />
              <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity rounded">
                <span className="text-white text-sm font-medium">點擊放大</span>
              </div>
              <span className="absolute bottom-0 left-0 right-0 bg-black/60 text-white text-xs text-center py-1 rounded-b">
                圖 {img}
              </span>
            </button>
          ))}
        </div>
      )}

      {selectedImage && (
        <ImageModal
          imageSrc={`${basePath}${selectedImage}.jpg`}
          imageAlt={`${selectedImage}`}
          onClose={() => setSelectedImage(null)}
        />
      )}
    </div>
  )
}

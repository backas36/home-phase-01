import { useState } from 'react'
import { ImageModal } from './ImageModal'

interface ItemCardProps {
  title: string
  description?: string
  note?: string
  images: string[]
  variant: 'decided' | 'discuss'
  status?: 'completed' | 'pending'
}

export function ItemCard({ title, description, note, images, variant, status }: ItemCardProps) {
  const [selectedImage, setSelectedImage] = useState<string | null>(null)

  const basePath = import.meta.env.BASE_URL + 'images/'

  return (
    <div
      className={`relative rounded-lg border p-4 ${
        variant === 'decided'
          ? status === 'completed'
            ? 'border-gray-300 bg-gray-50'
            : 'border-green-500 bg-green-100'
          : 'border-yellow-200 bg-yellow-50'
      }`}
    >
      {variant === 'decided' && (
        <span
          className={`absolute top-2 right-2 px-2 py-0.5 text-xs rounded-full font-medium ${
            status === 'completed'
              ? 'bg-gray-400 text-white'
              : 'bg-green-600 text-white'
          }`}
        >
          {status === 'completed' ? '✓ 已完工' : '未完工'}
        </span>
      )}
      <h3 className="text-lg font-semibold text-gray-800 mb-2 pr-16">{title}</h3>

      {description && (
        <p className="text-sm text-gray-600 mb-2">{description}</p>
      )}

      {note && (
        <p className="text-sm text-amber-700 italic mb-2">{note}</p>
      )}

      {images.length > 0 && (
        <>
          <div className="flex flex-wrap gap-2 mt-3">
            {images.map((img) => (
              <button
                key={img}
                onClick={() => setSelectedImage(img)}
                className="relative group cursor-pointer"
              >
                <img
                  src={`${basePath}${img}`}
                  alt={`圖 ${img.split('.')[0]}`}
                  className="w-40 h-40 object-cover rounded border border-gray-300 group-hover:border-blue-500 transition-colors"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement
                    target.src = `https://placehold.co/160x160/e5e7eb/9ca3af?text=${img.split('.')[0]}`
                  }}
                />
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity rounded">
                  <span className="text-white text-sm font-medium">點擊放大</span>
                </div>
                <span className="absolute bottom-0 left-0 right-0 bg-black/60 text-white text-xs text-center py-1 rounded-b">
                  圖 {img.split('.')[0]}
                </span>
              </button>
            ))}
          </div>
          <p className="text-sm text-amber-700 bg-amber-50 px-2 py-1 rounded mt-2">
            ※ 示意圖僅供參考尺寸與配置位置
          </p>
        </>
      )}

      {selectedImage && (
        <ImageModal
          imageSrc={`${basePath}${selectedImage}`}
          imageAlt={`圖 ${selectedImage.split('.')[0]}`}
          onClose={() => setSelectedImage(null)}
        />
      )}
    </div>
  )
}

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

  const cardStyles = {
    decided: status === 'completed'
      ? 'border-border bg-white/60 opacity-75'
      : 'border-success/30 bg-success-light',
    discuss: 'border-warning/30 bg-warning-light'
  }

  return (
    <div
      className={`relative rounded-xl border-2 p-5 sm:p-6 transition-shadow duration-200 hover:shadow-md ${cardStyles[variant]}`}
    >
      {variant === 'decided' && (
        <span
          className={`absolute top-3 right-3 px-2.5 py-1 text-xs rounded-full font-semibold ${
            status === 'completed'
              ? 'bg-muted text-white'
              : 'bg-success text-white'
          }`}
          role="status"
          aria-label={status === 'completed' ? '已完工' : '未完工'}
        >
          {status === 'completed' ? '✓ 已完工' : '未完工'}
        </span>
      )}
      <h3 className="font-heading text-lg sm:text-xl font-semibold text-primary mb-2 pr-20">{title}</h3>

      {description && (
        <p className="text-sm sm:text-base text-secondary leading-relaxed mb-3">{description}</p>
      )}

      {note && (
        <p className="text-sm sm:text-base text-warning italic mb-3">{note}</p>
      )}

      {images.length > 0 && (
        <>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 mt-4">
            {images.map((img) => {
              const imageName = img.split('.')[0]
              return (
                <button
                  key={img}
                  onClick={() => setSelectedImage(img)}
                  className="relative group cursor-pointer focus:outline-none focus:ring-2 focus:ring-cta focus:ring-offset-2 rounded-lg"
                  aria-label={`查看 ${title} 的參考圖片 ${imageName}`}
                >
                  <img
                    src={`${basePath}${img}`}
                    alt={`${title} - 參考圖片 ${imageName}`}
                    className="w-full aspect-square object-cover rounded-lg border-2 border-border group-hover:border-cta transition-all duration-200 group-hover:shadow-lg"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement
                      target.src = `https://placehold.co/160x160/e5e7eb/9ca3af?text=${imageName}`
                    }}
                  />
                  <div className="absolute inset-0 bg-primary/60 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity duration-200 rounded-lg">
                    <span className="text-white text-sm font-semibold">點擊放大</span>
                  </div>
                  <span className="absolute bottom-0 left-0 right-0 bg-primary/80 text-white text-xs text-center py-1.5 rounded-b-lg font-medium">
                    {imageName}
                  </span>
                </button>
              )
            })}
          </div>
          <p className="text-sm text-warning bg-warning-light/50 px-3 py-2 rounded-lg mt-4 border border-warning/20">
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

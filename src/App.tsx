import { decidedItems, discussItems } from './data'
import { ItemCard } from './components/ItemCard'

function App() {
  return (
    <div className="min-h-screen bg-bg py-8 px-4 sm:py-12">
      <div className="max-w-4xl mx-auto">
        <header className="text-center mb-10">
          <h1 className="font-heading text-3xl sm:text-4xl font-bold text-primary mb-3">
            裝修需求確認清單
          </h1>
          <p className="text-secondary text-base sm:text-lg">與工程討包對齊事項</p>
        </header>

        {/* 已決定區塊 */}
        <section className="mb-12">
          <div className="flex items-center gap-3 mb-6">
            <span className="bg-success text-white px-4 py-1.5 rounded-full text-sm font-semibold shadow-sm">
              已決定
            </span>
            <span className="text-muted text-sm font-medium">
              {decidedItems.length} 項
            </span>
          </div>
          <div className="space-y-4">
            {decidedItems.map((item) => (
              <ItemCard
                key={item.id}
                title={item.title}
                description={item.description}
                images={item.images}
                variant="decided"
                status={item.status}
              />
            ))}
          </div>
        </section>

        {/* 需要討論區塊 */}
        <section>
          <div className="flex items-center gap-3 mb-6">
            <span className="bg-warning text-white px-4 py-1.5 rounded-full text-sm font-semibold shadow-sm">
              需要討論
            </span>
            <span className="text-muted text-sm font-medium">
              {discussItems.length} 項
            </span>
            <span className="ml-auto text-sm text-success font-semibold flex items-center gap-1.5">
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2C6.48 2 2 6.48 2 12c0 1.84.52 3.55 1.4 5.03L2 22l4.97-1.4C8.45 21.48 10.16 22 12 22c5.52 0 10-4.48 10-10S17.52 2 12 2zm0 18c-1.58 0-3.08-.38-4.39-1.06l-.31-.17-2.96.83.84-2.96-.18-.31A7.948 7.948 0 014 12c0-4.41 3.59-8 8-8s8 3.59 8 8-3.59 8-8 8z"/>
              </svg>
              請在 LINE 回覆
            </span>
          </div>
          <div className="space-y-4">
            {discussItems.map((item) => (
              <ItemCard
                key={item.id}
                title={item.title}
                note={item.note}
                images={item.images}
                variant="discuss"
              />
            ))}
          </div>
        </section>

        <footer className="mt-16 pt-8 border-t border-border text-center text-muted text-sm">
          更新時間：{new Date().toLocaleDateString('zh-TW')}
        </footer>
      </div>
    </div>
  )
}

export default App

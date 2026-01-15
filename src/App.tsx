import { decidedItems, discussItems } from './data'
import { ItemCard } from './components/ItemCard'

function App() {
  return (
    <div className="min-h-screen bg-gray-100 py-8 px-4">
      <div className="max-w-4xl mx-auto">
        <header className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-800 mb-2">
            裝修需求確認清單
          </h1>
          <p className="text-gray-600">與工程討包對齊事項</p>
        </header>

        {/* 已決定區塊 */}
        <section className="mb-10">
          <div className="flex items-center gap-2 mb-4">
            <span className="bg-green-500 text-white px-3 py-1 rounded-full text-sm font-medium">
              已決定
            </span>
            <span className="text-gray-500 text-sm">
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
          <div className="flex items-center gap-2 mb-4">
            <span className="bg-yellow-500 text-white px-3 py-1 rounded-full text-sm font-medium">
              需要討論
            </span>
            <span className="text-gray-500 text-sm">
              {discussItems.length} 項
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

        <footer className="mt-12 text-center text-gray-400 text-sm">
          更新時間：{new Date().toLocaleDateString('zh-TW')}
        </footer>
      </div>
    </div>
  )
}

export default App

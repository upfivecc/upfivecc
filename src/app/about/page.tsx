import { config } from "@/lib/config";

export default function AboutPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-6">关于我</h1>
        
        <div className="prose prose-lg dark:prose-invert">
          <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
            {config.author.bio}
          </p>
          
          <h2 className="text-2xl font-semibold mt-8 mb-4">技术专长</h2>
          <ul className="list-disc pl-6 space-y-2 text-gray-700 dark:text-gray-300">
            <li>全栈开发 (Next.js, React, Node.js)</li>
            <li>人工智能与大模型应用</li>
            <li>Web3 与区块链技术</li>
            <li>DevOps 与云原生技术</li>
            <li>技术写作与知识分享</li>
          </ul>
          
          <h2 className="text-2xl font-semibold mt-8 mb-4">联系我</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="border rounded-lg p-4">
              <h3 className="font-medium mb-2">社交媒体</h3>
              <ul className="space-y-1 text-gray-700 dark:text-gray-300">
                <li>Github: <a href={config.social.github} className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">upfive</a></li>
                <li>X: <a href={config.social.x} className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">upfive</a></li>
                <li>小红书: <a href={config.social.xiaohongshu} className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">upfive</a></li>
              </ul>
            </div>
            
            <div className="border rounded-lg p-4">
              <h3 className="font-medium mb-2">其他</h3>
              <ul className="space-y-1 text-gray-700 dark:text-gray-300">
                <li>邮箱: <a href={`mailto:${config.author.email}`} className="text-blue-600 hover:underline">{config.author.email}</a></li>
                <li>赞赏: <a href={config.social.buyMeACoffee} className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">Buy me a coffee</a></li>
              </ul>
            </div>
          </div>
          
          <div className="mt-8 p-4 bg-blue-50 dark:bg-blue-900/30 rounded-lg">
            <h3 className="font-medium mb-2">黑客终端</h3>
            <p className="text-gray-700 dark:text-gray-300">
              想体验黑客风格的界面吗？访问我的 <a href="/hacker-menu" className="text-blue-600 hover:underline">黑客终端页面</a>，
              那里有炫酷的0101跑马灯效果和交互式终端模拟器。
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
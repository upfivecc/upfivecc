// /Users/upfive/Workspace/frontprojects/upfivecc/src/app/page.tsx
import { allBlogs } from "content-collections";
import Link from "next/link";
import count from 'word-count'
import { config } from "@/lib/config";
import { formatDate } from "@/lib/utils";

export default async function Home({ searchParams }: { searchParams: Promise<{ page?: string }> }) {
  const { page } = await searchParams;
  const blogs = allBlogs
    .filter((blog: any) => blog.featured === true)
    .sort((a: any, b: any) => new Date(b.date).getTime() - new Date(a.date).getTime());

  // Pagination logic
  const currentPage = parseInt(page || "1", 10);
  const postsPerPage = 10;
  const totalPages = Math.ceil(blogs.length / postsPerPage);
  const startIndex = (currentPage - 1) * postsPerPage;
  const endIndex = startIndex + postsPerPage;
  const currentBlogs = blogs.slice(startIndex, endIndex);

  const socialLinks = [
    { name: "赞赏", key: "buyMeACoffee" },
    { name: "X", key: "x" },
    { name: "小红书", key: "xiaohongshu" },
    { name: "微信公众号", key: "wechat" },
  ]
    .map(item => ({
      name: item.name,
      href: config.social && config.social[item.key as keyof typeof config.social]
    }))
    .filter(link => !!link.href);

  return (
    <div className="max-w-3xl mx-auto px-4 py-8">
      {/* 个人介绍部分 */}
      <div className="mb-16 space-y-4">
        <h1 className="text-4xl font-bold">{config.site.title}</h1>
        <p className="text-md text-gray-600">{config.author.bio}</p>
        
        {/* 社交链接 - 仅当有链接时才显示 */}
        {socialLinks.length > 0 && (
          <div className="flex flex-wrap gap-2 text-gray-600">
            {socialLinks.map((link, index) => (
              <div key={link.name} className="flex items-center">
                {index > 0 && <span className="mx-1">·</span>}
                <Link href={link.href} className="underline underline-offset-4">
                  {link.name}
                </Link>
              </div>
            ))}
          </div>
        )}
        
        {/* 黑客终端提示 */}
        <div className="mt-4 p-4 bg-black text-green-400 rounded-lg font-mono">
          <p className="mb-2">&gt; 检测到安全协议...</p>
          <p className="mb-3">&gt; 系统已就绪，访问特殊区域</p>
          <Link 
            href="/hacker-menu" 
            className="inline-block px-4 py-2 border border-green-400 hover:bg-green-900/20 transition-colors"
          >
            &gt; 进入黑客终端 &lt;&lt;
          </Link>
        </div>
      </div>

      <div className="space-y-4">
        <h2 className="text-2xl font-bold mb-8">推荐阅读</h2>
        <div className="space-y-8">
          {currentBlogs.map((blog: any) => (
            <article key={blog.slug} className="">
              <Link href={`/blog/${blog.slug}`}>
                <div className="flex flex-col space-y-2">
                  <div className="flex items-center justify-between">
                    <h2 className="text-xl font-semibold underline underline-offset-4">
                      {blog.title}
                    </h2>
                    <span className="text-sm text-gray-500">
                      {formatDate(blog.date)} · {count(blog.content)} 字
                    </span>
                  </div>
                  <p className="text-gray-600 line-clamp-2">
                    {blog.summary}
                  </p>
                </div>
              </Link>
            </article>
          ))}
        </div>
        
        {/* Pagination Controls */}
        <div className="flex justify-between items-center mt-12">
          <div>
            {currentPage > 1 && (
              <Link 
                href={`/?page=${currentPage - 1}`} 
                className="px-4 py-2 border border-gray-300 rounded-md hover:bg-gray-50"
              >
                Previous
              </Link>
            )}
          </div>
          <div className="text-gray-600">
            Page {currentPage} of {totalPages}
          </div>
          <div>
            {currentPage < totalPages && (
              <Link 
                href={`/?page=${currentPage + 1}`} 
                className="px-4 py-2 border border-gray-300 rounded-md hover:bg-gray-50"
              >
                Next
              </Link>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
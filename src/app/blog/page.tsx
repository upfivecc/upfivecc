import { type Metadata } from "next";
import { allBlogs } from "content-collections";
import Link from "next/link";
import count from 'word-count'
import { config } from "@/lib/config";
import { formatDate } from "@/lib/utils";

export const metadata: Metadata = {
  title: `Blogs | ${config.site.title}`,
  description: `Blogs of ${config.site.title}`,
  keywords: `${config.site.title}, blogs, ${config.site.title} blogs`,
};

export default async function BlogPage({ searchParams }: { searchParams: Promise<{ page?: string }> }) {
  const { page } = await searchParams;
  const blogs = allBlogs.sort((a: any, b: any) => new Date(b.date).getTime() - new Date(a.date).getTime());
  
  // Pagination logic
  const currentPage = parseInt(page || "1", 10);
  const postsPerPage = 10;
  const totalPages = Math.ceil(blogs.length / postsPerPage);
  const startIndex = (currentPage - 1) * postsPerPage;
  const endIndex = startIndex + postsPerPage;
  const currentBlogs = blogs.slice(startIndex, endIndex);

  return (
    <div className="max-w-3xl mx-auto px-4 py-8">
      <div className="space-y-8">
        {currentBlogs.map((blog: any) => (
          <article 
            key={blog.slug} 
            className=""
          >
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
              href={`/blog?page=${currentPage - 1}`} 
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
              href={`/blog?page=${currentPage + 1}`} 
              className="px-4 py-2 border border-gray-300 rounded-md hover:bg-gray-50"
            >
              Next
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}
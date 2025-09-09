import { type Metadata } from "next";
import { allCourses } from "content-collections";
import Link from "next/link";
import count from 'word-count'
import { config } from "@/lib/config";
import { formatDate } from "@/lib/utils";

export const metadata: Metadata = {
  title: `Course | ${config.site.title}`,
  description: `Course of ${config.site.title}`,
  keywords: `${config.site.title}, course, ${config.site.title} courses`,
};

export default async function CoursePage({ searchParams }: { searchParams: Promise<{ page?: string }> }) {
  const { page } = await searchParams;
  const courses = allCourses.sort((a: any, b: any) => new Date(b.date).getTime() - new Date(a.date).getTime());

  // Pagination logic
  const currentPage = parseInt(page || "1", 10);
  const postsPerPage = 10;
  const totalPages = Math.ceil(courses.length / postsPerPage);
  const startIndex = (currentPage - 1) * postsPerPage;
  const endIndex = startIndex + postsPerPage;
  const currentCourses = courses.slice(startIndex, endIndex);

  return (
    <div className="max-w-3xl mx-auto px-4 py-8">
      <div className="space-y-8">
        {currentCourses.map((course: any) => (
          <article 
            key={course.slug} 
            className=""
          >
            <Link href={`/course/${course.slug}`}>
              <div className="flex flex-col space-y-2">
                <div className="flex items-center justify-between">
                  <h2 className="text-xl font-semibold underline underline-offset-4">
                    {course.title}
                  </h2>
                  <span className="text-sm text-gray-500">
                    {formatDate(course.date)} · {count(course.content)} 字
                  </span>
                </div>
                <p className="text-gray-600 line-clamp-2">
                  {course.summary}
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
              href={`/course?page=${currentPage - 1}`} 
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
              href={`/course?page=${currentPage + 1}`} 
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
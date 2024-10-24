import { courses1 } from '@/components/data/courses';
import Image from 'next/image';
import Link from 'next/link';

const AdvancedCourses: React.FC = () => {
  return (
    <section className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-blue-800 mb-8">Advanced Courses</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {courses1.map((course) => (
            <Link href={course.url} key={course.id} className="relative bg-white shadow-lg rounded-lg overflow-auto hover:top-3 transition-shadow duration-300">
              <Image
                src={course.image}
                alt={course.title}
                width={400}
                height={300}
                className="object-cover w-full h-48"
              />
              <div className="p-4">
                <h3 className="text-lg font-semibold text-gray-800">{course.title}</h3>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AdvancedCourses;

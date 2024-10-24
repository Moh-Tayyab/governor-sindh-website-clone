// pages/index.tsx
import Image from 'next/image';
import { courses } from '@/components/data/courses';

const CoreCoursesSequence: React.FC = () => {
 

  return (
    <section className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-blue-800 mb-8">Core Courses Sequence</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {courses.map((course) => (
            <div
              key={course.id}
              className="relative bg-white shadow-lg rounded-lg overflow-hidden hover:top-3 transition-shadow duration-300"
            >
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
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CoreCoursesSequence;

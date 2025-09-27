'use client';

import { useEffect, useState } from 'react';

export default function About() {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);
  const skills = [
    { name: 'JavaScript', level: 90 },
    { name: 'TypeScript', level: 85 },
    { name: 'React', level: 90 },
    { name: 'Next.js', level: 85 },
    { name: 'Node.js', level: 80 },
    { name: 'Tailwind CSS', level: 85 },
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            About Me
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            열정적인 웹 개발자로서 새로운 기술을 배우고 적용하는 것을 즐깁니다.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-6">개발자 소개</h3>
            <div className="space-y-4 text-gray-600">
              <p>
                안녕하세요! 웹 개발에 열정을 가진 SooBob입니다. 
                사용자 중심의 웹 애플리케이션을 개발하며, 
                깔끔하고 효율적인 코드 작성을 추구합니다.
              </p>
              <p>
                프론트엔드와 백엔드 모두에 관심이 많으며, 
                최신 웹 기술 트렌드를 따라가며 지속적으로 학습하고 있습니다.
              </p>
              <p>
                팀워크를 중시하며, 협업을 통해 더 나은 결과를 만들어내는 것을 좋아합니다.
              </p>
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-6">기술 스택</h3>
            <div className="space-y-4">
              {skills.map((skill, index) => (
                <div key={index}>
                  <div className="flex justify-between mb-2">
                    <span className="text-gray-700 font-medium">{skill.name}</span>
                    <span className="text-gray-500">{skill.level}%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div
                      className="bg-blue-600 h-2 rounded-full transition-all duration-1000 ease-out"
                      style={{ 
                        width: isMounted ? `${skill.level}%` : '0%',
                        transitionDelay: isMounted ? `${index * 100}ms` : '0ms'
                      }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

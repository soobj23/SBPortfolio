'use client';

import { useEffect, useState } from 'react';

export default function Hero() {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="mb-12">
          <div className="relative w-40 h-40 mx-auto mb-8">
            {/* 외부 링 */}
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500 via-purple-500 to-indigo-600 p-1">
              <div className="w-full h-full rounded-full bg-white flex items-center justify-center">
                {/* 내부 그라데이션 원 */}
                <div className="w-28 h-28 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center shadow-lg">
                  <span className="text-3xl font-bold text-white tracking-wider">SB</span>
                </div>
              </div>
            </div>
            {/* 장식용 점들 */}
            <div className="absolute -top-2 -right-2 w-4 h-4 bg-blue-400 rounded-full animate-pulse"></div>
            <div className="absolute -bottom-2 -left-2 w-3 h-3 bg-purple-400 rounded-full animate-pulse delay-1000"></div>
          </div>
        </div>
        
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
          안녕하세요, <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">SooBob</span>입니다
        </h1>
        
        <p className="text-xl sm:text-2xl text-gray-700 mb-10 max-w-3xl mx-auto leading-relaxed font-light">
          웹 개발자로서 사용자 경험을 중시하며, 
          <br className="hidden sm:block" />
          창의적이고 효율적인 솔루션을 만드는 것을 좋아합니다.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-6 justify-center">
          <button
            onClick={() => {
              if (!isMounted) return;
              document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="group bg-gradient-to-r from-blue-600 to-purple-600 text-white px-10 py-4 rounded-full text-lg font-medium hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
          >
            <span className="flex items-center justify-center gap-2">
              프로젝트 보기
              <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </span>
          </button>
          <button
            onClick={() => {
              if (!isMounted) return;
              document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="group border-2 border-gray-300 text-gray-700 px-10 py-4 rounded-full text-lg font-medium hover:border-blue-600 hover:text-blue-600 transition-all duration-300 transform hover:scale-105 bg-white/50 backdrop-blur-sm"
          >
            <span className="flex items-center justify-center gap-2">
              연락하기
              <svg className="w-5 h-5 group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </span>
          </button>
        </div>
      </div>
    </section>
  );
}

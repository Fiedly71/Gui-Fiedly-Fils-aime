"use client";

export function CardSkeleton() {
  return (
    <div className="glass rounded-2xl p-6 animate-pulse">
      <div className="w-full h-40 bg-gray-700/50 rounded-xl mb-4"></div>
      <div className="h-4 bg-gray-700/50 rounded w-3/4 mb-2"></div>
      <div className="h-3 bg-gray-700/50 rounded w-1/2"></div>
    </div>
  );
}

export function TextSkeleton({ lines = 3 }: { lines?: number }) {
  return (
    <div className="animate-pulse space-y-2">
      {Array.from({ length: lines }).map((_, i) => (
        <div
          key={i}
          className="h-4 bg-gray-700/50 rounded"
          style={{ width: `${100 - i * 15}%` }}
        ></div>
      ))}
    </div>
  );
}

export function ImageSkeleton({ className = "" }: { className?: string }) {
  return (
    <div className={`animate-pulse bg-gray-700/50 rounded-xl ${className}`}>
      <div className="flex items-center justify-center h-full">
        <svg className="w-10 h-10 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
      </div>
    </div>
  );
}

export function ServiceCardSkeleton() {
  return (
    <div className="glass rounded-2xl p-8 animate-pulse">
      <div className="w-16 h-16 bg-gray-700/50 rounded-xl mb-6"></div>
      <div className="h-6 bg-gray-700/50 rounded w-2/3 mb-3"></div>
      <div className="space-y-2 mb-6">
        <div className="h-3 bg-gray-700/50 rounded"></div>
        <div className="h-3 bg-gray-700/50 rounded w-5/6"></div>
        <div className="h-3 bg-gray-700/50 rounded w-4/6"></div>
      </div>
      <div className="flex gap-2">
        <div className="h-6 bg-gray-700/50 rounded-full w-20"></div>
        <div className="h-6 bg-gray-700/50 rounded-full w-24"></div>
        <div className="h-6 bg-gray-700/50 rounded-full w-16"></div>
      </div>
    </div>
  );
}

export function PageLoadingSkeleton() {
  return (
    <div className="min-h-screen pt-20">
      {/* Hero skeleton */}
      <div className="py-24 px-4">
        <div className="max-w-4xl mx-auto text-center animate-pulse">
          <div className="h-8 bg-gray-700/50 rounded-full w-40 mx-auto mb-6"></div>
          <div className="h-12 bg-gray-700/50 rounded w-3/4 mx-auto mb-4"></div>
          <div className="h-12 bg-gray-700/50 rounded w-1/2 mx-auto mb-6"></div>
          <div className="h-6 bg-gray-700/50 rounded w-2/3 mx-auto"></div>
        </div>
      </div>

      {/* Content skeleton */}
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid md:grid-cols-3 gap-8">
          {[1, 2, 3].map((i) => (
            <ServiceCardSkeleton key={i} />
          ))}
        </div>
      </div>
    </div>
  );
}

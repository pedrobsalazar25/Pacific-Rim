import React, { useState } from 'react';

interface PrddImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  src: string;
  alt: string;
  className?: string;
  fallbackLabel?: string;
  priority?: boolean;
}

export const PrddImage: React.FC<PrddImageProps> = ({
  src,
  alt,
  className = '',
  fallbackLabel = 'PRDD PROCESS VISUAL',
  priority = false,
  loading,
  decoding,
  ...rest
}) => {
  const [hasError, setHasError] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  // Default loading & decoding behavior
  const resolvedLoading = priority ? 'eager' : (loading || 'lazy');
  const resolvedDecoding = decoding || 'async';

  if (hasError) {
    return (
      <div
        className={`w-full h-full min-h-[160px] bg-[#0c263f] border border-[#2F6F9F]/30 flex flex-col items-center justify-center p-4 text-center select-none ${className}`}
        role="img"
        aria-label={alt}
      >
        <div className="w-8 h-8 rounded-full bg-[#123A63] border border-[#2F6F9F]/50 flex items-center justify-center mb-2">
          <span className="w-2 h-2 rounded-full bg-[#6D9F45]" />
        </div>
        <div className="text-[11px] font-mono tracking-wider text-[#DCE8EF] uppercase font-semibold">
          {fallbackLabel}
        </div>
        <div className="text-[9px] font-mono text-[#89B3D3]/80 uppercase mt-0.5">
          Clean Scrub Technologies
        </div>
      </div>
    );
  }

  return (
    <img
      src={src}
      alt={alt}
      loading={resolvedLoading}
      decoding={resolvedDecoding}
      onLoad={() => setIsLoaded(true)}
      onError={() => setHasError(true)}
      className={`${className} ${!isLoaded ? 'bg-[#0c263f]' : ''}`}
      {...rest}
    />
  );
};

'use client'

import styled from 'styled-components'
import Image from 'next/image'

export default function TestimonialsSlider({ testimonials }: any) {
  return (
    <StyledWrapper>
      <div
        className="slider"
        style={{
          '--width': '260px',
          '--height': '180px',
          '--quantity': testimonials.length,
        } as any}
      >
        <div className="list">
          {testimonials.map((t: any, idx: number) => (
            <div className="item" key={t.id} style={{ '--position': idx + 1 } as any}>
              <div className="card">
                <div className="flex items-center gap-3 mb-5">
                  <Image
                    src={t.image}
                    width={40}
                    height={40}
                    alt={t.name}
                    className="rounded-full"
                  />
                  <div className='flex'>
                    <p className="font-semibold text-sm">{t.name}</p>
                    <div className="flex gap-1 text-yellow-400 text-sm">
                  {[...Array(t.rating)].map((_, i) => (
                    <span key={i}>⭐</span>
                  ))}
                </div>
                  </div>
                </div>
                <p className="text-sm mb-2">{t.content}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </StyledWrapper>
  )
}

const StyledWrapper = styled.div`
  .card {
    width: 100%;
    height: 100%;
    padding: 15px;
    border-radius: 8px;
    background: #fff;
    color: #333;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  }

  .slider {
    width: 100%;
    height: var(--height);
    overflow: hidden;
    mask-image: linear-gradient(to right, transparent, #000 10% 90%, transparent);
  }

  .slider .list {
    display: flex;
    min-width: calc(var(--width) * var(--quantity));
    position: relative;
  }

  .slider .item {
    width: var(--width);
    height: var(--height);
    position: absolute;
    left: 100%;
    animation: autoRun 20s linear infinite;
    animation-delay: calc(
      (20s / var(--quantity)) * (var(--position) - 1) - 20s
    ) !important;
    transition: filter 0.4s;
  }

  @keyframes autoRun {
    from { left: 100%; }
    to { left: calc(var(--width) * -1); }
  }

  .slider:hover .item {
    animation-play-state: paused !important;
    filter: grayscale(1);
  }

  .slider .item:hover {
    filter: grayscale(0);
  }
`

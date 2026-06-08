type Sq = {
  w: number; h: number;
  top?: string; bottom?: string; left?: string; right?: string;
  bg: string; opacity: number;
  anim: 'floatUp' | 'floatDown';
  dur: string; delay: string;
  radius?: string;
}

const SQUARES: Sq[] = [
  { w: 20, h: 20, top: '120px',    left: '49%',    bg: '#1E88E5', opacity: 0.65, anim: 'floatUp',   dur: '5s',   delay: '0s'    },
  { w: 12, h: 12, top: '155px',    left: '52%',    bg: '#F7931E', opacity: 0.55, anim: 'floatUp',   dur: '4s',   delay: '0.7s'  },
  { w:  9, h:  9, top: '145px',    left: '46%',    bg: '#1E88E5', opacity: 0.40, anim: 'floatUp',   dur: '6s',   delay: '0s'    },
  { w: 22, h: 22, top: '190px',    right: '90px',  bg: '#F7931E', opacity: 0.70, anim: 'floatDown', dur: '6s',   delay: '0s'    },
  { w: 14, h: 14, top: '230px',    right: '55px',  bg: '#1E88E5', opacity: 0.80, anim: 'floatUp',   dur: '4s',   delay: '0.5s'  },
  { w: 10, h: 10, top: '260px',    right: '110px', bg: '#F7931E', opacity: 0.50, anim: 'floatDown', dur: '5s',   delay: '1.2s'  },
  { w: 44, h: 44, bottom: '180px', right: '28px',  bg: '#1E88E5', opacity: 0.55, anim: 'floatUp',   dur: '5.5s', delay: '0.8s', radius: '6px' },
  { w: 28, h: 28, bottom: '230px', right: '82px',  bg: '#F7931E', opacity: 0.50, anim: 'floatDown', dur: '4s',   delay: '1s'    },
  { w: 18, h: 18, bottom: '195px', right: '130px', bg: '#5a6a7a', opacity: 0.40, anim: 'floatUp',   dur: '3s',   delay: '1.5s'  },
  { w: 12, h: 12, bottom: '160px', right: '168px', bg: '#A7D8FF', opacity: 0.35, anim: 'floatUp',   dur: '5s',   delay: '0.2s'  },
  { w: 14, h: 14, top: '280px',    left: '22px',   bg: '#1E88E5', opacity: 0.35, anim: 'floatUp',   dur: '4s',   delay: '2s'    },
  { w: 10, h: 10, bottom: '280px', left: '34px',   bg: '#F7931E', opacity: 0.45, anim: 'floatDown', dur: '5s',   delay: '0s'    },
  { w: 16, h: 16, top: '200px',    left: '8%',     bg: '#1E88E5', opacity: 0.25, anim: 'floatUp',   dur: '6s',   delay: '0.3s'  },
]

export default function FloatingSquares() {
  return (
    <div className="pointer-events-none absolute inset-0 z-[1]" aria-hidden="true">
      {SQUARES.map((sq, i) => (
        <div
          key={i}
          className="absolute"
          style={{
            width:        sq.w,
            height:       sq.h,
            top:          sq.top,
            bottom:       sq.bottom,
            left:         sq.left,
            right:        sq.right,
            background:   sq.bg,
            opacity:      sq.opacity,
            borderRadius: sq.radius ?? '3px',
            animation:    `${sq.anim} ${sq.dur} ease-in-out ${sq.delay} infinite`,
          }}
        />
      ))}
    </div>
  )
}

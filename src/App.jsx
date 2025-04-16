import SimpleParallax from 'simple-parallax-js'
import { useState } from 'react'

function App() {
  const [orientation, setOrientation] = useState('up')
  const [scale, setScale] = useState(1.4)
  const [delay, setDelay] = useState(0.4)

  const handleOrientation = () => {
    if (orientation === 'up') {
      setOrientation('down')
    } else if (orientation === 'down') {
      setOrientation('right')
    } else if (orientation === 'right') {
      setOrientation('left')
    } else if (orientation === 'left') {
      setOrientation('up')
    }
  }

  const handleAddScale = () => {
    if (scale >= 3) {
      setScale(1.1)
    } else {
      setScale(scale + 0.1)
    }
  }

  const handleRemoveScale = () => {
    if (scale <= 1.1) {
      setScale(3.0)
    } else {
      setScale(scale - 0.1)
    }
  }

  const handleAddDelay = () => {
    if (delay >= 5) {
      setDelay(0.1)
    } else {
      setDelay(delay + 0.1)
    }
  }

  const handleRemoveDelay = () => {
    if (delay <= 0.1) {
      setDelay(5)
    } else {
      setDelay(delay - 0.1)
    }
  }

  return (
    <div>
      <div className='container'>
        <SimpleParallax orientation={orientation} scale={scale} delay={delay}>
          <img src='/img/sample.webp' alt='sample' width={800} height={600} />
        </SimpleParallax>
      </div>

      <div className='buttons'>
        <button className='button' onClick={() => handleOrientation()}>
          {orientation}
        </button>

        <button className='button' onClick={() => handleAddScale()}>
          Add Scale
        </button>
        <button className='button' onClick={() => handleRemoveScale()}>
          Remove Scale
        </button>

        <button className='button' onClick={() => handleAddDelay()}>
          Add Delay
        </button>
        <button className='button' onClick={() => handleRemoveDelay()}>
          Remove Delay
        </button>
      </div>
    </div>
  )
}

export default App

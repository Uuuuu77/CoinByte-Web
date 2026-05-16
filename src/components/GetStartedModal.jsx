import { useEffect, useRef } from 'react'
import PropTypes from 'prop-types'
import { EXTERNAL_LINKS } from '../config/links'

export default function GetStartedModal({ open, onClose }) {
  const closeButtonRef = useRef(null)

  useEffect(() => {
    if (!open) return undefined

    const previousFocus = document.activeElement
    closeButtonRef.current?.focus()

    const handleKeyDown = (event) => {
      if (event.key === 'Escape') onClose()
    }

    document.addEventListener('keydown', handleKeyDown)
    return () => {
      document.removeEventListener('keydown', handleKeyDown)
      previousFocus?.focus?.()
    }
  }, [onClose, open])

  if (!open) return null

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm fade-in"
      role="presentation"
      onMouseDown={(event) => event.target === event.currentTarget && onClose()}
    >
      <div
        aria-labelledby="get-started-title"
        aria-modal="true"
        className="relative mx-4 w-full max-w-md rounded-xl bg-[#1A1A1A] p-8 slide-up"
        role="dialog"
      >
        <h2 id="get-started-title" className="mb-4 text-2xl font-bold">
          Get Started with CoinByte
        </h2>
        <p className="mb-6 text-gray-400">
          Create your account or join early access before the CoinByte API opens publicly.
        </p>
        <a href={EXTERNAL_LINKS.coinbyteApi} target="_blank" rel="noopener noreferrer" className="button-primary w-full">
          Open CoinByte API
        </a>
        <button
          ref={closeButtonRef}
          type="button"
          className="absolute right-4 top-4 text-gray-400 hover:text-white"
          onClick={onClose}
          aria-label="Close get started dialog"
        >
          ×
        </button>
      </div>
    </div>
  )
}

GetStartedModal.propTypes = {
  open: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
}

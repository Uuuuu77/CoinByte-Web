import PropTypes from 'prop-types'

export const Loader = ({ size = 'md', color = 'border-primary-orange', label = 'Loading' }) => {
  const sizes = {
    sm: 'h-8 w-8',
    md: 'h-12 w-12',
    lg: 'h-16 w-16',
  }

  return (
    <div className="flex h-full items-center justify-center" role="status" aria-live="polite" aria-label={label}>
      <div className={`animate-spin rounded-full border-b-2 border-t-2 ${color} ${sizes[size]}`} />
      <span className="sr-only">{label}</span>
    </div>
  )
}

Loader.propTypes = {
  size: PropTypes.oneOf(['sm', 'md', 'lg']),
  color: PropTypes.string,
  label: PropTypes.string,
}

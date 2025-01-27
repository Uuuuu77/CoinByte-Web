export const Loader = ({ size = 'md', color = 'primary-orange' }) => {
  const sizes = {
    sm: 'h-8 w-8',
    md: 'h-12 w-12',
    lg: 'h-16 w-16'
  }

  return (
    <div className="flex justify-center items-center h-full">
      <div
        className={`animate-spin rounded-full border-t-2 border-b-2 border-${color} ${sizes[size]}`}
      />
    </div>
  )
}

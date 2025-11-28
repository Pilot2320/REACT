import './ProgressBar.css';

function ProgressBar({ progress, label, color = '#4CAF50', height = 20, showPercentage = true }) {
  const normalizedProgress = Math.min(100, Math.max(0, progress));

  return (
    <div className="progress-bar-container">
      {label && (
        <div className="progress-bar-header">
          <span className="progress-label">{label}</span>
          {showPercentage && <span className="progress-percentage">{normalizedProgress}%</span>}
        </div>
      )}
      
      <div className="progress-bar-outer" style={{ height: `${height}px` }}>
        <div
          className="progress-bar-inner"
          style={{
            width: `${normalizedProgress}%`,
            backgroundColor: color,
            height: '100%',
            transition: 'width 0.5s ease-in-out'
          }}
        />
      </div>
    </div>
  );
}

export default ProgressBar;
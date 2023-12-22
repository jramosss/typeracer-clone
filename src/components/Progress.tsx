import React, { useEffect, useState } from 'react'

interface ProgressBarProps {
    progress: number
}

const ProgressBar: React.FC<ProgressBarProps> = ({ progress }) => {
    const [normalizedProgress, setNormalizedProgress] = useState<number>(0)

    useEffect(() => {
        const clampedProgress = Math.min(100, Math.max(0, progress))
        setNormalizedProgress(clampedProgress)
    }, [progress])

    return (
        <div className="relative w-full h-8">
            <div className="absolute top-1/2 left-0 w-full h-2 bg-gray-300 rounded" />

            {/* Progress Dot */}
            <div
                style={{ left: `${normalizedProgress}%` }}
                className="absolute top-1/2 transform -translate-x-1/2 w-4 h-4 bg-blue-500 rounded-full"
            />
        </div>
    )
}

export default ProgressBar
